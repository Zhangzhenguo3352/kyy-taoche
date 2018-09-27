import { stringify } from 'qs';
import request from '../../utils/request';

export async function queryRelationClueList(params) {
  return request(`/clue-web/api/clue/getBoClue`, {
    method: 'POST',
    body:params,
  });
}
