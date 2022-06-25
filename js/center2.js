// 初始化echart实例对象
var myChart1 = echarts.init(document.getElementById('center1'), 'dark');
//
//
//


// 指定图表的配置项和数据
		var option1 = {  //指定第1个图表的配置项和数据
			title: {
    text: '近十年我国出生率与死亡率'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {},
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018','2019','2020','2021']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} %'
    }
  },
  series: [
    {
      name: '出生率',
      type: 'line',
      data: [14.57,13.03,13.83,11.99,13.57,12.64,10.86,10.41,8.52,7.52],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    },
    {
      name: '死亡率',
      type: 'line',
      data: [7.13,7.13,7.12,7.07,7.04,7.06,7.08,7.09,7.07,7.18],
      markPoint: {
        data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
      },
      markLine: {
        data: [
          { type: 'average', name: 'Avg' },
          [
            {
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            },
            {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: 'Max'
              },
              type: 'max',
              name: '最高点'
            }
          ]
        ]
      }
    }
  ]
};

		//基于准备好的dom,初始化ECharts图表
		var myChart2 = echarts.init(document.getElementById('center2'), 'dark');
		var option2 = {  //指定第2个图表的配置项和数据
			title: {
    text: '近十年我国人口自然增长率'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'
],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
      formatter: '{value} %'
    }
    }
  ],
  series: [
    {
      name: '人口自然增长率为：',
      type: 'bar',
      barWidth: '60%',
      data: [7.43,5.90,6.71,4.93,6.53,5.58,3.78,3.32,1.45,0.34
]
    }
  ]
};
        myChart2.setOption(option2);
        myChart2.on('click', function (params) {
			var yt = alert("鼠标单击事件,您刚才单击了:" + params.name);

			window.open('https://data.stats.gov.cn/easyquery.htm?cn=C01' );
		});
		window.addEventListener("resize", function () {
			myChart2.resize();  //使图表自适应窗口的大小
		});
		myChart1.setOption(option1);  //为myChart1对象加载数据
		myChart2.setOption(option2);  //为myChart2对象加载数据
		//多图表联动配置方法1：分别设置每个echarts对象的group值
		myChart1.group = 'group1';
		myChart2.group = 'group1';
		echarts.connect('group1');

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
