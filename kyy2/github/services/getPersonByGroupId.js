import request from '../utils/request';
import { stringify } from 'qs';

export async function getPersonByGroupId(params) {
    return request(`/clue-web/api/electricPin/getPersonByGroupId?groupId=${params}`);
}
