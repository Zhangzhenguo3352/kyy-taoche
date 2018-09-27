import { stringify } from 'qs';
import request from '../utils/request';

export async function queryList(params) {
  return request('/message-web/api/message/list', {
    method: 'POST',
    body: {
      ...params
    },
  });
}

export async function remove(params) {
  return request('/message-web/api/message/delete', {
    method: 'POST',
    body: {
      ...params
    },
  });
}

export async function getNewMessageCount(params) {
  return request('/message-web/api/message/getNewMessageCount', {
    method: 'POST',
    body: {
      ...params
    },
  });
}

export async function updatePCUnReadMessage(params) {
  return request('/message-web/api/message/updatePCUnReadMessage', {
    method: 'POST',
    body: {
      ...params
    },
  });
}

