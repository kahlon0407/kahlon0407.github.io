(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('diy', {
        "color": [
            "#97b552",
            "#ffb980",
            "#07a2a4",
            "#9a7fd1",
            "#588dd5",
            "#c05050",
            "#59678c",
            "#c9ab00",
            "#7eb00a",
            "#6f5553",
            "#c14089"
        ],
        "backgroundColor": "rgba(83,57,57,1)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#dec4c4"
            },
            "subtextStyle": {
                "color": "#978989"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": "5",
            "symbol": "emptyRoundRect",
            "smooth": true
        },
        "radar": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": "5",
            "symbol": "emptyRoundRect",
            "smooth": true
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#fd1050",
                "color0": "#0cf49b",
                "borderColor": "#fd1050",
                "borderColor0": "#0cf49b",
                "borderWidth": 1
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "lineStyle": {
                "width": 1,
                "color": "#aaa"
            },
            "symbolSize": "5",
            "symbol": "emptyRoundRect",
            "smooth": true,
            "color": [
                "#97b552",
                "#ffb980",
                "#07a2a4",
                "#9a7fd1",
                "#588dd5",
                "#c05050",
                "#59678c",
                "#c9ab00",
                "#7eb00a",
                "#6f5553",
                "#c14089"
            ],
            "label": {
                "color": "#eee"
            }
        },
        "map": {
            "itemStyle": {
                "areaColor": "#eee",
                "borderColor": "#444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "areaColor": "#eee",
                "borderColor": "#444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#d7aeae"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#d7aeae"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#e6bfbf"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#d7aeae"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#d7aeae"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#d7aeae"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#e6bfbf"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#d7aeae"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#d7aeae"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#d7aeae"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#e6bfbf"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#d7aeae"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#d7aeae"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#d7aeae"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#e6bfbf"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#d7aeae"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "iconStyle": {
                    "borderColor": "#666666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#dbc1c1"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#91ffcc",
                    "width": "3"
                },
                "crossStyle": {
                    "color": "#91ffcc",
                    "width": "3"
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#eeeeee",
                "width": 1
            },
            "itemStyle": {
                "color": "#dd6b66",
                "borderWidth": 1
            },
            "controlStyle": {
                "color": "#eeeeee",
                "borderColor": "#eeeeee",
                "borderWidth": 0.5
            },
            "checkpointStyle": {
                "color": "#e43c59",
                "borderColor": "#c23531"
            },
            "label": {
                "color": "#eeeeee"
            },
            "emphasis": {
                "itemStyle": {
                    "color": "#a9334c"
                },
                "controlStyle": {
                    "color": "#eeeeee",
                    "borderColor": "#eeeeee",
                    "borderWidth": 0.5
                },
                "label": {
                    "color": "#eeeeee"
                }
            }
        },
        "visualMap": {
            "color": [
                "#cb535c",
                "#e7aca2",
                "#fcf6bd"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(255,255,255,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#eeeeee"
            }
        },
        "markPoint": {
            "label": {
                "color": "#eee"
            },
            "emphasis": {
                "label": {
                    "color": "#eee"
                }
            }
        }
    });
}));
