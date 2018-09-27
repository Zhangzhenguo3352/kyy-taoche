import { stringify } from 'qs';
import request from '../utils/request';

export async function getCommissionersConfigList(params) {
    return request('/clue-web/api/special/getSpecial', {
        method: 'POST',
        body: {
          ...params,
        },
    });
}

export async function getCommissionersSingle(params) {
    console.log(params);
    return request(`/clue-web/api/special/getSingle?uuid=${params}`);
}



export async function CommissionersUpdate(params) {
    return request('/clue-web/api/special/update', {
        method: 'POST',
        body: params,
    });
}

export async function CommissionersAdd(params) {
    return request('/clue-web/api/special/addSpecial', {
        method: 'POST',
        body: params,
    });
}

export async function CommissionersConfigListRemove(params) {
    return request('/clue-web/api/special/delSpecial', {
        method: 'POST',
        body: params,
    });
}