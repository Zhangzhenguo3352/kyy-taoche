import { stringify } from 'qs';
import request from '../../utils/request';

//获取电话记录
export async function querycallRecord(params) {
  return request('/workform-web/api/getCallRecords', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//获取线上下单信息
export async function queryonlineorder(params) {
  return request('/workform-web/api/searchClues', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//获取商机列表
export async function querybusiness(params) {
  return request('/workform-web/api/searchBizRecords', {
    method: 'POST',
    body: {
      ...params,
    },
  });

}

//获取短信记录
export async function querymessage(params) {
  return request('/workform-web/api/searchSMSRecords', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//获取未绑定工单电话记录
export async function queryunrelatedcalllist(params) {
  return request('/workform-web/api/getCallRecordsUnWorkForm', {
    method: 'POST',
    body: {
      ...params,
    },
  });

}

export async function querygetDictSelectList(params) {
  return request(`/workform-web/api/getDictSelectList?${stringify(params)}`);
}

//获取线索类型与融资期限 groupCode(0106:融资期限，0130：线索类型)
export async function queryClueTypes(params) {
  return request(`/workform-web/api/pub/queryClueTypes?${stringify(params)}`);
}



//保存草稿
export async function saveDraft(params) {
  return request('/workform-web/api/saveDraft', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//获取来电次数
export async function findCallNum(params) {
  return request('/workform-web/api/findCallNum', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}



//获取电话数字对应类型
export async function queryallcalltypes(params) {
  return request(`/workform-web/api/searchCallInTypes?${stringify(params)}`);
}

//保存工单
export async function saverecord(params) {
  return request('/workform-web/api/saverecord', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//获取金融贷款方案
export async function getLoanList(params) {
  return request('/product-web/api/pdcProductController/getProductPages', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//获取厂商指导价
export async function searchCarPrice(params) {
  return request(`/workform-web/api/pub/searchCarPrice?${stringify(params)}`);
}



//获取车型信息
export async function queryCarModel(params) {
  const baseUrl = '';

  const { type, id } = params;

  switch (type) {
    case 1:
      return request(`/basedata/api/car/masterBrand/`);
      break;
    case 2:
      return request(`/basedata/api/car/brand/${id}`);
      break;
    case 3:
      return request(`/basedata/api/car/newModel/${id}`);
      break;
    case 4:
      return request(`/basedata/api/car/newStyle?modelId=${id}`);
      break;
  }

}


//获取省市区
export async function queryArea(params) {

  const { type, id } = params;

  switch (type) {
    case 1:
      return request('/basedata/yxBasicRegion/getNewProvinces', {
        method: 'POST',
        body: {
        },
      });
      break;
    case 2:
      const headers = process.env.NODE_ENV === 'development' ? {
        'Content-Type': 'application/json;'
      } : {}
      return request('/basedata/yxBasicRegion/getNewSubRegions', {
        method: 'POST',
        headers,
        // body: { regionId: Number(id) },
        body: Number(id),
      });
      break;
    case 3:
      return request('/basedata/yxBasicRegion/getNewSubRegions', {
        method: 'POST',
        // body: { regionId: Number(id) },
        body: Number(id),
      });
      break;
  }

}



