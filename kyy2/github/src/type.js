const state = {
  a: 1,
  b: 2,
  title: '淘车二手车',
  userInfo: {
    name: 'zhangzhenguo',
    age: 30
  },
  drawershow: false,
  drawershowtype: false,
  currnetData: {},
  currentIndex: 0,
  UcarModelList: [], // 第二层的数据
  moreShow: 3,  // 3 什么也没有
  listDatabrandpage: [{}],
  listDataCarSource: [],
  showRecommend: false,
  locationstate: 'currentCity',
  show: true,
  carModelData: {
    name1: {},
    name2: {},
    name3: {}
  },
  homeCarModelData: {
    name1: {},
    name2: {},
  },
  valuationState: 0,
  valuationCityData: {},
  labeldata: [],
  filterdata: [[-1, -1, -1, -1, -1, -1], -1, -1, -1, -1, -1, -1],
  buyCarListData: {
    Items: []
  },
  selectCityType: 'currentCity',
  currentRowlistdata: {
    name: '推荐排序',
    id: 0
  },
  PageIndex: 1,
  PageCount: null,
  isrefresh: false,
  headerArr: [],
  selectlistindex: 0,
  input1value: '',
  input2value: '',
  carModel3Arr: [],
  isBottom: 0,
  timeData: {
    year: '',
    month: ''
  },
  year: [],
  citySelectTop: 0,
  citySelectIndex: -1,
  isIndex1: true,
  phoneInfo:{},
  isNOData: false
}

export default {
  state,
}