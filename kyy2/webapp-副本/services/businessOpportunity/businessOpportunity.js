import { stringify } from 'qs';
import request from '../../utils/request';
import requestStream from '../../utils/requestStream';


/**
 * 商机分发选人
 */
export async function getassignuserlist() {
	return request(`/bizopp-web/api/bo/assignuserlist`);
}
/**
 * 是否体验店主管
 */
export async function isExperienceManage() {
	return request(`/bizopp-web/api/bo/condition/useridentity`);
}
/**
 * 所属渠道
 */
export async function fetchchannelSelect(params) {
	return request(`/bizopp-web/api/bo/condition/channel?${stringify(params)}`);
}
/**
 * 所属分公司
 */
export async function fetchdeptSelect(params) {
	return request(`/bizopp-web/api/bo/condition/dept?${stringify(params)}`);
}
/**
 * 金融顾问
 */
export async function fetchinternalFinancialAdvisor() {
	return request(`/bizopp-web/api/bo/condition/adviser`);
}
/**
 * type=1（商机状态） type=2(最后跟进状态)，type=7（下发状态），  type=8(商机类型)
 */
export async function queryBizoppSelect(params) {
	return request(`/bizopp-web/api/bo/condition/dic?${stringify(params)}`);
}
/**
 * //type=1（当前跟进人）,type=2（线上跟进人）,type=3（落地跟进人）,type=4（提报人）,type=5（渠道专员）
 */
export async function queryBizoppUserSelect(params) {
	return request(`/bizopp-web/api/bo/condition/user?${stringify(params)}`);
}
/**
 * 通话记录列表
 */
export async function queryCallRecordList(params) {
   //return request(`/softPhone-web/api/crmExtensionManage/callInfoForBusiness?${stringify(params)}`, {
    return request(`/softPhone-web/api/crmExtensionManage/callInfoForBusiness`, {
    method: 'POST',
    body:params,
  });

}
/**
 * 已选产品列表
 */
export async function queryProductList(params) {
 return request(`/product-web/api/pdcProductController/getProductPages`, {
    method: 'POST',
    body:params,
  });
}
/**
 * 待选产品列表
 */
export async function queryUnSelectProductList(params) {
  return request(`/product-web/api/pdcProductController/getProductPages`, {
    method: 'POST',
    body:params,
  });
}
// /**
//  * 保存待选产品
//  */
export async function saveProductList(params) {
  return request(`/saveProductList?${stringify(params)}`);
}
/**
 * 查询商机列表
 */
export async function queryBusinessOpportunityList(params) {
	return request(`/bizopp-web/api/bo/list`, {
    method: 'POST',
    body:params,
  });
}
/**
 * 商机分配
 */
export async function distributionBusiness(params) {
  return request(`/bizopp-web/api/bo/assign`, {
    method: 'POST',
    body:params,
  });
}
/**
 * 商机分发
 */
export async function distributeBusiness(params) {
	 return request(`/bizopp-web/api/bo/distribute`, {
	    method: 'POST',
	    body:params,
	  });
}
/**
 * 商机转移
 */
export async function transferBusiness() {
  return request(`/bizopp-web/api/bo/transferBusiness`);
}
/**
 * 商机导出
 */
export async function exportBusiness(params) {
  return requestStream(`/bizopp-web/api/bo/exportBo`, {
    method: 'POST',
    body:params,
  },"商机导出");
}
