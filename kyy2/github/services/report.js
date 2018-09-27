import { stringify } from 'qs';
import request from '../utils/request';
import requestStream from '../utils/requestStream';

//体验店全量报表
export async function TYDFullScaleReport(params) {
  return request('/report-web/ReportCenter/TYDFullScaleReport', {
    method: 'POST',
    body: {
      ...params
    },
  });
}
//体验店全量报表-导出excel
export async function TYDFullScaleReportExport(params) {
  return requestStream('/report-web/ReportCenter/TYDFullScaleReportExport', {
    method: 'POST',
    body: {
      ...params
    },
  });
}
//体验店坐席报表
export async function TYDSeatsReport(params) {
  return request('/report-web/ReportCenter/TYDSeatsReport', {
    method: 'POST',
    body: {
      ...params
    },
  });
}
//体验店坐席报表-导出excel
export async function TYDSeatsReportExport(params) {
  return requestStream('/report-web/ReportCenter/TYDSeatsReportExport', {
    method: 'POST',
    body: {
      ...params
    },
  });
}
//成交明细
export async function DealDetails(params) {
  return request('/report-web/ReportCenter/DealDetails', {
    method: 'POST',
    body: {
      ...params
    },
  });
}


//成交明细-导出excel
export async function DealDetailsExport(params) {
  return requestStream('/report-web/ReportCenter/DealDetailsExport', {
    method: 'POST',
    body: {
      ...params
    },
  });
}

//获取体验店list
export async function GetFilters() {
  return request('/report-web/ReportCenter/GetFilters?temp='+Math.random(), {
    method: 'GET',
    body: {
    },
  });
}


