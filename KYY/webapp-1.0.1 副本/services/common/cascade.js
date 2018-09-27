import { stringify } from 'qs';
import request from '../../utils/request';

export async function queryChildren(params) {
  return request(`/queryChildren4cascade?${stringify(params)}`);
}

export async function queryChildren4post(params) {
  return request('/queryChildren4post', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}