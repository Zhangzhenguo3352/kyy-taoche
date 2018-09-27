import { stringify } from 'qs';
import request from '../../utils/request';
import requestStream from '../../utils/requestStream';

// 省
export async function getProvinces(params) {
  return request(`/basedata/yxBasicRegion/getNewProvinces`, {
    method: 'POST',
  });
}
//  市
export async function getCities(params) {
  const headers = process.env.NODE_ENV === 'development' ? {
		'Content-Type': 'application/json;'  
	} : {}
  return request(`/basedata/yxBasicRegion/getNewSubRegions`, {
    method: 'POST',
    headers,
    body:params
  });
}
//区县
export async function getDistricts(params) {
  return request(`/basedata/yxBasicRegion/getNewSubRegions`, {
    method: 'POST',
    body:params,
  });
}
