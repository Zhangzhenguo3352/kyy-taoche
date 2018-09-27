import request from '../../utils/request';
import { transferQuestionItemsArrayToString } from '../../utils/utils';

export async function queryQuestions(params) {
  return request('/quality-web/api/qualityQuestion/findPapperQuestions', {
    method: 'POST',
    body: params,
  });
}

export async function removeQuestions(params) {
  return request('/quality-web/api/qualityQuestion/delQuestion/', {
    method: 'POST',
    body: {
      ids: params.join(','),
    },
  });
}

export async function createQuestion(params) {
  return request('/quality-web/api/qualityQuestion/createQuestion', {
    method: 'POST',
    body: { ...params, items: transferQuestionItemsArrayToString(params.items) },
  });
}

export async function updateQuestion(params) {
  return request('/quality-web/api/qualityQuestion/updateQuestion', {
    method: 'POST',
    body: { ...params, items: transferQuestionItemsArrayToString(params.items) },
  });
}

export async function getQuestion(params) {
  return request('/quality-web/api/qualityQuestion/getQuestionWithoutDel', {
    method: 'POST',
    body: params,
  });
}