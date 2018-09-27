import { stringify } from 'qs';
import request from '../../utils/request';

//获取公告列表(带分页)
export async function queryList(params) {
    return request('/workform-web/api/queryNotices/', {
        method: 'POST',
        body: {
            ...params,
        },
    });
}

//获取全局公告列表
export async function queryNoticeList(params) {
    return request('/workform-web/api/queryNoticeLists/', {
        method: 'POST',
        body: {
            ...params,
        },
    });
}

//获取所有部门
export async function querydepartments(params) {
    return request('/workform-web/api/getGroups', {
        method: 'POST',
        body: {
            ...params,
        },
    });
}

//获取公告详细信息
export async function findNoticeInfo(params) {
    return request('/workform-web/api/findNoticeInfo', {
        method: 'POST',
        body: {
            ...params,
        },
    });
}

//删除公告
export async function removenotic(params) {
    return request('/workform-web/api/deleteNotice/', {
        method: 'POST',
        body: {
            ...params,
        },
    });
}

//新增|编辑公告
export async function addnotic(params) {
    return request('/workform-web/api/saveNotice', {
        method: 'POST',
        body: {
            ...params
        },
    });
}