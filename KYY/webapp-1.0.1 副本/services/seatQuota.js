import { stringify } from 'qs';
import request from '../utils/request';

export async function getSeatQuotaList(params) {
    return request('/clue-web/api/electricPin/getSeat',{
        method: 'POST',
        body: {
            ...params,
        },
    });
}

export async function editSeatQuotaList(params) {
    return request('/clue-web/api/electricPin/updateSeat',{
        method: 'POST',
        body: {
            ...params,
        },
    });
}
