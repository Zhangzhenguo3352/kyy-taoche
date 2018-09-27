import { stringify } from 'qs';
import request from '../utils/request';
import requestStream from '../utils/requestStream';

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
//return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}
/*test-home*/
export async function getHomeData() {
  return request('/api/get_home_data');
}

// 日历 -- calendar 展示一月的数据
export async function calendarMonth(params) {
  return request('/task-web/api/taskCalendar/getMonthTasks', {
    method: 'POST',
    body: params,
  });
}
// 日历 -- calendar 展示一天的数据
export async function calendarMonthDay(params) {
  return request('/task-web/api/taskCalendar/getDayTasks', {
    method: 'POST',
    body: params,
  });
}
// 日历 -- calendar 展示-天的数据-统计-黑色背景
export async function calendarMonthSum(params) {
  return request('/task-web/api/taskCalendar/getDayTaskSumsInMonth', {
    method: 'POST',
    body: params,
  });
}

//工作台 - 重点客户任务  workbenchKeyCustomerTasks
export async function workbenchKeyCustomerTasks(params){
  return request(`/workbench-web/WorkBench/ElectricitytGetKeyAccountSummary?${stringify(params)}`)
}
//工作台 - 紧急任务 WorkbenchUrgentTask
export async function workbenchUrgentTask(params){
  return request(`/workbench-web/WorkBench/ElectricitytGetUrgentSummary?${stringify(params)}`)
}
//工作台 - 宫格饼图（含往日逾期） WorkbenchCharts
export async function workbenchCharts(params){
  return request(`/workbench-web/WorkBench/ElectricitytGet2PartsComplementarSummary?${stringify(params)}`)
}
//工作台 - 战绩汇报 WorkbenchReportOfRecord
export async function workbenchReportOfRecord(params){
  return request(`/workbench-web/WorkBench/ElectricitytGetRecordReport?${stringify(params)}`)
}
//工作台 - 任务列表 WorkbenchTaskList
/*export async function workbenchTaskList(params){
  return request(`/workbench-web/WorkBench/ElectricitytGetTaskList?${stringify(params)}`)
}*/
export async function workbenchTaskList(params){
 return request('/workbench-web/WorkBench/ElectricitytGetTaskList', {
 method: 'POST',
 body: params,
 })
 }
//主管工作台 - 当月任务完成率  WorkBench/GetEmployeeSign
export async function workbenchPageCharts(params) {
  return request(`/workbench-web/WorkBench/ChargeGetMonthCompletionRate?${stringify(params)}`)
}
//主管工作台 - 月度成交汇总
export async function workbenchPageChampion(params) {
  return request(`/workbench-web/WorkBench/ChargeGetMonthDealingCollection?${stringify(params)}`)
}
//主管工作台 - 查看是否是进店个数：or 下发个数
export async function getEmployeeSign(params) {
  return request(`/workbench-web/WorkBench/GetEmployeeSign`)
}
//主管工作台 - 电销数据统计(月报)
export async function workbenchPageMonth(params) {
  return request(`/workbench-web/WorkBench/ChargeGetMonthReport?${stringify(params)}`)
}
//主管工作台 - 请求table接口
export async function workbenchPageTable(params) {
  return request('/bizopp-web/api/bo/list', {
    method: 'POST',
    body: params,
  })
}
//主管工作台 - 分配接口
export async function workbenchPageUserList(params) {
  return request(`/bizopp-web/api/bo/userList?${stringify(params)}`)
}
//主管工作台 - 提交接口
export async function workbenchPageUserTransfer(params) {
  return request('/bizopp-web/api/bo/transfer', {
    method: 'POST',
    body: params,
  })
}
/*主管工作台 -当月任务完成率-下载 */
export async function chargeExportMonthReport(params) {
  return requestStream(`/workbench-web/WorkBench/ChargeExportMonthReport`, {
    method: 'POST',
    body:params,
  },"电销数据统计");
}
/*主管工作台 -当月任务完成率-下载 */
export async function chargeExportMonthCompletionRate(params) {
  return requestStream(`/workbench-web/WorkBench/ChargeExportMonthCompletionRate`, {
    method: 'POST',
    body:params,
  },"当月任务完成率");
}

//商机详情 - 商机详情接口
export async function businessIndexDetails(params) {
  return request('/bizopp-web/api/bo/detail', {
    method: 'POST',
    body: params,
  })
}
//商机详情 - 商机详情-table
export async function businessIndexDetailsTable(params) {
  return request(`/bizopp-web/api/bo/intention?${stringify(params)}`)
}

//商机详情 - 关联商机列表
export async function businessIndexList(params) {
  return request(`/bizopp-web/api/bo/relationbo?${stringify(params)}`)
}
//商机详情 - 操作日志
export async function businessIndexLogs(params) {
  return request(`/bizopp-web/api/bo/operation/logs/list?${stringify(params)}`)
}
//商机详情 - 跟进信息
export async function businessIndexInformation(params) {
  return request(`/bizopp-web/api/bo/followrecord?${stringify(params)}`)
}
//商机详情 - 关联线索 -在线审批 tabel
export async function businessIndexClue(params) {
  return request('/clue-web/api/clue/getBoClue',{
    method:'POST',
    body:params,
  })
}
//商机详情 - 客户信息/传统收资
export async function businessIndexCustomer(params) {
  return request('/bizopp-web/api/bo/customer/getCustPerAllInfo', {
    method: 'POST',
    body: params,
  })
}
//任务管理-任务跟进-查询传统收资信息
export async function businessIndexCustInfo(params) {
  return request(`/bizopp-web/api/bo/customer/getCustPerAllInfo`, {
    method: 'POST',
    body: params,
  })
}
//任务管理-任务跟进-弹框table
export async function businessIndexModalTable(params) {
  return request('/product-web/api/pdcProductController/getProductPages', {
    method: 'POST',
    body: params,
  })
}
//任务管理-任务跟进-创建或修改客户
export async function businessIndexCustEidt(params) {
  return request('/bizopp-web/api/bo/customer/saveOrUpdateCustForPerson', {
    method: 'POST',
    body: params,
  })
}
export async function businessIndexCustSubmit(params) {
  return request('/bizopp-web/api/bo/customer/updateValidateInfo', {
    method: 'POST',
    body: params,
  })
}
//任务管理-任务跟进-提交-2
export async function businessIndexSubmit(params) {
  return request('/bizopp-web/api/bo/addfollowrecord', {
    method: 'POST',
    body: params,
  })
}
//任务管理-任务跟进-重点客户
export async function businessIndexKeycustomer(params) {
  return request('/bizopp-web/api/bo/keycustomer',{
    method: 'POST',
    body: params,
  })
}
//任务管理-任务跟进-下发
export async function getIssuedClue(params) {
  return request(`/clue-web/api/clue/getIssuedClue?${stringify(params)}`)
}
//任务管理-任务跟进-上传附件
export async function sendData(params) {
  return request('/bizopp-web/api/bo/customer/send', {
    method: 'POST',
    headers: {
      'Content-Type':"application/json;",
    },
    body: params,
  })
}
//任务管理-任务跟进-删除附件
export async function sendDel(params) {
  return request('/bizopp-web/api/bo/customer/delAttachment', {
    method: 'POST',
    headers: {
      'Content-Type':"application/json;",
    },
    body: params,
  })
}

//请求下一个任务
export async function getNextTask(params) {
  return request('/task-web/api/task/getNextTask', {
    method: 'POST',
    body: params,
  })
}

//软电话接口
export async function getAccountAndPassword(params) {
  return request('/softPhone-web/api/crmExtensionManage/getAccountAndPassword', {
    method: 'POST',
    body: params,
  })
}

export async function sendMessage(params) {
  return request('/softPhone-web/api/crmExtensionManage/sendMessage', {
    method: 'POST',
    body: params,
  })
}
// 民族
export async function raceListAll(params) {
  return request(`/basedata/nation/listAll`, {
    method: 'POST',
    body: params,
  });
}
// 根据手机号获取电话归属信息
export async function getPhoneAttrInfo(params) {
  return request(`/basedata/yxPhoneAtt/getPhoneAttrInfo`, {
    method: 'POST',
    body: params,
  });
}
// 省
export async function getProvinces(params) {
  return request(`/basedata/yxBasicRegion/getNewProvinces`, {
    method: 'POST',
    body: params,
  });
}
//  市
export async function getCities(params) {
  return request(`/basedata/yxBasicRegion/getNewSubRegions`, {
    method: 'POST',
    headers: {
      'Content-Type':"application/json;",
    },
    body: params,
  });
}
//区县
export async function getDistricts(params) {
  return request(`/basedata/yxBasicRegion/getNewSubRegions`, {
    method: 'POST',
    headers: {
      'Content-Type':"application/json;",
    },
    body: params,
  });
}

//车--品牌
export async function getMasterBrands(params) {
  return request(`/basedata/api/car/masterBrand`);
}
//车--车名
export async function getBrands(params) {
  return request( `/basedata/api/car/brand/`+params.id);
}
//车--车型
export async function getModels(params) {
  return request(`/basedata/api/car/newModel/`+params.id);
}
//车--车款
export async function getStyles(params) {
  return request(`/basedata/api/car/getStyleForNowmsrp/?${stringify(params)}`);
}
