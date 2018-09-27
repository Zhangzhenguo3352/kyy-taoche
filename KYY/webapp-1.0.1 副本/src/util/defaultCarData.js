export const defaultCarData = [
  {
    url: 'https://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_8_100.png',
    title: '品牌',
    name: '大众',
    type: 'mbid',
    params: 8,
    header: 2
  },
  {
    url: 'https://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_7_100.png',
    title: '品牌',
    name: '丰田',
    type: 'mbid',
    params: 7,
    header: 2
  },
  {
    url: 'https://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_9_100.png',
    title: '品牌',
    name: '奥迪',
    type: 'mbid',
    params: 9,
    header: 2
  },
  {
    url: 'https://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_3_100.png',
    title: '品牌',
    name: '宝马',
    type: 'mbid',
    params: 3,
    header: 2
  },
  {
    url: 'https://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_26_100.png',
    title: '品牌',
    name: '本田',
    type: 'mbid',
    params: 26,
    header: 2
  },
  {
    url: 'https://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_2_100.png',
    title: '品牌',
    name: '奔驰',
    type: 'mbid',
    params: 2,
    header: 2
  },
  {
    url: 'https://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_127_100.png',
    title: '品牌',
    name: '别克',
    type: 'mbid',
    params: 127,
    header: 2
  },
  {
    url: 'https://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_13_100.png',
    title: '品牌',
    name: '现代',
    type: 'mbid',
    params: 13,
    header: 2
  },


]

// home 车型数据
export const defaultHome = [
  {
    url: '../../static/checing/1car.png',
    title: '品牌',
    name: '大众',
    type: 'mbid',
    params: 8,
    header: 2
  },
  {
    url: '../../static/checing/2car.png',
    title: '品牌',
    name: '丰田',
    type: 'mbid',
    params: 7,
    header: 2
  },
  {
    url: '../../static/checing/3car.png',
    title: '品牌',
    name: '奥迪',
    type: 'mbid',
    params: 9,
    header: 2
  },
  {
    url: '../../static/checing/4car.png',
    title: '品牌',
    name: '宝马',
    type: 'mbid',
    params: 3,
    header: 2
  },
  {
    url: '../../static/checing/5car.png',
    title: '品牌',
    name: '本田',
    type: 'mbid',
    params: 26,
    header: 2
  },
  {
    url: '../../static/checing/6car.png',
    title: '品牌',
    name: '奔驰',
    type: 'mbid',
    params: 2,
    header: 2
  },
  {
    url: '../../static/checing/7car.png',
    title: '品牌',
    name: '别克',
    type: 'mbid',
    params: 127,
    header: 2
  },
  {
    url: '../../static/checing/8car.png',
    title: '品牌',
    name: '日产',
    type: 'mbid',
    params: 30,
    header: 2
  },
  {
    url: '../../static/checing/9car.png',
    title: '品牌',
    name: '现代',
    type: 'mbid',
    params: 13,
    header: 2
  },
  {
    url: '../../static/checing/10car.png',
    title: '品牌',
    name: '福特',
    type: 'mbid',
    params: 17,
    header: 2
  },
  {
    url: '../../static/checing/11car.png',
    title: '品牌',
    name: '雪佛兰',
    type: 'mbid',
    params: 49,
    header: 2
  }
]

// 车辆 筛选数据
export const carFilterData = [
  {
    title: '价格',
    name: '3万以下',
    type: {lp: '', hp: 3},
    params: '',
    ID: 8,
    header: 3,
    n: 1
  },
  {
    title: '价格',
    name: '3-5万',
    type: {lp: 3, hp: 5},
    params: '',
    ID: 7,
    header: 3,
    n: 2
  },
  {
    title: '价格',
    name: '5-8万',
    type: {lp: 5, hp: 8},
    params: '',
    ID: 9,
    header: 3,
    n: 3
  },
  {
    title: '价格',
    name: '15-20万',
    type: {lp: 15, hp: 20},
    ID: 3,
    header: 3,
    n: 6
  },
  {
    title: '筛选',
    name: 'SUV',
    type: 'carlevelid',
    params: 8,
    ID: 26,
    header: 4,
    arr: [[-1, -1, -1, -1, -1, -1], -1, -1, 7, -1, -1, -1],
    num: 3
  },
  {
    title: '筛选',
    name: '中型车',
    type: 'carlevelid',
    params: 6,
    ID: 2,
    header: 4,
    arr: [[-1, -1, -1, -1, -1, -1], -1, -1, 3, -1, -1, -1],
    num: 3
  },
  {
    title: '筛选',
    name: '紧凑型车',
    type: 'carlevelid',
    params: 7,
    ID: 127,
    header: 4,
    arr: [[-1, -1, -1, -1, -1, -1], -1, -1, 2, -1, -1, -1],
    num: 3
  },
  {
    title: '筛选',
    name: '小型车',
    type: 'carlevelid',
    params: 4,
    ID: 13,
    header: 4,
    arr: [[-1, -1, -1, -1, -1, -1], -1, -1, 1, -1, -1, -1],
    num: 3
  },
  {
    title: '筛选',
    name: '准新车',
    type: 'newcar',
    params: 1,
    ID: 26,
    header: 4,
    arr: [[-1, -1, -1, -1, 1, -1], -1, -1, -1, -1, -1, -1],
    num: 0
  },
  {
    title: 'home筛选_练手车',
    name: '练手车',
    type: [
     
      {
        // lage=3&lp=5&hage=5&hp=8
        title: '价格',
        name: '5-8万',
        type: {
          lp: 5,
          hp: 8
        },
        params: '',
        ID: 2,
        header: 3,
        arr: '',
      },
      {
        title: '筛选',
        name: '3-5年',
        type: {
          lage : 3,
          hage: 5,
        },
        params: '',
        ID: 2,
        header: 4,
        arr: [[-1, -1, -1, -1, -1, -1], 3, -1, -1, -1, -1, -1],
        num: 1
      }
    ],
    params: '&lage=3&lp=5&hage=5&hp=8',
    ID: 2,
  },
  {
    title: '筛选',
    name: '淘车认证',
    type: 'nflag',
    params: 3,
    ID: 127,
    header: 0,
    arr: [[-1, 1, -1, -1, -1, -1], -1, -1, -1, -1, -1, -1],
    num: 0
  },
  {
    title: '筛选',
    name: '品牌认证',
    type: 'nflag',
    params: 2,
    ID: 127,
    header: 4,
    arr: [[-1, -1, 1, -1, -1, -1], -1, -1, -1, -1, -1, -1],
    num: 1
    
  }
]


// 买车 要用到的
export const carPricData = [
  {id: 'all',title: '不限'},
  {id: '1',title: '3万以下'},
  {id: '2',title: '3-5万'},
  {id: '3',title: '5-8万'},
  {id: '4',title: '8-10万'},
  {id: '5',title: '10-15万'},
  {id: '6',title: '15-20万'},
  {id: '7',title: '20-30万'},
  {id: '8',title: '30-50万'},
  {id: '9',title: '50-100万'},
  {id: '10',title: '100万以上'}
]
// 买车 rowList 組件 要用到
export const rowlistdata = ['推荐排序','价格最低','价格最高','时间最新','车龄最短','里程最少']

// roeListclick  对应的 json 数据
export const rowListPriceData = [
  {
    lp: '', // 小
    hp: ''  // 以下
  },
  {
    lp: '', // 小
    hp: 3
  },
  {
    lp: 3, // 小
    hp: 5
  },
  {
    lp: 5, // 小
    hp: 8
  },
  {
    lp: 8, // 以上
    hp: 10
  },
  {
    lp: 10, // 以上
    hp: 15
  },
  {
    lp: 15, // 以上
    hp: 20
  },
  {
    lp: 20, // 以上
    hp: 30
  },
  {
    lp: 30, // 以上
    hp: 50
  },
  {
    lp: 50, // 以上
    hp: 100
  },
  {
    lp: 100, // 以上
    hp: ''
  }
]


export const objData = {
  // lage=3&lp=5&hage=5&hp=8
  title: 'home筛选_练手车',
  name: '练手车',
  type: [
   
    {
      // lage=3&lp=5&hage=5&hp=8
      title: '价格',
      name: '5-8万',
      type: {
        lp: 5,
        hp: 8
      },
      params: '',
      ID: 2,
      header: 4,
      arr: '',
    },
    {
      title: '筛选',
      name: '3-5年',
      type: {
        lage : 3,
        hage: 5,
      },
      params: '',
      ID: 2,
      header: 4,
      arr: [[-1, -1, -1, -1, -1, -1], 3, -1, -1, -1, -1, -1],
    }
  ],
  params: '&lage=3&lp=5&hage=5&hp=8',
  ID: 2,
}

export const newCarData = {
  title: '筛选',
  name: '准新车',
  type: 'newcar',
  params: 1,
  ID: 26,
  header: 4,
  arr: [[-1, -1, -1, -1, 1, -1], -1, -1, -1, -1, -1, -1],
}

export const suvData = {
  title: '筛选',
  name: 'SUV',
  type: 'carlevelid',
  params: 8,
  ID: 26,
  header: 4,
  arr: [[-1, -1, -1, -1, -1, -1], -1, -1, 7, -1, -1, -1],
}

export const taocheP = {
  title: '筛选',
  name: '淘车认证',
  type: 'nflag',
  params: 3,
  ID: 127,
  header: 0,
  arr: [[-1, 1, -1, -1, -1, -1], -1, -1, -1, -1, -1, -1],
}


export const brandCertification = {
  title: '筛选',
  name: '品牌认证',
  type: 'nflag',
  params: 2,
  ID: 127,
  header: 4,
  arr: [[-1, -1, 1, -1, -1, -1], -1, -1, -1, -1, -1, -1],
}

// 配置项
export const mainJson = {
  '3万以下': {
    reader: [3],
    headerModel: 1,
    filter: {
      row: -1,
      col: -1
    }
  },
  '3-5万': {
    reader: [3],
    headerModel: 2,
    filter: {
      row: -1,
      col: -1
    }
  },
  '5-8万': {
    reader: [3],
    headerModel: 3,
    filter: {
      row: -1,
      col: -1
    }
  },
  '15-20万': {
    reader: [3],
    headerModel: 6,
    filter: {
      row: -1,
      col: -1
    }
  },
  '中型车': {
    reader: [4],
    headerModel: 0,
    filter: {
      row: 3,
      col: 3
    }
  },
  '紧凑型车': {
    reader: [4],
    headerModel: 0,
    filter: {
      row: 3,
      col: 2
    }
  },
  '小型车': {
    reader: [4],
    headerModel: 0,
    filter: {
      row: -1,
      col: -1
    }
  },
  '准新车': {
    reader: [4],
    headerModel: 0,
    filter: {
      row: 0,
      col: 4
    }
  },
  '练手车': {
    reader: [3, 4],
    headerModel: 3,
    filter: {
      row: 1,
      col: 3
    }
  },
  '淘车认证': {
    reader: [0, 4],
    headerModel: 0,
    filter: {
      row: 0,
      col: 1
    }
  },
  '品牌认证': {
    reader: [4],
    headerModel: 0,
    filter: {
      row: 0,
      col: 2
    }
  },
  
}

export const headerArrModel = {
  '淘车认证': {
    reader: [0],
    headerModel: 0, 
    filter: {
      row: 0,
      col: 1
    }
  },
  'home筛选_练手车': {
    reader: [3, 4],
    headerModel: 3, 
    filter: {
      row: 1,
      col: 3
    }
  },
  '品牌认证': {
    reader: [-1], // 头部 没有我选中的， 最起码，有 淘车认证
    headerModel: -1,  // 按照 动态获取的 走
    filter: {
      row: 0,
      col: 2
    }
  },
  '个人车源': {
    reader: [-1], // 头部 没有我选中的， 最起码，有 淘车认证
    headerModel: -1,  // 按照 动态获取的 走
    filter: {
      row: 0,
      col: 0
    }
  },
  '商家车源': {
    reader: [-1], // 头部 没有我选中的， 最起码，有 淘车认证
    headerModel: -1,  // 按照 动态获取的 走
    filter: {
      row: 0,
      col: 3
    }
  },
  '品牌': {
    reader: [2],
    headerModel: -1, 
    filter: {
      row: -1,  // 按照 动态获取的 走
      col: -1   // 按照 动态获取的 走
    }
  },
  '品牌2': {
    reader: [2],
    headerModel: -1, 
    filter: {
      row: -1,  // 按照 动态获取的 走
      col: -1   // 按照 动态获取的 走
    }
  },
  '价格': {
    reader: [3],
    headerModel: -1,  // -1 安装 seleName 走
    filter: {
      row: -1,
      col: -1
    }
  },
  '筛选': {
    reader: [4],
    headerModel: -1,  // -1 安装 seleName 走
    filter: {
      row: -1, //-1 安装 seleName 走
      col: -1
    }
  },
}

export const carFeatures = {
  '个人车源': {
    row: 0,
    col: 0
  },
  '淘车认证': {
    row: 0,
    col: 1
  },
  '品牌认证': {
    row: 0,
    col: 2
  },
  '商家车源': {
    row: 0,
    col: 3
  },
  '准新车': {
    row: 0,
    col: 4
  },
  '有图': {
    row: 0,
    col: 5
  }
}

// 循环label的数据的时候 配置 名称，对应 相应 索引


// 给当前的数据，去将 原有的数据中去查找，对应项，最终返回的 是 最新的数据（去重复）

// 选中的过程中 筛选那些互斥的 东西
