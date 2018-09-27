import { stringify } from 'qs';
import request from '../../utils/request';
export async function queryfinancingMaturitySelect(params) {
  return request(`/basedata/api/dictItem/getDictItemByGroupCode`, {
    method: 'POST',
    body:params,
  });
}
export async function getPhoneAttrInfo(params) {
  return request(`/basedata/yxPhoneAtt/getPhoneAttrInfo`, {
    method: 'POST',
    body:params,
  });
}
