function showTime() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var day = (time.getDate() + '').padStart(2, '0');
    var hour = (time.getHours() + '').padStart(2, '0');
    var minutes = (time.getMinutes() + '').padStart(2, '0');
    var seconds = (time.getSeconds() + '').padStart(2, '0');
    var content = `${year}年${month}月${day}日${hour}:${minutes}:${seconds}`;
    $('#title .time').text(content);
    // console.log(content);
}
showTime()
setInterval(showTime, 1000)

function getData() {
    $.ajax({
        url: 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5',
        data: {
            name: 'disease_h5'
        },
        dataType: 'jsonp',
        success: function (res) {
            var data = JSON.parse(res.data);
            center1(data);
            center2(data);
            right1(data);
            right2(data);
        }
    });

    $.ajax({
        type: 'post',
        url: 'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list',
        data: {
            modules: 'chinaDayList,chinaDayAddList,nowConfirmStatis,provinceCompare'
        },
        dataType: 'json',
        success: function (res) {
            var data = res.data;
            left1(data);
            left2(data);
        }
    });
}
getData();
setInterval(getData, 5 * 60 * 1000);
function center1(data) {
    $('#confirm').text(data.chinaTotal.confirm);
    $('#heal').text(data.chinaTotal.heal);
    $('#dead').text(data.chinaTotal.dead);
    $('#nowConfirm').text(data.chinaTotal.nowConfirm);
    $('#noInfect').text(data.chinaTotal.noInfect);
    $('#import').text(data.chinaTotal.importedCase);
}
function center2(data) {
    var myChart = echarts.init(document.getElementById('center2'), 'dark');
    var option = {
        tooltip: {
            trigger: 'item'
        },
        visualMap: {
            show: true,
            x: 'left',
            y: 'bottom',
            textStyle: {
                fontSize: 8,
            },
            splitList: [{ start: 1, end: 9 },
            { start: 10, end: 99 },
            { start: 100, end: 999 },
            { start: 1000, end: 9999 },
            { start: 10000 }],
            color: ['#8A3310', '#C64918', '#E55B25', '#F2AD92', '#F9DCD1']
        },
        series: [{
            name: '累计确诊人数',
            type: 'map',
            mapType: 'china',
            roam: false,

            itemStyle: {
                normal: {
                    borderWidth: .3,
                    borderColor: '#009fe8',
                    areaColor: '#ffefd5',
                },
                emphasis: {
                    borderWidth: .5,
                    borderColor: '#4b0082',
                    areaColor: '#fff',
                }
            },
            label: {
                normal: {
                    show: true,
                    fontSize: 10,
                    textStyle: {
                        color: 'pink',
                    }

                },
                emphasis: {
                    show: true,
                    fontSize: 8,
                }
            },
            data: []
        }]
    };
    var provinces = data.areaTree[0].children;
    for (var province of provinces) {
        option.series[0].data.push({
            'name': province.name,
            'value': province.total.confirm
        });
    }
    myChart.setOption(option);
}
function right1(data) {
    var myChart = echarts.init(document.getElementById('right1'), 'dark');
    var option = {
        title: {
            text: "全国确诊省市TOP10",
            textStyle: {
                color: 'white',
            },
            left: 'left'
        },
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            tpye: 'category',
            data: []
        },
        yAxis: {
            type: 'value',
            axisLable: {
                show: true,
                color: 'white',
                fontSize: 12,
                formatter: function (value) {
                    if (value >= 1000) {
                        value = value / 1000 + 'k';
                    }
                    return value;
                }
            },
        },
        series: [{
            data: [],
            type: 'bar',
            barMaxWidth: "50%"
        }]
    };
    var provinces = data.areaTree[0].children;
    var topData = [];
    for (var province of provinces) {
        topData.push({
            'name': province.name,
            'value': province.total.confirm
        });
    }
    topData.sort(function (a, b) {
        return b.value - a.value;
    });
    topData.length = 10;
    console.log(topData);
    for (var province of topData) {
        option.xAxis.data.push(province.name);
        option.series[0].data.push(province.value);
    }
    myChart.setOption(option);
}
function right2(data) {
    var myChart = echarts.init(document.getElementById('right2'), 'dark');
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: [],
        },
        series: [
            {
                name: '省市名称',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [],
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
    var provinces = data.areaTree[0].children;
    var topData = [];
    for (var province of provinces) {
        for (var item of province.children) {
            if (item.name === '境外输入') {
                topData.push({
                    'name': province.name,
                    'value': item.total.confirm
                });
                break;
            }
        }
    }
    topData.sort(function (a, b) {
        return b.value - a.value;
    });
    topData.length = 5;
    for (var province of topData) {
        option.legend.data.push(province.name);
        option.series[0].data.push(province);
    }
    myChart.setOption(option);
}
function left1(data) {
    var myChart = echarts.init(document.getElementById('left1'), 'dark');
    var option = {
        title: {
            text: "全国累计趋势",
            textStyle: {
                color: 'white',
            },
            left: 'left',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: '#7171C6'
                }
            },
        },
        legend: {
            data: ['累计确诊', '累计治愈', '累计死亡'],
            left: "right"
        },
        grid: {
            left: '4%',
            right: '6%',
            bottom: '4%',
            top: 50,
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: []
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                show: true,
                color: 'white',
                fontSize: 12,
                formatter: function (value) {
                    if (value >= 1000) {
                        value = value / 1000 + 'k';
                    }
                    return value;
                },
            },
            axisLine: {
                show: true
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#17273B',
                    width: 1,
                    type: 'solid',
                }
            }
        }],
        series: [{
            name: "累计确诊",
            type: 'line',
            smooth: true,
            data: []
        }, {
            name: "累计治愈",
            type: 'line',
            smooth: true,
            data: []
        }, {
            name: "累计死亡",
            type: 'line',
            smooth: true,
            data: []
        }]
    };
    var dayList = data.chinaDayList;
    for (var value of dayList) {
        option.xAxis[0].data.push(value.date);
        option.series[0].data.push(value.confirm);
        option.series[1].data.push(value.heal);
        option.series[2].data.push(value.dead)
    }
    myChart.setOption(option);
}
function left2(data) {
    var myChart = echarts.init(document.getElementById('left2'), 'dark');
    var option = {
        title: {
            text: "全国新增趋势",
            textStyle: {
                color: 'white',
            },
            left: 'left',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: '#7171C6'
                }
            },
        },
        legend: {
            data: ['新增确诊', '新增疑似', '新增境外输入'],
            left: "right"
        },
        grid: {
            left: '4%',
            right: '6%',
            bottom: '4%',
            top: 50,
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: [],
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                show: true,
                color: 'white',
                fontSize: 12,
                formatter: function (value) {
                    if (value >= 1000) {
                        value = value / 1000 + 'k';
                    }
                    return value;
                }
            },
            axisLine: {
                show: true
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#17273B',
                    width: 1,
                    type: 'solid',
                }
            }
        }],
        series: [{
            name: "新增确诊",
            type: 'line',
            smooth: true,
            data: [],
        }, {
            name: "新增疑似",
            type: 'line',
            smooth: true,
            data: [],
        }, {
            name: "新增境外输入",
            type: 'line',
            smooth: true,
            data: [],
        }]
    };
    var dayAddList = data.chinaDayAddList;
    for (var value of dayAddList) {
        console.log(value);
        option.xAxis[0].data.push(value.date);
        option.series[0].data.push(value.confirm);
        option.series[1].data.push(value.suspect);
        option.series[2].data.push(value.importedCase);
    }
    myChart.setOption(option);
}