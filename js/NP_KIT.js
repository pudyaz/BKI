am5.ready(function () {

    // Create root element
    var root = am5.Root.new("kt_charts_IP");

    // Set themes
    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    // Create chart
    var chart = root.container.children.push(
        am5percent.PieChart.new(root, {
            endAngle: 270
        })
    );

    // Create series
    var series = chart.series.push(
        am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
            endAngle: 270,
            tooltip: am5.Tooltip.new(root, {
                pointerOrientation: "horizontal",
                labelText: "{value}"
            })
        })
    );


    // Set data
    series.data.setAll([{
        category: "PLTA",
        value: 2962.80
    }, {
        category: "PLTB",
        value: 225
    }, {
        category: "PLTBio",
        value: 72
    }, {
        category: "PLTEBT",
        value: 460
    }, {
        category: "PLTM",
        value: 360.37
    }, {
        category: "PLTS",
        value: 1326.60
    }, {
        category: "PLTbm",
        value: 20
    }, {
        category: "PLTbG",
        value: 2.5
    }]);

    series.appear(1000, 100);

}); // end am5.ready()