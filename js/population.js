am5.ready(function () {

    // Create root element
    var root = am5.Root.new("kt_charts_widget_population_chart");

    // Set themes
    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    // Create chart
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true
    }));

    // Add cursor
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    // Create axes
    var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({
        rotation: -90,
        centerY: am5.p50,
        centerX: am5.p100,
        paddingRight: 15
    });

    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "year",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
    }));

    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, {})
    }));


    // Create series
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "year",
        tooltip: am5.Tooltip.new(root, {
            labelText: "{valueY}"
        })
    }));

    series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
    series.columns.template.adapters.add("fill", function (fill, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", function (stroke, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
    });


    // Set data
    var data = [{
        year: "2018",
        value: 264,
        columnSettings: {
            fill: am5.color(0x125d72)
        }
    }, {
        year: "2019",
        value: 267,
        columnSettings: {
            fill: am5.color(0x125d72)
        }
    }, {
        year: "2020",
        value: 270,
        columnSettings: {
            fill: am5.color(0x125d72)
        }
    }, {
        year: "2021",
        value: 272,
        columnSettings: {
            fill: am5.color(0x125d72)
        }
    }, {
        year: "2022F",
        value: 275,
        columnSettings: {
            fill: am5.color(0x14a2ba)
        }
    }, {
        year: "2023F",
        value: 277,
        columnSettings: {
            fill: am5.color(0x14a2ba)
        }
    }, {
        year: "2024F",
        value: 280,
        columnSettings: {
            fill: am5.color(0x14a2ba)
        }
    }, {
        year: "2025F",
        value: 282,
        columnSettings: {
            fill: am5.color(0x14a2ba)
        }
    }, {
        year: "2026F",
        value: 285,
        columnSettings: {
            fill: am5.color(0x14a2ba)
        }
    }, {
        year: "2027F",
        value: 287,
        columnSettings: {
            fill: am5.color(0x14a2ba)
        }
    }];

    xAxis.data.setAll(data);
    series.data.setAll(data);


    // Make stuff animate on load
    series.appear(1000);
    chart.appear(1000, 100);

}); // end am5.ready()