import { stringify } from 'qs';
import request from '../utils/request';

export async function commissionerList(params) {
    return request(`/clue-web/commissionerList?${stringify(params)}`);
}

export async function commissionerGetInfo(params) {
    return request('/clue-web/api/special/getAuthPersons', {
        method: 'POST',
        body: {
          ...params,
        },
    });
}