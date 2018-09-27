// 公用 ajax 
export function ajaxFn(fetch, url, data) {
    var promise = new Promise(function(resolve, reject){
        fetch.fetch({
            url,
            data,
            method: "GET",
            success: (data) => {
                // let jsonData = JSON.parse(data)
                resolve(data);
            },
            fail: (data, code) => {
                reject(data, code)
            }
        })
    })
    return promise;
}
    
// 获取 地理位置
export function getLocation(geolocation, prompt, fn, error) {
    geolocation.getLocation({
        timeout: 8000,
        success:(data)=>{
            console.log("获取 地理位置handling success: longitude=" + data.longitude + ", latitude=" + data.latitude);
                let json = {
                    'getLongitude': data.longitude,
                    'getLatitude': data.latitude
                }
                fn( json )
            },
        fail: (data, code)=> {
            console.log("handling fail, code=" + code);
            if (code == 201) {
                prompt.showToast({
                    message:'用户拒绝，获取定位权限失败',
                    duration:0
                });
                error(201)
            }else if (code == 204) {
                console.log('sbai')
                prompt.showToast({
                    message:'未获取到当前城市 请手动选择',
                    duration:0
                });
                error(201)
            }else if (code == 1000) {
                prompt.showToast({
                    message:'系统位置开关关闭',
                    duration:0
                });
                error(201)
            }else {
                prompt.showToast({
                    message:'未获取到当前城市 请手动选择',
                    duration:0
                });
                error(201)
            }
        },
        // complete: ()=> {
        //     console.log('地理位置获取结束')
        //     prompt.showToast({
        //         message:'地理位置获取结束',
        //         duration:0
        //     });
        // }
    })
}

// 点击监听地理位置
export function subscribe(geolocation, prompt, fn, error) {
    console.log('lala')
    geolocation.subscribe({
        callback:(data)=> {
            console.log("点击监听地理位置handling success: longitude=" + data.longitude + ", latitude=" + data.latitude);
            let json = {
                'subscribeLongitude' : data.longitude,
                'subscribeLatitude': data.latitude
            }
            fn( json )
            },
        fail: function(data, code) {
            console.log("handling fail, code=" + code);
            error()
            if (code == 201) {
                prompt.showToast({
                    message:'用户拒绝，获取定位权限失败',
                    duration:0
                });
            }else if (code == 1000) {
                prompt.showToast({
                    message:'系统位置开关关闭',
                    duration:0
                });
            }else {
                prompt.showToast({
                    message:'未知异常',
                    duration:0
                });
            }
        },
        // complete: ()=> {
        //     console.log('地理位置获取结束')
        //     prompt.showToast({
        //         message:'地理位置获取结束',
        //         duration:0
        //     });
        // }
    })
}
            
// 读取 storage 存储内容, key对应的存储内容
export function storage_get(storage, key, prompt, fn) {
    storage.get({
        key,
        success: function (data) {
            fn(data)
        },
        fail: function (data, code) {
            prompt.showToast({
                message: code,
                duration:0
            });
        }
    })
}

// 修改 storage 存储内容
export function storage_set(storage, key, value, prompt, fn) {
    storage.set({
        key,
        value,
        success: function (data) {
            fn(data)
        },
        fail: function (data, code) {
            prompt.showToast({
                message: code,
                duration:0
            });
        }
    })
}
// 删除存储内容
export function storage_delete(storage, key, prompt, fn) {
    storage.delete({
        key,
        success: function (data) {
            fn(data)
        },
        fail: function (data, code) {
            prompt.showToast({
                message: code,
                duration:0
            });
        }
    })
}
// 清空存储内容( 全部)
export function storage_clear(storage, prompt, fn) {
    storage.clear({
        success: function (data) {
            fn(data)
        },
        fail: function (data, code) {
            prompt.showToast({
                message: code,
                duration:0
            });
        }
    })
}
