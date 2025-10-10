<template>
    <view class="main">
        <!-- 上传区域 -->
        <view class="upload-area" @click="fileRender.createFileInputDom">
            <view class="upload-icon">
                <text class="icon-plus">+</text>
            </view>
            <text class="upload-text">上传文件</text>
        </view>

        <!-- 文件列表 -->
        <view class="file-list">
            <view v-for="(file, index) in fileList" :key="index" class="file-item">
                <text class="file-type-icon">
                    {{getFileEmoji(file.name)}}
                </text>
                <view class="file-info">
                    <text class="file-name">{{file.name}}</text>
                </view>
                <view class="delete-btn" @click="removeFile(index)">
                    <text class="delete-icon">×</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'FileSelector',

    data() {
        return {
            fileList: [],
            // 文件扩展名映射
            fileTypes: {
                image: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'],
                document: ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'pdf', 'txt'],
                audio: ['mp3', 'wav', 'ogg', 'aac'],
                video: ['mp4', 'avi', 'mov', 'wmv', 'flv'],
                archive: ['zip', 'rar', '7z', 'tar', 'gz'],
                json: ['json']
            }
        }
    },

    methods: {
        // 获取文件类型
        getFileType(fileName) {
            const extension = fileName.split('.').pop().toLowerCase()
            for (let type in this.fileTypes) {
                if (this.fileTypes[type].includes(extension)) return type
            }
            return 'other'
        },

        // 根据文件类型获取对应emoji
        getFileEmoji(fileName) {
            const fileType = this.getFileType(fileName)
            const emojiMap = {
                image: '🖼️',
                document: '📄',
                audio: '🎵',
                video: '🎬',
                archive: '📦',
                json: '📋',
                other: '📎'
            }
            return emojiMap[fileType] || '📎'
        },

        // 接收文件
        async receiveRenderFile(result) {
            let fileInfo = {
                name: result.name,
                path: ''
            }

            //#ifdef APP-PLUS
            const fileUrl = await this.base64toPath(result.filePath, result.name)
            fileInfo.path = fileUrl.localAbsolutePath
            //#endif
            //#ifdef H5
            fileInfo.path = result.filePath
            //#endif

            this.fileList.push(fileInfo)
            this.$emit('filesChanged', this.fileList)
            this.$emit('fileSelected', fileInfo)
        },

        // 删除文件
        removeFile(index) {
            this.fileList.splice(index, 1)
            this.$emit('filesChanged', this.fileList)
        },

        // APP端base64转本地路径
        async base64toPath(base64, attachName) {
            return new Promise((resolve, reject) => {
                const filePath = `_doc/file/${attachName}`
                plus.io.resolveLocalFileSystemURL('_doc', entry => {
                    entry.getDirectory('file', {
                        create: true,
                        exclusive: false
                    }, entry => {
                        entry.getFile(attachName, {
                            create: true,
                            exclusive: false
                        }, entry => {
                            entry.createWriter(writer => {
                                writer.onwrite = () => {
                                    resolve({
                                        relativePath: filePath,
                                        localAbsolutePath: plus.io.convertLocalFileSystemURL(filePath)
                                    })
                                }
                                writer.onerror = reject
                                writer.seek(0)
                                writer.writeAsBinary(this.getSymbolAfterString(base64, ','))
                            }, reject)
                        }, reject)
                    }, reject)
                }, reject)
            })
        },

        getSymbolAfterString(val, symbolStr) {
            return val ? val.toString().split(symbolStr)[1] || val : ''
        }
    }
}
</script>

<script module="fileRender" lang="renderjs">
export default {
    methods: {
        createFileInputDom(e, ownerVm) {
            const fileInput = document.createElement('input')
            fileInput.setAttribute('type', 'file')
            fileInput.setAttribute('accept', '*')
            fileInput.setAttribute('multiple', 'multiple')
            fileInput.click()

            fileInput.addEventListener('change', e => {
                if (!e.target.files.length) return

                Array.from(e.target.files).forEach(file => {
                    //#ifdef H5
                    ownerVm.callMethod('receiveRenderFile', {
                        name: file.name,
                        filePath: URL.createObjectURL(file)
                    })
                    //#endif

                    //#ifdef APP-PLUS
                    const reader = new FileReader()
                    reader.onload = ({target}) => {
                        target?.result && ownerVm.callMethod('receiveRenderFile', {
                            name: file.name,
                            filePath: target.result
                        })
                    }
                    reader.readAsDataURL(file)
                    //#endif
                })
            })
        }
    }
}
</script>

<style>
/* 基础样式 */
.main {
    padding: 20rpx;
}

/* 上传区域样式 */
.upload-area {
    width: 100%;
    height: 160rpx;
    background-color: #FFFFFF;
    border: 2rpx dashed #E5E5E5;
    border-radius: 8rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20rpx;
    padding: 20rpx;
    box-sizing: border-box;
}

.upload-icon {
    width: 44rpx;
    height: 44rpx;
    background-color: #F7F7F7;
    border-radius: 4rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8rpx;
}

.icon-plus {
    color: #C7C7C7;
    font-size: 28rpx;
    font-weight: 100;
}

.upload-text {
    font-size: 22rpx;
    color: #A8A8A8;
}

/* 文件列表样式 */
.file-list {
    width: 100%;
}

.file-item {
    background-color: #FFFFFF;
    border-radius: 8rpx;
    padding: 20rpx;
    margin-bottom: 16rpx;
    display: flex;
    align-items: center;
}

.file-type-icon {
    width: 44rpx;
    height: 44rpx;
    margin-right: 16rpx;
    font-size: 32rpx;
    text-align: center;
    line-height: 44rpx;
}

.file-info {
    flex: 1;
    overflow: hidden;
}

.file-name {
    font-size: 22rpx;
    color: #A8A8A8;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.delete-btn {
    padding: 4rpx 8rpx;
}

.delete-icon {
    font-size: 24rpx;
    color: #C7C7C7;
    line-height: 1;
}

.delete-icon:active {
    color: #ff4444;
}
</style>
