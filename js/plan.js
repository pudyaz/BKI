am5.ready(function () {

    // Create root
    //var root = (am5.Root.new("indonesia")).setThemes([am5themes_Animated.new(root)]);



    var root = am5.Root.new("indonesia");

    // Set themes
    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    var prnt = root.container.children.push(am5.Container.new(root, {
        width: am5.p100,
        height: am5.p100
    }));
   

    // Create chart
    var chart = prnt.children.push(am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "none",
        projection: am5map.geoMercator(),
        layout: root.horizontalLayout,
        width: am5.p100
    }));

    // Create polygon series
    var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_indonesiaLow,
        valueField: "value",
        exclude: ["MY-12", "MY-13", "BN", "TL"],
        color: am5.color(0x14a2ba),
        calculateAggregates: true
    }));

    polygonSeries.mapPolygons.template.setAll({
        //tooltipText: "{name}: {value}"
        tooltipText: "{name}"
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color(0xefe62f)
    });

    polygonSeries.mapPolygons.template.states.create("active", {
        fill: am5.color(0xefe62f)
    });

    polygonSeries.mapPolygons.template.events.on("click", {
        fill: am5.color(0xefe62f)
    });

    polygonSeries.set("heatRules", [{
        target: polygonSeries.mapPolygons.template,
        dataField: "value",
        min: am5.color(0x14a2ba),
        max: am5.color(0x125d72),
        key: "fill"
    }]);

    //polygonSeries.mapPolygons.template.events.on("pointerover", function (ev) {
    //    heatLegend.showValue(ev.target.dataItem.get("value"));
    //});

    polygonSeries.data.setAll([
        { id: "ID-AC", value: 1 },
        { id: "ID-SU", value: 2 },
        { id: "ID-SB", value: 3 },
        { id: "ID-RI", value: 4 },
        { id: "ID-KR", value: 5 },
        { id: "ID-JA", value: 6 },
        { id: "ID-BE", value: 7 },
        { id: "ID-BB", value: 8 },
        { id: "ID-SS", value: 9 },
        { id: "ID-LA", value: 10 },
        { id: "ID-BT", value: 11 },
        { id: "ID-JK", value: 12 },
        { id: "ID-JB", value: 13 },
        { id: "ID-JT", value: 14 },
        { id: "ID-YO", value: 15 },
        { id: "ID-JI", value: 16 },
        { id: "ID-KB", value: 17 },
        { id: "ID-KU", value: 18 },
        { id: "ID-KT", value: 19 },
        { id: "ID-KI", value: 20 },
        { id: "ID-KS", value: 21 },
        { id: "ID-BA", value: 22 },
        { id: "ID-NB", value: 23 },
        { id: "ID-NT", value: 24 },
        { id: "ID-GO", value: 25 },
        { id: "ID-SA", value: 26 },
        { id: "ID-ST", value: 27 },
        { id: "ID-SR", value: 28 },
        { id: "ID-SN", value: 29 },
        { id: "ID-SG", value: 30 },
        { id: "ID-MU", value: 31 },
        { id: "ID-MA", value: 32 },
        { id: "ID-PB", value: 33 },
        { id: "ID-PA", value: 34 },
        { id: "ID-PT", value: 36 },
        { id: "ID-PE", value: 37 },
        { id: "ID-PS", value: 38 },
    ]);


    // Create chart2
    //var chart2 = prnt.children.push(am5xy.XYChart.new(root, {
    //    panX: false,
    //    panY: false,
    //    wheelX: "panX",
    //    wheelY: "zoomX",
    //    layout: root.verticalLayout,
    //    width: am5.p100
    //}));


    // Add legend

    var legend = chart2.children.push(
        am5.Legend.new(root, {
            centerX: am5.p50,
            x: am5.p50
        })
    );

    var data2 = [{
        "year": "2021",
        "PLTA": 2.5,
        "PLTB": 2.5,
        "PLTG": 2.1,
        "PLTP": 1,
        "PLTS": 0.8,
        "PLTU": 0.4
    }, {
        "year": "2022",
        "PLTA": 2.6,
        "PLTB": 2.7,
        "PLTG": 2.2,
        "PLTP": 0.5,
        "PLTS": 0.4,
        "PLTU": 0.3
    }, {
        "year": "2023",
        "PLTA": 2.8,
        "PLTB": 2.9,
        "PLTG": 2.4,
        "PLTP": 0.3,
        "PLTS": 0.9,
        "PLTU": 0.5
    }]


    // Create axes
    var xRenderer = am5xy.AxisRendererX.new(root, {
        cellStartLocation: 0.1,
        cellEndLocation: 0.9
    })

    var xAxis = chart2.xAxes.push(am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
    }));

    xRenderer.grid.template.setAll({
        location: 1
    })

    xAxis.data.setAll(data2);

    var yAxis = chart2.yAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
            strokeOpacity: 0.1
        })
    }));


    // Add series
    function makeSeries(name, fieldName) {
        var series = chart2.series.push(am5xy.ColumnSeries.new(root, {
            name: name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: fieldName,
            categoryXField: "year"
        }));

        series.columns.template.setAll({
            tooltipText: "{name}, {categoryX}:{valueY}",
            width: am5.percent(90),
            tooltipY: 0,
            strokeOpacity: 0
        });

        series.data.setAll(data2);

        // Make stuff animate on load
        series.appear();

        series.bullets.push(function () {
            return am5.Bullet.new(root, {
                locationY: 0,
                sprite: am5.Label.new(root, {
                    text: "{valueY}",
                    fill: root.interfaceColors.get("alternativeText"),
                    centerY: 0,
                    centerX: am5.p50,
                    populateText: true
                })
            });
        });

        legend.data.push(series);
    }

    makeSeries("PLTA", "PLTA");
    makeSeries("PLTA", "PLTB");
    makeSeries("PLTG", "PLTG");
    makeSeries("PLTP", "PLTP");
    makeSeries("PLTS", "PLTS");
    makeSeries("PLTU", "PLTU");


    // Make stuff animate on load
    chart2.appear(1000, 100);



}); // end am5.ready()