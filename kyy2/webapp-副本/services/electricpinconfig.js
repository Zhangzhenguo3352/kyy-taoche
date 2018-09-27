import { stringify } from 'qs';
import request from '../utils/request';

export async function getElectricpinConfigList(params) {
    return request(`/clue-web/api/electricPin/getList?${stringify(params)}`);
}

export async function ElectricpinConfigAdd(params) {
    return request('/clue-web/api/electricPin/add', {
        method: 'POST',
        body: {
          ...params,
        },
    });
}

export async function ElectricpinConfigEdit(params) {
    return request('/clue-web/api/electricPin/update', {
        method: 'POST',
        body: {
          ...params,
        },
    });
}

export async function ElectricpinConfigUpdateSort(params) {
    return request('/clue-web/api/electricPin/updateSort', {
        method: 'POST',
        body: {
          ...params,
        },
    });
}

export async function getElectricpinConfigSingle(params) {
    return request(`/clue-web/api/electricPin/getSingle?id=${params}`);
}

export async function ElectricpinConfigRemove(params) {
    return request('/clue-web/api/electricPin/delElectric', {
        method: 'POST',
        body: params,
    });
}

export async function getSeat(params) {
    return request(`/clue-web/api/electricPin/getSeat?${stringify(params)}`);
}

export async function getProvinces(params) {
    return request(`/basedata/api/basicRegion/getProvinces?${stringify(params)}`);
}