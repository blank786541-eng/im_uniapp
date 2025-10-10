<template>
	<view class="cust-scan-code" v-if="show">
		<view id="reader"></view>
	</view>
</template>

<script>
	import {
		Html5Qrcode
	} from 'html5-qrcode'
	export default {
		name: "cust-scan-code",
		data() {
			return {
				options: null,
				show: false,
			};
		},
		methods: {
			start(options) {
				this.options = options
				// 检查摄像头权限
				if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
					navigator.mediaDevices.getUserMedia({
							video: true
						})
						.then((stream) => {
							// 获得权限后关闭流
							stream.getTracks().forEach(track => track.stop());
							this.show = true
							// 有权限后调用扫码
							this.getCameras();
						})
						.catch((err) => {
							// 用户拒绝了权限
							uni.showToast({
								title: '请允许使用摄像头权限，以便进行扫码',
								icon: 'none'
							})
							this.options.fail?.('未获得摄像头权限');
							// uni.showModal({
							// 	title: '提示',
							// 	content: '请允许使用摄像头权限，以便进行扫码',
							// 	confirmText: '去设置',
							// 	success: (res) => {
							// 		if (res.confirm) {
							// 			// 打开设置页面
							// 			this.options.fail?.('未获得摄像头权限');
							// 		} else {
							// 			this.options.fail?.('用户取消了摄像头权限');
							// 		}
							// 	}
							// });
						});
				} else {
					uni.showToast({
						title: '您的浏览器不支持访问摄像头',
						icon: 'none'
					})
					this.options.fail?.('浏览器不支持访问摄像头');
				}
			},
			stop() {
				this.show = false
				let that = this
				this.html5QrCode
					.stop()
					.then(ignore => {
						// 二维码扫描已停止
						console.log('二维码扫描已停止');
					})
					.catch(err => {
						// 停止失败，处理错误
						console.log('无法停止扫描');
					});
			},
			getCameras() {
				let that = this
				Html5Qrcode.getCameras()
					.then((devices) => {
						// console.log(devices)
						that.html5QrCode = new Html5Qrcode('reader')
						let windowInfo = uni.getWindowInfo()
						const width = windowInfo.windowWidth
						const height = windowInfo.windowHeight
						// 横屏
						const aspectRatio = width / height
						// 竖屏
						const reverseAspectRatio = height / width

						// const mobileAspectRatio =
						// 	reverseAspectRatio > 1.5 ?
						// 	reverseAspectRatio + (reverseAspectRatio * 12) / 100 :
						// 	reverseAspectRatio
						if (devices && devices.length) {
							let cameraId = ''
							if (devices.length > 1) {
								cameraId = devices[1].id;
							} else {
								cameraId = devices[0].id;
							}
							// 计算二维码扫描框大小 - 使用宽度/高度中较小的值来确保方框适合屏幕
							// 并在扫描区域周围留出一些边距
							const qrboxSize = Math.min(width, height) * 0.7
							// 使用这个来开始扫描
							that.html5QrCode
								.start(cameraId, {
										fps: 10, // 可选，二维码扫描的每秒帧数
										// aspectRatio: aspectRatio + 1,
										qrbox: qrboxSize, // 可选，如果你想要边界框UI
										videoConstraints: {
											facingMode: 'environment',
											aspectRatio: reverseAspectRatio,
										},
									},
									(decodedText, decodedResult) => {
										// 当码被读取时执行操作
										console.log('decodedText', decodedText)
										that.options.success?.(decodedText, decodedResult)
										that.stop();
									},
									(errorMessage) => {
										// 解析错误，忽略它
										// console.log('解析错误，忽略它', errorMessage)
									}
								)
								.catch((err) => {
									// 启动失败，处理它
									console.log('启动失败，需要处理')
									that.options.fail?.(err)
									this.show = false
								})
						}
					})
					.catch((err) => {
						// 处理错误
						console.log(err)
						that.options.fail?.(err)
						this.show = false
					})
			},
		}
	}
</script>
<style lang="scss" scoped>
	.cust-scan-code {
		width: 100vw;
		height: 100vh;
		position: fixed;
		z-index: 1000;
		top: 0;
		left: 0;
		background-color: #000;
	}

	#reader {
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}
</style>