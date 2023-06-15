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
        value: 3023.7
    }, {
        category: "PLTB",
        value: 297
    }, {
        category: "PLTBio",
        value: 88.4
    }, {
        category: "PLTEBT",
        value: 450
    }, {
        category: "PLT Lain",
        value: 300
    }, {
        category: "PLTM",
        value: 16.6
    }, {
        category: "PLTP",
        value: 1205
    }, {
        category: "PLTS",
        value: 1251.67
    }]);

    series.appear(1000, 100);

    

}); // end am5.ready()