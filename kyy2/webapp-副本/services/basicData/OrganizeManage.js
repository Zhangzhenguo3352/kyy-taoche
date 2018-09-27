/*
 *在services层写入后台接口名称
 * */
import { stringify } from 'qs';
import request from '../../utils/request';

//组织管理列表接口   startTime 2018/1/2
export async function organizationInfoList(params) {
  return request('/auth-web/organizationController/organizationInfoList ', {
    method: 'POST'
  });
}