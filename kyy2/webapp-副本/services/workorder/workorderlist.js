import { stringify } from 'qs';
import request from '../../utils/request';

//获取工单列表
export async function queryOrderList(params) {
  return request('/workform-web/api/findRecords', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//获取未接来电列表
export async function queryMissCallList(params) {
  return request('/workform-web/api/findUnConnectRecords', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//更新未接来电状态
export async function updateUnConnectRecord(params) {
  return request('/workform-web/api/updateUnConnectRecord', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//获取坐席分组
export async function querygroup(params) {
  return request('/workform-web/api/getGroups', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//获取分组下的坐席
export async function querygroupseats(params) {
  return request('/workform-web/api/getUsersByOrgId', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//获取工单类型
export async function queryordertypes(params) {
  return request(`/workform-web/api/getDictSelectList?${stringify(params)}`);
}

//获取工单详细
export async function queryorderdetail(params) {
  return request('/workform-web/api/getRecordInfoById', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}