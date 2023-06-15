am5.ready(function () {

    // Create root element
    var root = am5.Root.new("kt_charts_widget_fiscal1_chart");


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
        year: "2018",
        gdp: 5.2,
        budget: -1.8,
        total: 29.8,
        reserve: 120.7
    }, {
        year: "2019",
        gdp: 5,
        budget: -2.2,
        total: 30.2,
        reserve: 129.2
    }, {
        year: "2020",
        gdp: -2.1,
        budget: -6.1,
        total: 39.4,
        reserve: 135.9
    }, {
        year: "2021",
        gdp: 3.7,
        budget: -4.7,
        total: 41,
        reserve: 144.9
    }, {
        year: "2022",
        gdp: 5,
        budget: 0.4,
        total: 39.6,
        reserve: 136.4
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
        renderer: am5xy.AxisRendererX.new(root, {}),
        min: -8,
        max: 150
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

    createSeries("gdp", "GDP Growth (%)");
    createSeries("budget", "Budget Surplus (Deficit)/GDP (%)");
    createSeries("total", "Total Debt / GDP (%)");
    createSeries("reserve", "FX Reserves (USD Bn eqv.)");


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