const apiUrl = "https://api.freessl.help/"

export async function httpRequest(opt: { url: string, data: Object, method: string,headers:Object }) {
     uni.showLoading();
     let fromData=new FormData
    for (let dataKey in opt.data) {
        fromData.append(dataKey, opt.data[dataKey]);
    }
    const res = await uni.request({
        url: apiUrl + opt.url,
        data: opt.data,
        method: opt.method || "POST",

        header:Object.assign({}, {'Content-Type': 'application/x-www-form-urlencoded'},opt.headers),
    })
    console.log(res);
    if (res.data.code != 200) {
        uni.showToast({
            icon: 'error',
            title: res.data.message
        })
        return Promise.reject(res.data)
    }
    return res.data;
}

