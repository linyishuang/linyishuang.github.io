    //
    //
    //
    //
    var myChart1 = echarts.init(document.getElementById('center1'), 'dark');

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
    myChart1.setOption(option1);
