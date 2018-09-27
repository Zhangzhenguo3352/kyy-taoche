/*
 *在services层写入后台接口名称
 * */
import { stringify } from 'qs';
import request from '../../utils/request';

//组织管理列表接口   startTime 2018/1/2  无参数
export async function organizationInfoList(params) {
	return request('/auth-web/api/organizationController/organizationInfoList', {
		method: 'POST'
	});
}
//组织管理  添加
export async function addOrganizationInfo(params) {
	return request('/auth-web/api/organizationController/addOrganizationInfo', {
		method: 'POST',
		body: params,
	});
}
//组织管理编辑
export async function editOrganizationInfo(params) {
	return request(`/auth-web/api/organizationController/editOrganizationInfo`, {
		method: 'POST',
		body: params,
	});
}
//组织管理列表接口     禁用操作
export async function disabledOrganize(params) {
	return request(`/auth-web/api/organizationController/editDisabledOrganizationInfo?${stringify(params)}`, {
		method: 'POST'
	});
}

//用户管理列表接口  startTime 2018/1/3
export async function userList(params) {
	return request(`/auth-web/api/authPersonController/userList?${stringify(params)}`, {
		method: 'POST'
	});
}
//用户管理编辑用户 保存
export async function editUser(params) {
	return request(`/auth-web/api/authPersonController/editUser`, {
		method: 'POST',
		body: params,
	});
}
//用户管理编辑用户    === 根据域账号查询用户信息
export async function getUserInfoByDomainAccout(params) {
	return request(`/auth-web/api/authPersonController/getUserInfoByDomainAccout?${stringify(params)}`, {
		method: 'POST'
	});
}
//部门管理列表接口
export async function departmentInfoList(params) {
	return request(`/auth-web/api/departmentController/getDepartmentInfo?${stringify(params)}`, {
		method: 'POST'
	});
}
//部门管理列表接口     禁用操作
export async function disableDepart(params) {
	return request(`/auth-web/api/departmentController/disableDepartment?${stringify(params)}`, {
		method: 'POST'
	});
}
//部门管理列表接口     删除操作
export async function delDepartment(params) {
	return request(`/auth-web/api/departmentController/delDepartment?${stringify(params)}`, {
		method: 'POST'
	});
}

//部门管理列表接口     修改部门
export async function updateDepartment(params) {
	return request(`/auth-web/api/departmentController/updateDepartment`, {
		method: 'POST',
		body: params,
	});
}

//部门管理列表接口     移动部门
export async function moveDepartMent(params) {
	return request(`/auth-web/api/departmentController/moveDepartMent?${stringify(params)}`, {
		method: 'POST'
	});
}

//部门下人员列表接口
export async function getPersonDeptList(params) {
	return request(`/auth-web/api/departmentController/getPersonDeptList?${stringify(params)}`, {
		method: 'POST'
	});
}
//部门下人员列表接口   移除操作
export async function removePerson(params) {
	return request(`/auth-web/api/departmentController/removePerson?${stringify(params)}`, {
		method: 'POST'
	});
}
//部门下人员列表接口   获取移动人员数据
export async function getmoveList(params) {
	return request(`/auth-web/api/departmentController/getmoveList`, {
		method: 'POST'
	});
}
//部门下人员列表接口   移动人员
export async function movePerson(params) {
	return request(`/auth-web/api/departmentController/movePerson?${stringify(params)}`, {
		method: 'POST'
	});
}

//根据部门ID获取下属部门业务树
//export async function getDepartmentInfoListByDepartmentId(params) {
//return request(`/auth-web/api/departmentController/getDepartmentInfoListByDepartmentId?${stringify(params)}`, {
//  method: 'POST'
//});
//}

//取消或设置LEADER!
export async function setLeaderForTeam(params) {
	return request(`/auth-web/api/departmentController/setLeaderForTeam?${stringify(params)}`, {
		method: 'POST'
	});
}

//添加部门(单独部门)
export async function saveDepartmentInfo(params) {
	return request(`/auth-web/api/departmentController/saveDepartmentInfo`, {
		method: 'POST',
		body: params,
	});
}

//角色列表   左边
export async function getRoleList(params) {
	return request(`/auth-web/api/authPersonController/getRoleList?${stringify(params)}`, {
		method: 'POST'
	});
}
//角色列表   右边
export async function getRightRoleList(params) {
	return request(`/auth-web/api/authPersonController/getRightRoleList?${stringify(params)}`, {
		method: 'POST'
	});
}
// //角色列表   右边  2018/1/30
// export async function findRoleByDomainAccountAndSource(params) {
// 	return request(`/auth-web/api/authPersonController/findRoleByDomainAccountAndSource?${stringify(params)}`, {
// 		method: 'POST'
// 	});
// }
//角色列表   新更改右边
export async function getRoleListRight(params) {
	return request(`/auth-web/api/authPersonController/findRoleByDomainAccountAndSource?${stringify(params)}`, {
		method: 'POST'
	});
}
//可分配角色列表    左边
export async function getDisRoleListLeft(params) {
	return request(`/auth-web/api/authPersonController/findRoleByDomainAccountAndSource?${stringify(params)}`, {
		method: 'POST'
	});
}
//可分配角色列表    右边
export async function getDisRoleListRight(params) {
	return request(`/auth-web/api/authPersonController/rolecheckList?${stringify(params)}`, {
		method: 'POST'
	});
}
//批量保存部门人员  ==  tree
export async function getUserAndDeptInfo(params) {
	return request(`/auth-web/api/departmentController/getUserAndDeptInfo`, {
		method: 'POST',
		body: params,
	});
}
//保存从用户中心同步的数据(批量保存部门人员)
export async function savePersonAndDepartmentList(params) {
	return request(`/auth-web/api/departmentController/savePersonAndDepartmentList`, {
		method: 'POST',
		body: params,
	});
}
//根据组织ID查询组织信息
export async function getOrganizationInfoByOrgId(params) {
	return request(`/auth-web/api/organizationController/getOrganizationInfoByOrgId?${stringify(params)}`, {
		method: 'POST'
	});
}
//根据部门ID查询组织部门的状态
export async function findDisabledByDepartmentId(params) {
	return request(`/auth-web/api/departmentController/findDisabledByDepartmentId?${stringify(params)}`, {
		method: 'POST'
	});
}

//添加用户  保存
export async function savePersonDepartmentInfos(params) {
	return request(`/auth-web/api/departmentController/savePersonDepartmentInfos?${stringify(params)}`, {
		method: 'POST'
	});
}
//根据域账号查询此人下属部门信息
export async function getDepartmentInfoListByDepartmentId(params) {
	return request(`/auth-web/api/departmentController/getDepartmentInfoListByDepartmentId?${stringify(params)}`, {
		method: 'POST'
	});
}

//部门管理下的 业务树
export async function departmentTree(params) {
	return request(`/auth-web/api/departmentController/getDepartmentInfoListByUser?${stringify(params)}`, {
		method: 'POST'
	});
}

//用户管理 所属部门
export async function userManagerGetDept(params) {
	return request(`/auth-web/api/departmentController/getDept`, {
		method: 'POST',
	});
}

//创建外部用户 
export async function createUser(params) {
	return request(`/auth-web/api/authPersonController/createUser`, {
		method: 'POST',
		body: params,
	});
}
//所属部门列表
export async function findTreeList(params) {
	return request(`/auth-web/api/authPersonController/findTreeList`, {
		method: 'POST',

	});
}

//用户列表  角色下拉框
export async function getAllOpenRole(params) {
	return request(`/auth-web/api/authPersonController/getAllOpenRole`, {
		method: 'POST',
	});
}
//所属部门列表  创建外部用户  ===   
export async function getAuthDepartmentList(params) {
	return request(`/auth-web/api/departmentController/getDept`, {
		method: 'POST',
	});
}
//试点体验店列表
export async function searchChannelExperience(params) {
	return request(`/channel-web/api/channelExperienceController/searchChannelExperience`, {
		method: 'POST',
		body: params,
	});
}

//试点体验店列表  添加体验店
export async function createChannelExperience(params) {
	return request(`/channel-web/api/channelExperienceController/createChannelExperience`, {
		method: 'POST',
		body: params,
	});
}

//试点体验店列表  删除体验店
export async function deleteChannelExperience(params) {
	return request(`/channel-web/api/channelExperienceController/deleteChannelExperience?${stringify(params)}`, {
		method: 'GET',
	});
}

//试点体验店列表  复选框
export async function searchChannelListShortInfo(params) {
	return request(`/channel-web/api/channelExperienceController/searchChannelListShortInfo?${stringify(params)}`, {
		method: 'GET',
	});
}
//试点体验店列表  省
export async function getProvinces(params) {
	return request(`/basedata/yxBasicRegion/getNewProvinces`, { 
		method: 'POST',
	});
}
//试点体验店列表  市
export async function getCities(params) {
	const headers = process.env.NODE_ENV === 'development' ? {
		'Content-Type': 'application/json;'  
	} : {}
	return request(`/basedata/yxBasicRegion/getNewSubRegions`, {
		method: 'POST',	
		headers,
		body: params,
		
	});
}

//软电话配置  列表  
export async function pageListExtension(params) {
	return request(`/softPhone-web/api/crmExtensionManage/pageListExtension`, {
		method: 'POST',
		body: params,
	});
}

//软电话配置  删除  
export async function deleteExtension(params) {
	return request(`/softPhone-web/api/crmExtensionManage/deleteExtension`, {
		method: 'POST',
		body: params,
	});
}

//软电话配置  导入分机号
export async function importExtensionNum(params) {
	return request(`/softPhone-web/api/crmExtensionManage/importExtensionNum`, {
		method: 'POST',
		body: params,
	});
}

//软电话配置  绑定分机号
export async function bandExtensionNum(params) {
	return request(`/softPhone-web/api/crmExtensionManage/bandExtensionNum`, {
		method: 'POST',
		body: params,
	});
}

//菜单列表
export async function getMenuList(params) {
	return request(`/auth-web/api/authPersonController/getMenuList?${stringify(params)}`, {
		method: 'POST'
	});
}

//用户信息
export async function getLoginUserInfo(params) {
	return request(`/auth-web/api/authPersonController/getLoginUserInfo`, {
		method: 'POST'
	});
}

// 用户权限
export async function getPermission(params) {
	return request(`/auth-web/api/authPersonController/getPermission`, {
		method: 'POST'
	});
}

//登出   退出登录接口
export async function getLogout(params) {	
	return request(`/auth-web/logout`, {
		method: 'GET'
	});
}
//重置密码
export async function resetPassWord(params) {	
	return request(`/auth-web/api/authPersonController/resetPassWord?${stringify(params)}`, {
		method: 'POST',	
	});
}
//修改密码
export async function updatePassWord(params) {	
	return request(`/auth-web/api/authPersonController/updatePassWord?${stringify(params)}`, {
		method: 'POST',
	});
}