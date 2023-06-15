am5.ready(function () {

    // Create root and chart
    var root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([
        am5themes_Animated.new(root)
    ]);


    // ====================================
    // Create map
    // ====================================




    var map = root.container.children.push(
        am5map.MapChart.new(root, {
            panX: "translateX",
            panY: "translateY",
            projection: am5map.geoMercator(),
            paddingLeft: 0,
            paddingrIGHT: 0,
            paddingBottom: 0
        })
    );

    // Create polygon series
    var polygonSeries = map.series.push(
        am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_indonesiaLow,
            exclude: ["MY-12", "MY-13", "BN", "TL"],
            toggleKey: "active",
            fill: am5.color(0x14A2BA)
        })
    );

    var pointSeries = map.series.push(
        am5map.MapPointSeries.new(root, {
            // ...
        })
    );

    pointSeries.bullets.push(function (root, series, x) {

        var chartData = x.dataContext.data;

        var chart = root.container.children.push(am5percent.PieChart.new(root, {
            width: chartData.width,
            height: chartData.height,
            radius: am5.p100,
            centerX: am5.p50,
            centerY: am5.p50
        }));

        var series = chart.series.push(am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category"
        }));

        series.labels.template.set("forceHidden", true);
        series.ticks.template.set("forceHidden", true);
        series.data.setAll(chartData.pieData);

        return am5.Bullet.new(root, {
            sprite: chart
        });
    });

    pointSeries.bullets.push(function (root, series, x) {

        var chartData = x.dataContext.data;

        return am5.Bullet.new(root, {
            sprite: am5.Label.new(root, {
                text: chartData.title,
                centerX: am5.p50,
                centerY: am5.p100,
                dy: chartData.height * -0.5
            })
        });
    });


    // ====================================
    // Create pie charts
    // ====================================

    var charts = [{
        "title": "Sumatra",
        "latitude": -0.589724,
        "longitude": 101.3431058,
        "width": 100,
        "height": 100,
        "pieData": [{
            "category": "Hydro (867 MW)",
            "value": 867,
            "color": "#D4F1F9"
        }, {
            "category": "Geothermal (110 MW)",
            "value": 110,
            "color": "#FFA500"
        }, {
            "category": "Steam-turbine (3030 MW)",
            "value": 3030,
            "color": "#AEAEAE"
        }, {
            "category": "Combined Cycle (1020 MW)",
            "value": 1020,
            "color": "#6699CC"
        }, {
            "category": "Gas Turbine (89 MW)",
            "value": 899,
            "color": "#75975E"
        }, {
            "category": "Diesel (2065 MW)",
            "value": 2065,
            "color": "#B22222"
        }, {
            "category": "IPP (4996 MW)",
            "value": 4996,
            "color": "#D1D100"
        }, {
            "category": "Others (1 MW)",
            "value": 1,
            "color": "#C576F6"
        }]
    }, {
            "title": "Jawa Bali",
            "latitude": -7.614529,
            "longitude": 110.712246,
            "width": 100,
            "height": 100,
            "pieData": [{
                "category": "Hydro (2426 MW)",
                "value": 2426,
                "color": "#D4F1F9"
            }, {
                "category": "Geothermal (377 MW)",
                "value": 377,
                "color": "#FFA500"
            }, {
                "category": "Steam-turbine (15830 MW)",
                "value": 15830,
                "color": "#AEAEAE"
            }, {
                "category": "Combined Cycle (10328 MW)",
                "value": 10328,
                "color": "#6699CC"
            }, {
                "category": "Gas Turbine (1709 MW)",
                "value": 1709,
                "color": "#75975E"
            }, {
                "category": "Diesel (424 MW)",
                "value": 424,
                "color": "#B22222"
            }, {
                "category": "IPP (11594 MW)",
                "value": 11594,
                "color": "#D1D100"
            }, {
                "category": "Others (2 MW)",
                "value": 1,
                "color": "#C576F6"
            }]
        }
        , {
            "title": "Kalimantan",
            "latitude": -1.681488,
            "longitude": 113.382355,
            "width": 100,
            "height": 100,
            "pieData": [{
                "category": "Hydro (32 MW)",
                "value": 32,
                "color": "#D4F1F9"
            }, {
                "category": "Geothermal (0 MW)",
                "value": 0,
                "color": "#FFA500"
            }, {
                "category": "Steam-turbine (7781 MW)",
                "value": 7781,
                "color": "#AEAEAE"
            }, {
                "category": "Combined Cycle (60 MW)",
                "value": 60,
                "color": "#6699CC"
            }, {
                "category": "Gas Turbine (271 MW)",
                "value": 271,
                "color": "#75975E"
            }, {
                "category": "Diesel (1231 MW)",
                "value": 1231,
                "color": "#B22222"
            }, {
                "category": "IPP ( 1666)",
                "value": 1666,
                "color": "#D1D100"
            }, {
                "category": "Others (1 MW)",
                "value": 1,
                "color": "#C576F6"
            }]
        }, {
            "title": "Sulawesi",
            "latitude": -1.430025,
            "longitude": 121.445618,
            "width": 100,
            "height": 100,
            "pieData": [{
                "category": "Hydro (227 MW)",
                "value": 227,
                "color": "#D4F1F9"
            }, {
                "category": "Geothermal (80 MW)",
                "value": 80,
                "color": "#FFA500"
            }, {
                "category": "Steam-turbine (626 MW)",
                "value": 626,
                "color": "#AEAEAE"
            }, {
                "category": "Combined Cycle (0 MW)",
                "value": 0,
                "color": "#6699CC"
            }, {
                "category": "Gas Turbine (120 MW)",
                "value": 120,
                "color": "#75975E"
            }, {
                "category": "Diesel (802 MW)",
                "value": 802,
                "color": "#B22222"
            }, {
                "category": "IPP (1716 MW)",
                "value": 1716,
                "color": "#D1D100"
            }, {
                "category": "Others (4 MW)",
                "value": 4,
                "color": "#C576F6"
            }]
        }, {
            "title": "Nusa Tenggara Barat",
            "latitude": -8.652933,
            "longitude": 117.361649,
            "width": 100,
            "height": 100,
            "pieData": [{
                "category": "Hydro (2 MW)",
                "value": 2,
                "color": "#D4F1F9"
            }, {
                "category": "Geothermal (0 MW)",
                "value": 0,
                "color": "#FFA500"
            }, {
                "category": "Steam-turbine (157 MW)",
                "value": 157,
                "color": "#AEAEAE"
            }, {
                "category": "Combined Cycle (0 MW)",
                "value": 0,
                "color": "#6699CC"
            }, {
                "category": "Gas Turbine (0 MW)",
                "value": 0,
                "color": "#75975E"
            }, {
                "category": "Diesel (443 MW)",
                "value": 443,
                "color": "#B22222"
            }, {
                "category": "IPP (136 MW)",
                "value": 136,
                "color": "#D1D100"
            }, {
                "category": "Others (1 MW)",
                "value": 1,
                "color": "#C576F6"
            }]
        }, {
            "title": "Nusa Tenggara Timur",
            "latitude": -10.178757,
            "longitude": 123.597603,
            "width": 100,
            "height": 100,
            "pieData": [{
                "category": "Hydro (0 MW)",
                "value": 0,
                "color": "#D4F1F9"
            }, {
                "category": "Geothermal (13 MW)",
                "value": 13,
                "color": "#FFA500"
            }, {
                "category": "Steam-turbine (47 MW)",
                "value": 47,
                "color": "#AEAEAE"
            }, {
                "category": "Combined Cycle (0 MW)",
                "value": 0,
                "color": "#6699CC"
            }, {
                "category": "Gas Turbine (0 MW)",
                "value": 0,
                "color": "#75975E"
            }, {
                "category": "Diesel (377 MW)",
                "value": 377,
                "color": "#B22222"
            }, {
                "category": "IPP (46 MW)",
                "value": 46,
                "color": "#D1D100"
            }, {
                "category": "Others (8 MW)",
                "value": 8,
                "color": "#C576F6"
            }]
        }, {
            "title": "Maluku",
            "latitude": -4.5262,
            "longitude": 129.9398,
            "width": 100,
            "height": 100,
            "pieData": [{
                "category": "Hydro (0 MW)",
                "value": 0,
                "color": "#D4F1F9"
            }, {
                "category": "Geothermal (0 MW)",
                "value": 0,
                "color": "#FFA500"
            }, {
                "category": "Steam-turbine (14 MW)",
                "value": 14,
                "color": "#AEAEAE"
            }, {
                "category": "Combined Cycle (0 MW)",
                "value": 0,
                "color": "#6699CC"
            }, {
                "category": "Gas Turbine (0 MW)",
                "value": 0,
                "color": "#75975E"
            }, {
                "category": "Diesel (582 MW)",
                "value": 582,
                "color": "#B22222"
            }, {
                "category": "IPP (60 MW)",
                "value": 60,
                "color": "#D1D100"
            }, {
                "category": "Others (2 MW)",
                "value": 2,
                "color": "#C576F6"
            }]
        }, {
            "title": "Papua",
            "latitude": -4.269928,
            "longitude": 138.080353,
            "width": 100,
            "height": 100,
            "pieData": [{
                "category": "Hydro (30 MW)",
                "value": 30,
                "color": "#D4F1F9"
            }, {
                "category": "Geothermal (0 MW)",
                "value": 0,
                "color": "#FFA500"
            }, {
                "category": "Steam-turbine (24 MW)",
                "value": 24,
                "color": "#AEAEAE"
            }, {
                "category": "Combined Cycle (0 MW)",
                "value": 0,
                "color": "#6699CC"
            }, {
                "category": "Gas Turbine (0 MW)",
                "value": 0,
                "color": "#75975E"
            }, {
                "category": "Diesel (647 MW)",
                "value": 647,
                "color": "#B22222"
            }, {
                "category": "IPP (86 MW)",
                "value": 86,
                "color": "#D1D100"
            }, {
                "category": "Others (7 MW)",
                "value": 7,
                "color": "#C576F6"
            }]
        }

    ];

    for (var i = 0; i < charts.length; i++) {
        var chart = charts[i];
        pointSeries.data.push({
            geometry: { type: "Point", coordinates: [chart.longitude, chart.latitude] },
            title: chart.title,
            data: chart
        });
    }

}); // end am5.ready()