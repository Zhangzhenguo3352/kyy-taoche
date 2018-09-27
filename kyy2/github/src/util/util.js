// 公用 ajax
import network from '@system.network'
import prompt from '@system.prompt'
import {inItdata} from './dataX'

export function ajaxFn(fetch, url, data) {
  


  var promise = new Promise((resolve, reject) => {
    // fetch.fetch({
    //   url,
    //   data,
    //   header: inItdata.header,
    //   method: 'GET',
    //   success: data => {
    //     // let jsonData = JSON.parse(data)
    //     resolve(data)
    //   },
    //   fail: (data, code) => {
    //     reject(data, code)
    //   }
    // })
    var _this = this
    network.getType({

      success: (data) => {
        console.log('handling success: ' + data.type)
        if(data.type == 'none') {
          prompt.showToast({
            message: '当前网络不可用，请检查网络！',
            duration:0
          })
          resolve()
        } else {
          fetch.fetch({
            url,
            data,
            header: inItdata.header,
            method: 'GET',
            success: data => {
              // let jsonData = JSON.parse(data)
              resolve(data)
            },
            fail: (data, code) => {
              reject(data, code)
            }
          })
        }
        
      },
      fail: (data, code) => {
        prompt.showToast({
          message:'识别失败：错误码' + code,
          duration:0
        })
      },
      complete:  () => {
        
      }
    })
    
  })
  return promise

  
}

// 获取 地理位置
export function getLocation(geolocation, prompt, fn, error) {
  geolocation.getLocation({
    timeout: 8000,
    success: data => {
      console.log(
        '获取 地理位置handling success: longitude=' +
          data.longitude +
          ', latitude=' +
          data.latitude
      )
      let json = {
        getLongitude: data.longitude,
        getLatitude: data.latitude
      }
      fn(json)
    },
    fail: (data, code) => {
      console.log('handling fail, code=' + code)
      if (code == 201) {
        prompt.showToast({
          message: '用户拒绝，获取定位权限失败',
          duration: 0
        })
        error(201)
      } else if (code == 204) {
        console.log('sbai')
        prompt.showToast({
          message: '未获取到当前城市 请手动选择',
          duration: 0
        })
        error(201)
      } else if (code == 1000) {
        prompt.showToast({
          message: '系统位置开关关闭',
          duration: 0
        })
        error(201)
      } else {
        prompt.showToast({
          message: '未获取到当前城市 请手动选择',
          duration: 0
        })
        error(201)
      }
    }
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
    callback: data => {
      console.log(
        '点击监听地理位置handling success: longitude=' +
          data.longitude +
          ', latitude=' +
          data.latitude
      )
      let json = {
        subscribeLongitude: data.longitude,
        subscribeLatitude: data.latitude
      }
      fn(json)
    },
    fail: function(data, code) {
      console.log('handling fail, code=' + code)
      error()
      if (code == 201) {
        prompt.showToast({
          message: '用户拒绝，获取定位权限失败',
          duration: 0
        })
      } else if (code == 1000) {
        prompt.showToast({
          message: '系统位置开关关闭',
          duration: 0
        })
      } else {
        prompt.showToast({
          message: '未知异常',
          duration: 0
        })
      }
    }
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
    success: function(data) {
      fn(data)
    },
    fail: function(data, code) {
      prompt.showToast({
        message: code,
        duration: 0
      })
    }
  })
}

// 修改 storage 存储内容
export function storage_set(storage, key, value, prompt, fn) {
  storage.set({
    key,
    value,
    success: function(data) {
      fn(data)
    },
    fail: function(data, code) {
      prompt.showToast({
        message: code,
        duration: 0
      })
    }
  })
}
// 删除存储内容
export function storage_delete(storage, key, prompt, fn) {
  storage.delete({
    key,
    success: function(data) {
      fn(data)
    },
    fail: function(data, code) {
      prompt.showToast({
        message: code,
        duration: 0
      })
    }
  })
}
// 清空存储内容( 全部)
export function storage_clear(storage, prompt, fn) {
  storage.clear({
    success: function(data) {
      fn(data)
    },
    fail: function(data, code) {
      prompt.showToast({
        message: code,
        duration: 0
      })
    }
  })
}

export const tabData = {
  0: '淘车二手车',
  1: '二手车列表',
  2: '卖车',
  3: '估价'
}
// 配置排序 数据
export const rowListHeaderData = [
  {
    orderid: 0,
    ordertype: 0
  },
  {
    orderid: 2,
    ordertype: 1
  },
  {
    orderid: 2,
    ordertype: 2
  },
  {
    orderid: 1,
    ordertype: 2
  },
  {
    orderid: 4,
    ordertype: 2
  },
  {
    orderid: 3,
    ordertype: 1
  }
]


export function phoneNumberFn(value) {
  const regPhone = /^(((1[3456789][0-9]{1})|(15[0-9]{1}))+\d{8})$/ // 手机号码表达式
  if (regPhone.test(value)) {
    return true // 可以提交
  } else {
    return false // 不能提交
  }
}

// 获取当前是那个城市
export function getlocaCurrentCity(storage, prompt, ) {
  storage.get({
    key: 'locationstate',
    success: function(data) {
      console.log('s', data)
      // if (!data || data == 'currentCity') {

      // } else {
      // }

    },
    fail: function(data, code) {
      prompt.showToast({
        message: code,
        duration: 0
      })
    }
  })
}

// 对象在 数组的第几项
export function idIsFn(name, obj) {
  let timer
  for(var i = 0; i< obj.length; i++) {
    if(obj[i].title == name || obj[i].data.selectName == name) {
      timer = i
    }
  }
  return timer
}
export function idIsFn2(name, obj) {
  let timer
  let maxrOW
  for(var i = 0; i< obj.length; i++) {
    for(var j = 0; j < obj[i].UcarMakeItemList.length; j++) {
      if(obj[i].UcarMakeItemList[j].Name == name ) {
        timer = j
        maxrOW = i
      }
    }
  }
  return {timer, maxrOW}
}


export function utlSpliceFn(labeldata) {
  let str = ''
  let data = labeldata
  for(var i = 0; i < data.length; i++) {
    console.log('data[i].title', data[i].title, JSON.stringify(data[i]))
    if(data[i].title == '价格' || data[i].title == 'home筛选_0') {
      if(data[i].type.lp == '') {
        if(data[i].type.hp != '') { // 1没有， 2 有
          str += `&hp=${data[i].type.hp}`
        }
      } else if(data[i].type.hp == '') {
        if(data[i].type.lp != '') { // 1 有， 2 没有
          str += `&lp=${data[i].type.lp}`
        }
      } else {
        str += `&lp=${data[i].type.lp}&hp=${data[i].type.hp}`
      }
    } else if (data[i].title == '品牌') {
      str += `&${data[i].type}=${data[i].params}`
    } else if (data[i].title == '筛选'){
      console.log('data[i].type.lage', data[i].type.lage)
      if(data[i].type.lage) {
        str += `&lage=${data[i].type.lage}&hage=${data[i].type.hage}`
      } else {
        str += `&${data[i].type}=${data[i].params}`
      }
    } else {
      str += `&${data[i].type}=${data[i].params}`
    }
  }
  return str
}

export function filterObject(currentData, allData) {
  console.log('currentData---------',JSON.stringify(currentData))
  console.log('allData---------', JSON.stringify(allData))
}

export function createShortcut () {
  var prompt = require('@system.prompt')
  var shortcut = require('@system.shortcut')
  shortcut.hasInstalled({
    success: function (ret) {
      if (ret) {
        prompt.showToast({ message: '已创建桌面图标' })
      } else {
        shortcut.install({
          success: function () {
            prompt.showToast({ message: '成功创建桌面图标' })
          },
          fail: function (errmsg, errcode) {
            prompt.showToast({ message: 'error: ' + errcode + '---' + errmsg })
          }
        })
      }
    }
  })
}