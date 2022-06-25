// 初始化echart实例对象
var left1Chart = echarts.init(document.getElementById('left1'), 'dark');

// 指定图表的配置项和数据
// ----------左1的配置项-------------------
var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['2011','2012', '2013', '2014', '2015', '2016', '2017', '2018','2019','2020']
    },
    series: [
      {
        name: '0-14岁',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [22261,22427,22423,22712,22824,23252,23522,23751,23689,25277]
      },
      {
        name: '15-64岁',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [100378,100718,101041,101032,100978,100943,100528,100065,99552,96871]
      },
      {
        name: '65岁及以上',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [12277,12777,13262,13902,14524,15037,15961,16724,17767,19064]
      }
    ]
  };
left1Chart.setOption(option);