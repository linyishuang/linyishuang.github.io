// 初始化echart实例对象
//
var right1Chart = echarts.init(document.getElementById('right1'), 'dark');


// ----------右1的配置项-------------------
var option = {
    title: {
      text: '2020年我国人口年龄结构',
      subtext: '单位/万人',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
  
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '年龄阶段/人口数',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 96871, name: '15-64岁' },
          { value: 25227, name: '0-14岁' },
          { value: 19064, name: '65岁及以上' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };


// 使用刚指定的配置项和数据显示图表。
right1Chart.setOption(option);
