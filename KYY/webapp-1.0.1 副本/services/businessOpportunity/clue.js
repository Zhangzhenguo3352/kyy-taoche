import { stringify } from 'qs';
import request from '../../utils/request';
/**
 * 保存线索
 */
export async function saveClue(params) {
  return request(`/clue-web/api/clue/addClue`, {
    method: 'POST',
    body:params,
  });
}
export async function queryCusBizDetail(params) {
  return request(`/bizopp-web/api/bo/detail`, {
    method: 'POST',
    body:params,
  });
}
export async function queryisExistCustom(params) {
  // return request(`/customer-web/custPersonInfo/isHavePerRecord`, {
    return request(`/bizopp-web/api/bo/customer/isHavePerRecord`, {
    method: 'POST',
    body:params,
  });
}
export async function setDistribute(params) {
  return request(`/clue-web/api/dispense/setDistribute?${stringify(params)}`);
}
export async function distributeStatus() {
  return request(`/clue-web/api/dispense/distributeStatus`);
}
