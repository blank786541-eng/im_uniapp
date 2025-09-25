export  const apiUrl = "https://api.imgbt.net/"

export async function httpRequest(opt: { url: string, data: Object, method: string, headers: Object }) {
    uni.showLoading();
    let fromData = new FormData
    for (let dataKey in opt.data) {
        fromData.append(dataKey, opt.data[dataKey]);
    }
    return  new Promise((resolve, reject) => {
        uni.request({

            url: apiUrl + opt.url,
            data: opt.data,
            method: opt.method || "POST",
            success(res) {
                console.log("success :", res.data.data);

                if(res.data.code!=200){
                    uni.showToast({
                        icon: 'error',
                        title: res.data.message
                    })
                    reject();
                }else{
                    resolve(res.data.data);
                }
            },
            fail(e) {
                uni.showToast({
                    icon: 'error',
                    title: '未知错误'
                })
                reject();
            },
            complete(res) {
                console.log("complete :", res);
                uni.hideLoading();
            },
            header: Object.assign({}, {'Content-Type': 'application/x-www-form-urlencoded'}, opt.headers),
        })
    })


}

export async function updateImInfo(opt: {gender:number, nickname: string, mobile: string, signature: string, }) {

    await httpRequest({
        url: "im/api/updateUser",
        method: 'POST',
        data: Object.assign({},{
            accountId:uni.$UIKitStore.userStore.myUserInfo.accountId,
        },opt)
    })
    if (opt.nickname != null) {
        uni.$UIKitNIM.V2NIMUserService.updateSelfUserProfile({name: opt.nickname}).then((res) => {
            uni.showToast({
                title:"修改成功",
                icon: "success",
                duration: 1000,success:()=>{
                    uni.navigateBack();
                }
            })
        })
    }
    if (opt.mobile != null) {
        uni.$UIKitNIM.V2NIMUserService.updateSelfUserProfile({mobile: opt.mobile}).then((res) => {
            uni.showToast({
                title:"修改成功",
                icon: "success",
                duration: 1000,success:()=>{
                    uni.navigateBack();
                }
            })
        })
    }
    if (opt.signature != null) {
        uni.$UIKitNIM.V2NIMUserService.updateSelfUserProfile({sign: opt.signature}).then((res) => {

            uni.showToast({
                title:"修改成功",
                icon: "success",
                duration: 1000,success:()=>{
                    uni.navigateBack();
                }
            })
        })
    } if (opt.gender != null) {
        uni.$UIKitNIM.V2NIMUserService.updateSelfUserProfile({gender: opt.gender}).then((res) => {
            uni.showToast({
                title:"修改成功",
                icon: "success",
            })
        })
    }

}
