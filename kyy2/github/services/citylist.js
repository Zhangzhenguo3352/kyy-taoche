import { stringify } from 'qs';
import request from '../utils/request';

export async function citylist(params) {
    return request('/api/citylist',{
        method: 'POST',
        body: {
            ...params,
        },
    });
}

export async function DistributeGetProvinces(params) {
    return request('/basedata/api/basicRegion/getProvinces', {
        method: 'POST',
        body: {
          ...params,
        },
    });
}

export async function DistributeGetCity(params) {
    return request('/basedata/api/basicRegion/getCities', {
        method: 'POST',
        body: {
          ...params,
        },
    });
}

export async function DistributeGetAllCity(params) {
    return request('/basedata/yxBasicRegion/getProvincesAndCities', {
        method: 'POST',
        body: {
          ...params,
        },
    });
}