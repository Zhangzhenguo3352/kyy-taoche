import { stringify } from 'qs';
import request from '../../utils/request';


export async function getMasterBrands(params) {
  return request(`/basedata/api/car/masterBrand?${stringify(params)}`);
}
export async function getBrands(params) {
  return request('/basedata/api/car/brand/'+params.masterId);
}
export async function getModels(params) {
  return request('/basedata/api/car/model/'+params.brandId);
}
export async function getStyles(params) {
  return request(`/basedata/api/car/style?${stringify(params)}`);
}


