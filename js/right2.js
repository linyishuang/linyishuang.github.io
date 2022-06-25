// 初始化echart实例对象
var right2Chart = echarts.init(document.getElementById('right2'), 'dark');
//
// ----------右2的配置项-------------------
var option = {
    tooltip: {  //配置详情提示框组件
				//设置雷达图的tooltip不会超出div，也可设置position属性
				//设置定位不会随着鼠标移动而变化
				confine: true,  //设置是否将tooltip框限制在图表的区域内
				enterable: true,  //设置鼠标是否可以移动到tooltip区域内
			},
  title: {
    text: '近三年各产业产值',
    subtext: '单位/亿元'
  },
  legend: {
    data: ['2021', '2020','2019']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: '第一产业', max: 1000000 },
      { name: '第二产业', max: 1000000 },
      { name: '第三产业', max: 1000000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [83085.5, 450904.5, 609679.7],
          name: '2021'
        },
        {
          value: [78030.9, 383562.4, 551973.7],
          name: '2020'
        },
        {
          value: [70473.6, 380670.6, 535371.0],
          name: '2019'
        }
      ]
    }
  ]
};
right2Chart.setOption(option);
