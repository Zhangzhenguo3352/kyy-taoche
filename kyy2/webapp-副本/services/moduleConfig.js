import request from '../utils/request';

export async function getModuleConfigList(params) {
    return request('/clue-web/api/clue/list',{
        method: 'POST',
        body: {
            ...params,
        },
    });
}

export async function moduleConfigAdd(params) {
    return request('/clue-web/api/clue/addModule',{
        method: 'POST',
        body: {
            ...params,
        },
    });
}

export async function moduleConfigEdit(params) {
    return request('/clue-web/api/clue/updateModule',{
        method: 'POST',
        body: {
            ...params,
        },
    });
}