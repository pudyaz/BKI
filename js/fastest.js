am5.ready(function () {

    // Create root element
    var root = am5.Root.new("kt_charts_widget_fastest_chart");

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    var chart = root.container.children.push(
        am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "panX",
            wheelY: "zoomX",
            layout: root.verticalLayout
        })
    );

    var data = [
        {
            year: "2018",
            Indonesia: 5.2,
            World: 3.6,
            "ASEAN-5": 5.4
        },
        {
            year: "2019",
            Indonesia: 5,
            World: 2.9,
            "ASEAN-5": 4.9
        },
        {
            year: "2020",
            Indonesia: -2.1,
            World: -3.1,
            "ASEAN-5": -3.4
        },
        {
            year: "2021",
            Indonesia: 3.7,
            World: 6.1,
            "ASEAN-5": 3.4
        },
        {
            year: "2022",
            Indonesia: 5.4,
            World: 3.6,
            "ASEAN-5": 5.3,
            strokeSettings: {
                strokeWidth: 3,
                strokeDasharray: [5, 5]
            }
        },
        {
            year: "2023F",
            Indonesia: 6.0,
            World: 3.6,
            "ASEAN-5": 5.9,
            columnSettings: {
                strokeWidth: 1,
                strokeDasharray: [5],
                fillOpacity: 0.2
            },
            strokeSettings: {
                strokeWidth: 3,
                strokeDasharray: [5, 5]
            },
            info: "(projection)"
        },
        {
            year: "2024F",
            Indonesia: 5.8,
            World: 3.4,
            "ASEAN-5": 5.6,
            columnSettings: {
                strokeWidth: 1,
                strokeDasharray: [5],
                fillOpacity: 0.2
            },
            strokeSettings: {
                stroke: chart.get("colors").getIndex(1),
                strokeWidth: 3,
                strokeDasharray: [5, 5]
            },
            info: "(projection)"
        }
    ];

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
            categoryField: "year",
            renderer: am5xy.AxisRendererX.new(root, {}),
            tooltip: am5.Tooltip.new(root, {})
        })
    );

    xAxis.data.setAll(data);

    var yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
            extraMax: 0.1,
            renderer: am5xy.AxisRendererY.new(root, {})
        })
    );


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/

    var series1 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
            name: "Indonesia",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "Indonesia",
            categoryXField: "year",
            tooltip: am5.Tooltip.new(root, {
                pointerOrientation: "horizontal",
                labelText: "{name} in {categoryX}: {valueY} {info}"
            })
        })
    );

    series1.columns.template.setAll({
        tooltipY: am5.percent(10),
        templateField: "columnSettings"
    });

    series1.data.setAll(data);

    var series2 = chart.series.push(
        am5xy.LineSeries.new(root, {
            name: "ASEAN-5",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "ASEAN-5",
            categoryXField: "year",
            stroke: am5.color(0xf44336),
            tooltip: am5.Tooltip.new(root, {
                pointerOrientation: "horizontal",
                labelText: "{name} in {categoryX}: {valueY} {info}"
            })
        })
    );

    series2.strokes.template.setAll({
        strokeWidth: 3,
        templateField: "strokeSettings"
    });


    series2.data.setAll(data);

    series2.bullets.push(function () {
        return am5.Bullet.new(root, {
            sprite: am5.Circle.new(root, {
                strokeWidth: 3,
                stroke: series2.get("stroke"),
                radius: 5,
                fill: root.interfaceColors.get("background")
            })
        });
    });

    var series3 = chart.series.push(
        am5xy.LineSeries.new(root, {
            name: "World",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "World",
            categoryXField: "year",
            stroke: am5.color(0xefe62f),
            tooltip: am5.Tooltip.new(root, {
                pointerOrientation: "horizontal",
                labelText: "{name} in {categoryX}: {valueY} {info}"
            })
        })
    );

    series3.strokes.template.setAll({
        strokeWidth: 3,
        templateField: "strokeSettings"
    });


    series3.data.setAll(data);

    series3.bullets.push(function () {
        return am5.Bullet.new(root, {
            sprite: am5.Circle.new(root, {
                strokeWidth: 3,
                stroke: series3.get("stroke"),
                radius: 5,
                fill: root.interfaceColors.get("background")
            })
        });
    });


    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    // Add legend
    var legend = chart.children.push(
        am5.Legend.new(root, {
            centerX: am5.p50,
            x: am5.p50
        })
    );
    legend.data.setAll(chart.series.values);

    // Make stuff animate on load
    chart.appear(1000, 100);
    series1.appear();

}); // end am5.ready()