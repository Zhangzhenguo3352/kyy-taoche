import request from '../utils/request';
import { stringify } from 'qs';

export async function getGroupByDept() {
    return request(`/clue-web/api/electricPin/getGroupByDept`);
}