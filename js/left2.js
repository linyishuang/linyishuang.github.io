// 初始化echart实例对象
//
var left2Chart = echarts.init(document.getElementById('left2'), 'dark');

// 指定图表的配置项和数据
// ----------左2的配置项-------------------
var option = {
    title: {
      text: '每十万人受教育情况'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}人'
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    legend: {
      data: ['文盲', '受小学及以上教育', '受初中及以上教育', '受高中及以上教育', '受大专及以上教育']
    },
    series: [
      {
        name: '人数',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100000,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: [
          { value: 3775, name: '文盲' },
          { value: 15467, name: '受大专及以上教育' },
          { value: 30555, name: '受高中及以上教育' },
          { value: 65062, name: '受初中及以上教育' },
          { value: 89829, name: '受小学及以上教育' }
        ]
      }
    ]
  };
left2Chart.setOption(option);
