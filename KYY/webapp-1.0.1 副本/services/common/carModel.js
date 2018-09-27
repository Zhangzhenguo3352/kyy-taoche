import { stringify } from 'qs';
import request from '../../utils/request';
import requestStream from '../../utils/requestStream';

export async function getMasterBrands(params) {
   return request(`/basedata/api/car/masterBrand?${stringify(params)}`);
}
export async function getBrands(params) {
  return request(`/basedata/api/car/brand/`+params);
}
export async function getModels(params) {
  return request(`/basedata/api/car/newModel/`+params);
}
export async function getStyles(params) {
  return request(`/basedata/api/car/getStyleForNowmsrp/?${stringify(params)}`);
}
