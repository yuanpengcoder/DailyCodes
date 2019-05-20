var echarts=require("echarts")
//柱状图的第二种引用方式,减少压缩包大小
// var echarts = require("echarts/lib/echarts");
// //引入柱状图
// require("echarts/lib/chart/bar")
// //引入提示框和标题组件
// require("echarts/lib/component/tooltip")
// require("echarts/lib/component/title")

 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('main'));
//柱状图
 // 指定图表的配置项和数据
//  var option = {
//      title: {
//          text: 'ECharts 入门示例'
//      },
//      tooltip: {},
//      legend: {
//          data:['销量']
//      },
//      xAxis: {
//          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
//      },
//      yAxis: {},
//      series: [{
//          name: '销量',
//          type: 'bar',
//          data: [5, 20, 36, 10, 10, 20]
//      }]
//  };
// 饼图
//  echarts.init(document.getElementById('main')).setOption({
//     series: {
//         type: 'pie',
//         data: [
//             {name: 'A', value: 1212},
//             {name: 'B', value: 2323},
//             {name: 'C', value: 1919}
//         ]
//     }
// });
// //折线图
// echarts.init(document.getElementById('main')).setOption({
//     title: {text: 'Line Chart'},
//     tooltip: {},
//     toolbox: {
//         feature: {
//             dataView: {},
//             saveAsImage: {
//                 pixelRatio: 2
//             },
//             restore: {}
//         }
//     },
//     xAxis: {},
//     yAxis: {},
//     series: [{
//         type: 'line',
//         smooth: true,
//         data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
//     }]
// });

 // 使用刚指定的配置项和数据显示图表。
//  myChart.setOption(option);

var option = {
         title: {
             text: '南丁格尔图',
             textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            }
         },
         tooltip: {},
         series: [{
             name: '访问来源',
             type: 'pie',
             roseType: 'angle',
             data: [{value:200,name:'视频广告',itemStyle: {
                        // color: '#c23531'
                        // 单独设置扇形的颜色
                    },
                    
                    },
                    {value:300,name:'联盟广告'},
                    {value:350,name:'邮件营销'},
                    {value:150,name:'直接访问'},
                    {value:400,name:'搜索引擎'},
                ],
            label: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }
         }],
         //解决明暗度问题
         visualMap: {
            // 不显示 visualMap 组件，只用于明暗度的映射
            show: false,
            // 映射的最小值为 80
            min: 80,
            // 映射的最大值为 600
            max: 600,
            inRange: {
                // 明暗度的范围是 0 到 1
                colorLightness: [0, 1]
            }
        },
         itemStyle: {
            emphasis: {
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
             //同时设置扇形的颜色
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        backgroundColor: '#2c343c',
        // textStyle: {
        //     color: 'rgba(255, 255, 255, 0.3)'
        // }
        //同时设置
     
     };
 myChart.setOption(option)