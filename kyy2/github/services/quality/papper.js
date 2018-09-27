import request from '../../utils/request';

export async function queryPapper(params) {
  return request('/quality-web/api/qualityPapper/getQualityPapper', {
    method: 'POST',
    body: params,
  });
}

export async function updatePapper(params) {
  return request('/quality-web/api/qualityPapper/updateQualityPapper', {
    method: 'POST',
    body: {
      ...params,
      questionIds: params.questionIds.join(','),
    },
  });
}
