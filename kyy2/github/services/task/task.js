import { stringify } from 'qs';
import request from '../../utils/request';
import requestStream from '../../utils/requestStream';
/**
 * 任务列表
 */
export async function queryTaskList(params) {
  return request(`/task-web/api/task/list`, {
    method: 'POST',
    body:params,
  });
}
/**
 * 任务分发
 */
export async function distributionTask(params) {
   return request(`/task-web/api/task/assignTask`, {
    method: 'POST',
    body:params,
  });
}
/**
 * 查询体验店名称
 */
export async function queryDeptSelect(params) {
	return request(`/task-web/api/task/getAllAuthDepartmentsByUser?${stringify(params)}`);
}
/**
 * 任务类型下拉框
 */
export async function queryTaskTypeSelect(params) {
  return request(`/task-web/api/dictionary/taskTypes`, {
    method: 'POST',
  });
}
/**
 * 任务状态
 */
export async function queryTaskStatuSelect(params) {
  return request(`/task-web/api/dictionary/taskStatus`, {
    method: 'POST',
  });
}
/**
 * 任务标签
 */
export async function getTaskLabels(params) {
  return request(`/task-web/api/dictionary/getTaskLabels`, {
    method: 'POST',
  });
}
/**
 * 跟进人
 */
export async function getAllFollowUpUsers(params) {
  return request(`/task-web/api/task/getAllFollowUpUsers`, {
    method: 'POST',
  });
}
/**
 * 分发时候的单个人（任务详情的转移）
 */
export async function getAllOnLineFollowUpUsers(params) {
  return request(`/bizopp-web/api/bo/transferUserList?${stringify(params)}`);
}
/**
 * 任务导出
 */
export async function exportTasks(params) {
  return requestStream(`/task-web/api/task/exportTasks`, {
    method: 'POST',
    body:params,
  },"任务导出");
}
