import request from '../../utils/request';
import { postForm } from '../../utils/utils';

export async function getNextGradeRecordId(params) {
  return request('/quality-web/api/qualityGrade/getNextGradeRecordId', {
    method: 'POST',
    body: params,
  });
}

export async function createResult(params) {
  return request('/quality-web/api/qualityGrade/createQualityResult', {
    method: 'POST',
    body: params,
  });
}

export async function getRecordInfo(params) {
  return request('/quality-web/api/qualityGrade/getRecordInfo', {
    method: 'POST',
    body: params,
  });
}

export async function getQualityResult(params) {
  return request('/quality-web/api/qualityGrade/getQualityResult', {
    method: 'POST',
    body: params,
  });
}

export async function getPapperResult(params) {
  return request('/quality-web/api/qualityGrade/getPapperResult', {
    method: 'POST',
    body: params,
  });
}

export async function getCalledOptions(params) {
  return request('/quality-web/api/qualitySelect/getSelectValues', {
    method: 'POST',
  });
}

export async function getPermission() {
  return request('/quality-web/api/qualityGrade/isQualityDeptManager', {
    method: 'POST',
  });
}

export async function getCalledList(params) {
  return request('/quality-web/api/qualityGrade/pageQuery', {
    method: 'POST',
    body: params,
  });
}

export async function getTodayGradeCount(params) {
  return request('/quality-web/api/qualityGrade/todayGradeCount', {
    method: 'POST',
  });
}

export async function getYestodayGradeCount(params) {
  return request('/quality-web/api/qualityGrade/yesterdayGradeCount', {
    method: 'POST',
  });
}

export async function getTodayTaskCount(params) {
  return request('/quality-web/api/qualityGrade/todayTasks', {
    method: 'POST',
  });
}

export async function getYestodayTaskCount(params) {
  return request('/quality-web/api/qualityGrade/yesterdayTasks', {
    method: 'POST',
  });
}

export async function saveAssignPerson(params) {
  return request('/quality-web/api/qualityGrade/saveAssignPerson', {
    method: 'POST',
    body: {
      ...params,
      recordIds: params.recordIds.join(',')
    },
  });
}

export async function exportGrade(params) {
  postForm('/quality-web/api/qualityGrade/exportQualityResult', {
    ...params,
    headerInfo: params.headerInfo.join(','),
  });
}
