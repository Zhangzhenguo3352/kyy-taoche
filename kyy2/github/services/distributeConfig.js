import { stringify } from 'qs';
import request from '../utils/request';

export async function getDistributeConfigList(params) {
    return request('/clue-web/api/dispense/getRule', {
        method: 'POST',
        body: {
          ...params,
        },
    });
}

export async function DistributeConfigUpdateSort(params) {
    return request('/clue-web/api/dispense/updateSort', {
        method: 'POST',
        body: params, 
    });
}

export async function DistributeConfigAdd(params) {
    return request('/clue-web/api/dispense/addRule', {
        method: 'POST',
        body: {
          ...params,
        },
    });
}

export async function DistributeConfigEdit(params) {
    return request(`/clue-web/api/dispense/getSingle?id=${params}`);
}

export async function getExperiences(params) {
    return request(`/clue-web/api/dispense/getExperiences?cityCode=${params}`);
}

export async function DistributeConfigUpdate(params) {
    return request('/clue-web/api/dispense/updateRule', {
        method: 'POST',
        body: {
          ...params,
        },
    });
}



export async function DistributeConfigRemove(params) {
    
    return request('/clue-web/api/dispense/delRule', {
        method: 'POST',
        body:params,
    });
    
}

export async function getProductList(params) {
    return request(`/clue-web/api/dispense/getLoanPackage?${stringify(params)}`);
}

export async function getChannelList(params) {
    return request(`/clue-web/api/dispense/getChannel?${stringify(params)}`);
}


