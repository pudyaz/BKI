am5.ready(function () {

    // Create root element
    var root = am5.Root.new("kt_charts_widget_IP_chart");


    // Set themes
    root.setThemes([
        am5themes_Animated.new(root)
    ]);


    // Create chart
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout
    }));


    // Add legend
    var legend = chart.children.push(am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
    }))


    // Data
    var data = [{
        year: "2019",
        total: 42583849,
        gross: 9400660,
        net: 10053333
    }, {
        year: "2020",
        total: 38740449,
        gross: 11856179 ,
        net: 12773358
    }, {
        year: "2021",
        total: 38519859,
        gross: 6090325,
        net: 5909311
    }];


    // Create axes
    var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: am5xy.AxisRendererY.new(root, {
            inversed: true,
            cellStartLocation: 0.1,
            cellEndLocation: 0.9
        })
    }));

    yAxis.data.setAll(data);

    var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {})
    }));


    // Add series
    function createSeries(field, name) {
        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueXField: field,
            categoryYField: "year",
            sequencedInterpolation: true,
            tooltip: am5.Tooltip.new(root, {
                pointerOrientation: "horizontal",
                labelText: "[bold]{name}[/]\n{categoryY}: {valueX}"
            })
        }));

        series.columns.template.setAll({
            height: am5.p100
        });


        series.bullets.push(function () {
            return am5.Bullet.new(root, {
                locationX: 1,
                locationY: 0.5,
                sprite: am5.Label.new(root, {
                    centerY: am5.p50,
                    text: "{valueX}",
                    populateText: true
                })
            });
        });

        series.bullets.push(function () {
            return am5.Bullet.new(root, {
                locationX: 1,
                locationY: 0.5,
                sprite: am5.Label.new(root, {
                    centerX: am5.p100,
                    centerY: am5.p50,
                    text: "{name}",
                    fill: am5.color(0xffffff),
                    populateText: true
                })
            });
        });

        series.data.setAll(data);
        series.appear();

        return series;
    }

    createSeries("total", "Total");
    createSeries("gross", "Gross");
    createSeries("net", "Net");


    // Add legend
    var legend = chart.children.push(am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
    }));

    legend.data.setAll(chart.series.values);


    // Add cursor
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "zoomY"
    }));
    cursor.lineY.set("forceHidden", true);
    cursor.lineX.set("forceHidden", true);


    // Make stuff animate on load
    chart.appear(1000, 100);

}); // end am5.ready()