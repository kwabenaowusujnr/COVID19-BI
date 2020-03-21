//Sliding Effect Control
head.js("assets/js/skin-select/jquery.cookie.js");
head.js("assets/js/skin-select/skin-select.js");

//Showing Date
head.js("assets/js/clock/date.js");

//Bootstrap
//head.js("assets/js/bootstrap.js");

//NEWS STICKER
head.js("assets/js/newsticker/jquery.newsTicker.js", function () {

    var nt_title = $('#nt-title').newsTicker({
        row_height: 18,
        max_rows: 1,
        duration: 5000,
        pauseOnHover: 0
    });


});

//------------------------------------------------------------- 


////Acordion and Sliding menu

head.js("assets/js/custom/scriptbreaker-multiple-accordion-1.js", function () {

    $(".topnav").accordionze({
        accordionze: true,
        speed: 500,
        closedSign: '<img src="assets/img/plus.png">',
        openedSign: '<img src="assets/img/minus.png">'
    });

});

////Right Sliding menu

head.js("assets/js/slidebars/slidebars.min.js", "http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js", function () {

    $(document).ready(function () {
        var mySlidebars = new $.slidebars();

        $('.toggle-left').on('click', function () {
            mySlidebars.toggle('right');
        });
    });
});

//-------------------------------------------------------------




//EASY PIE CHART
head.js("assets/js/gage/jquery.easypiechart.min.js", function () {

    $(function () {


        $('.chart').easyPieChart({
            easing: 'easeOutBounce',
            trackColor: '#ffffff',
            scaleColor: '#ffffff',
            barColor: '#FF0064',
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        var chart = window.chart = $('.chart').data('easyPieChart');
        $('.js_update').on('click', function () {
            chart.update(Math.random() * 100);
        });

        $('.speed-car').easyPieChart({
            easing: 'easeOutBounce',
            trackColor: 'rgba(0,0,0,0.3)',
            scaleColor: 'transparent',
            barColor: '#0085DF',

            lineWidth: 8,
            onStep: function (from, to, percent) {
                $(this.el).find('.percent2').text(Math.round(percent));
            }
        });
        var chart = window.chart = $('.chart2').data('easyPieChart');
        $('.js_update').on('click', function () {
            chart.update(Math.random() * 100);
        });
        $('.overall').easyPieChart({
            easing: 'easeOutBounce',
            trackColor: 'rgba(0,0,0,0.3)',
            scaleColor: '#323A45',
            lineWidth: 35,
            lineCap: 'butt',
            barColor: '#FFB900',
            onStep: function (from, to, percent) {
                $(this.el).find('.percent3').text(Math.round(percent));
            }
        });
    });

});
//-------------------------------------------------------------

//TOOL TIP

head.js("assets/js/tip/jquery.tooltipster.js", function () {

    $('.tooltip-tip-x').tooltipster({
        position: 'right'

    });

    $('.tooltip-tip').tooltipster({
        position: 'right',
        animation: 'slide',
        theme: '.tooltipster-shadow',
        delay: 1,
        offsetX: '-12px',
        onlyOne: true

    });
    $('.tooltip-tip2').tooltipster({
        position: 'right',
        animation: 'slide',
        offsetX: '-12px',
        theme: '.tooltipster-shadow',
        onlyOne: true

    });
    $('.tooltip-top').tooltipster({
        position: 'top'
    });
    $('.tooltip-right').tooltipster({
        position: 'right'
    });
    $('.tooltip-left').tooltipster({
        position: 'left'
    });
    $('.tooltip-bottom').tooltipster({
        position: 'bottom'
    });
    $('.tooltip-reload').tooltipster({
        position: 'right',
        theme: '.tooltipster-white',
        animation: 'fade'
    });
    $('.tooltip-fullscreen').tooltipster({
        position: 'left',
        theme: '.tooltipster-white',
        animation: 'fade'
    });
    //For icon tooltip



});
//------------------------------------------------------------- 

//NICE SCROLL

head.js("assets/js/nano/jquery.nanoscroller.js", function () {

    $(".nano").nanoScroller({
        //stop: true 
        scroll: 'top',
        scrollTop: 0,
        sliderMinHeight: 40,
        preventPageScrolling: true
        //alwaysVisible: false

    });

});
//------------------------------------------------------------- 






//------------------------------------------------------------- 
//PAGE LOADER
head.js("assets/js/pace/pace.js", function () {

    paceOptions = {
        ajax: false, // disabled
        document: false, // disabled
        eventLag: false, // disabled
        elements: {
            selectors: ['.my-page']
        }
    };

});

//------------------------------------------------------------- 

//SPARKLINE CHART
head.js("assets/js/chart/jquery.sparkline.js", function () {

    $(function () {
        $('.inlinebar').sparkline('html', {
            type: 'bar',
            barWidth: '8px',
            height: '30px',
            barSpacing: '2px',
            barColor: '#A8BDCF'
        });
        $('.linebar').sparkline('html', {
            type: 'bar',
            barWidth: '5px',
            height: '30px',
            barSpacing: '2px',
            barColor: '#44BBC1'
        });
        $('.linebar2').sparkline('html', {
            type: 'bar',
            barWidth: '5px',
            height: '30px',
            barSpacing: '2px',
            barColor: '#AB6DB0'
        });
        $('.linebar3').sparkline('html', {
            type: 'bar',
            barWidth: '5px',
            height: '30px',
            barSpacing: '2px',
            barColor: '#19A1F9'
        });
    });

    $(function () {
        var sparklineLogin = function () {
            $('#sparkline').sparkline(
                [5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
                type: 'line',
                width: '100%',
                height: '25',
                lineColor: '#ffffff',
                fillColor: '#0DB8DF',
                lineWidth: 1,
                spotColor: '#ffffff',
                minSpotColor: '#ffffff',
                maxSpotColor: '#ffffff',
                highlightSpotColor: '#ffffff',
                highlightLineColor: '#ffffff'
            }
            );
        }
        var sparkResize;
        $(window).resize(function (e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(sparklineLogin, 500);
        });
        sparklineLogin();
    });


});

//------------------------------------------------------------- 

//DIGITAL CLOCK
head.js("assets/js/clock/jquery.clock.js", function () {

    //clock
    $('#digital-clock').clock({
        offset: '0',
        type: 'digital'
    });


});


//------------------------------------------------------------- 

//head.js("assets/js/gage/raphael.2.1.0.min.js", "assets/js/gage/justgage.js", function () {



//    var g1;
//    window.onload = function () {
//        var g1 = new JustGage({
//            id: "g1",
//            value: getRandomInt(0, 1000),
//            min: 0,
//            max: 1000,
//            relativeGaugeSize: true,
//            gaugeColor: "rgba(0,0,0,0.4)",
//            levelColors: "#0DB8DF",
//            labelFontColor: "#ffffff",
//            titleFontColor: "#ffffff",
//            valueFontColor: "#ffffff",
//            label: "VISITORS",
//            gaugeWidthScale: 0.2,
//            donut: true
//        });
//    };



//});
var COVIDArrayRaw = [];
var COVIDArrayGrouped = [];

function RunMonitorBackUp() {


    $.ajax({
        headers: {
            'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
            'x-rapidapi-key': 'JAM0WCGyOZmshaYPSLHUgKKgNOe3p18Qs7tjsnDCGfniQdruHe'
        },
        url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
        type: "GET",
        contentType: "application/json",
        success: function (data) {
            var _COVIDArray = data.data.covid19Stats;
            COVIDArrayRaw = _.sortBy(_COVIDArray, 'confirmed').reverse();
            var _COVIDArrayGrouped = _.groupBy(_COVIDArray, 'country');
            COVIDArrayGrouped = Object.keys(_COVIDArrayGrouped).map(k => [k, _COVIDArrayGrouped[k]]);

            //console.log(data);
            //console.log(COVIDArrayRaw);
            //console.log(COVIDArrayGrouped);                      
            //console.log(COVIDArrayGrouped[0]);

            RepaintData(data);
        }
    });

}


function RunMonitorBackup1() {

    $.ajax({
        //headers: {
        //    'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
        //    'x-rapidapi-key': 'JAM0WCGyOZmshaYPSLHUgKKgNOe3p18Qs7tjsnDCGfniQdruHe'
        //},
        url: "https://coronavirus-tracker-api.herokuapp.com/v2/locations",
        type: "GET",
        contentType: "application/json",
        success: function (data) {

            console.log(data);

            var _COVIDArray = [];


            for (var i = 0; i < data.locations.length; i++) {
                _COVIDArray.push({
                    coordinates: {
                        latitude: data.locations[i].coordinates.latitude,
                        longitude: data.locations[i].coordinates.longitude
                    },
                    country: data.locations[i].country,
                    country_code: data.locations[i].country_code,
                    confirmed: data.locations[i].latest.confirmed,
                    deaths: data.locations[i].latest.deaths,
                    recovered: data.locations[i].latest.recovered,
                    province: data.locations[i].province
                });
            }

            COVIDArrayRaw = _.sortBy(_COVIDArray, 'confirmed').reverse();


            var _COVIDArrayGrouped = _.groupBy(_COVIDArray, 'country');
            COVIDArrayGrouped = Object.keys(_COVIDArrayGrouped).map(k => [k, _COVIDArrayGrouped[k]]);

            //console.log(data);
            //console.log(COVIDArrayRaw);
            //console.log(COVIDArrayGrouped);                      
            //console.log(COVIDArrayGrouped[0]);

            RepaintData(data);
        }
    });

}


function RunMonitor() {

    $.ajax({
        //headers: {
        //    'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
        //    'x-rapidapi-key': 'JAM0WCGyOZmshaYPSLHUgKKgNOe3p18Qs7tjsnDCGfniQdruHe'
        //},
        url: "https://coronavirus-19-api.herokuapp.com/countries",
        type: "GET",
        contentType: "application/json",
        success: function (data) {

            $("#sp_lastchecked").html(moment(new Date()).calendar());


            var _COVIDArray = data;


            //for (var i = 0; i < data.locations.length; i++) {
            //    _COVIDArray.push({
            //        coordinates: {
            //            latitude: data.locations[i].coordinates.latitude,
            //            longitude: data.locations[i].coordinates.longitude
            //        },
            //        country: data.locations[i].country,
            //        country_code: data.locations[i].country_code,
            //        confirmed: data.locations[i].latest.confirmed,
            //        deaths: data.locations[i].latest.deaths,
            //        recovered: data.locations[i].latest.recovered,
            //        province: data.locations[i].province
            //    });
            //}

            COVIDArrayRaw = _.sortBy(_COVIDArray, 'cases').reverse();


            var _COVIDArrayGrouped = _.groupBy(_COVIDArray, 'country');
            COVIDArrayGrouped = Object.keys(_COVIDArrayGrouped).map(k => [k, _COVIDArrayGrouped[k]]);

            //console.log(data);
            //console.log(COVIDArrayRaw);
            //console.log(COVIDArrayGrouped);                      
            //console.log(COVIDArrayGrouped);

            var _WCases = 0;
            var _WRecovered = 0;
            var _WDeaths = 0;
            var _WPM = 0;
            _.each(COVIDArrayGrouped, function (i) {

                var _itt = i[1][0];
                _WCases = _WCases + _itt.cases;

                _WRecovered = _WRecovered + _itt.recovered;

                _WDeaths = _WDeaths + _itt.deaths;

                _WPM = _WPM + _itt.casesPerOneMillion;
            });

            $("#lbl-country").html("WorldWide");
            $("#ConfirmedCases").html(NumberFormat(_WCases));
            $(".caseper1m").html(NumberFormat(_WPM));
            $("#NewTotalRecovered").html(NumberFormat(_WRecovered));
            $("#NewTotalDeaths").html(NumberFormat(_WDeaths));

            RepaintData(data);
        }
    });

}



setInterval(function () {
    RunMonitor();
}, 150000);


function GetCountryData(_name) {

    var _selCountry = _.filter(COVIDArrayGrouped, function (item) {
        return item[0] === _name;
    });

    var _confirmed = _selCountry[0][1].reduce((s, f) => {
        return s + f.cases;
        //return s + f.confirmed;
    }, 0);

    var _recovered = _selCountry[0][1].reduce((s, f) => {
        return s + f.recovered;
    }, 0);

    var _death = _selCountry[0][1].reduce((s, f) => {
        return s + f.deaths;
    }, 0);

    var _casesPerOneMillion = _selCountry[0][1].reduce((s, f) => {
        return s + f.casesPerOneMillion;
    }, 0);
    console.log(_name);


    var flagName = "";

    if (_name === "USA")
        flagName = "united_states_of_america";
    else if (_name === "S. Korea")
        flagName = "korea_south";
    else if (_name === "Saudi Arabia")
        flagName = "saudi_arabia";
    else if (_name === "Hong Kong")
        flagName = "hong_kong";
    else if (_name === "South Africa")
        flagName = "south_africa";
    else if (_name === "San Marino")
        flagName = "san_marino";
    else if (_name === "Costa Rica")
        flagName = "costa_rica";
    else if (_name === "UAE")
        flagName = "united_arab_emirates";
    else if (_name === "Faeroe Islands")
        flagName = "faroe_islands";
    else if (_name === "Bosnia and Herzegovina")
        flagName = "bosnia_and_herzegovina";
    else if (_name === "Ivory Coast")
        flagName = "cote_d_Ivoire";
    else
        flagName = _name.replace(" ", /_/g);

    $("#country-flag").attr("src", "assets/all_flags/" + flagName.toLowerCase() + ".gif");
    $("#lbl-country").html(_name);
    $("#ConfirmedCases").html(NumberFormat(_confirmed));
    $(".caseper1m").html(NumberFormat(_casesPerOneMillion));
    //$("#NewCases").html(_NewCases);
    $("#NewTotalRecovered").html(NumberFormat(NumberFormat_recovered));
    $("#NewTotalDeaths").html(NumberFormat(_death));


}

function RepaintData(data) {


    // $("#sp_lastchecked").html(moment(data.data.lastChecked).calendar());


    $('#mn-topmenu').empty();
    $('#mn-topmenu').append('<li><a href = "#" style = "border-left: 0px solid !important;" class="title-menu-left" ><span class="widget-menu"></span><i data-toggle="tooltip" class="entypo-cog pull-right config-wrap"></i></a></li>');
    _.each(COVIDArrayGrouped, function (i) {
        //console.log(i[0]);
        var _tbn = i[1].reduce((s, f) => {
            return s + f.cases;
            //return s + f.confirmed;
        }, 0);
        _tbn= NumberFormat(_tbn);
        $('#mn-topmenu').append("<li onClick='GetCountryData(\"" + i[0] + "\")'><a class='tooltip-tip ajax-load li-country' href='#' title=" + i[0] + "><i class='icon-location'></i><span>" + i[0] + "</span><span class='pull-right'>" + _tbn + "</span></a> </li>");

    });
    //SEARCH MENU
    head.js("assets/js/search/jquery.quicksearch.js", function () {

        $('input.id_search').quicksearch('.menu-left-nest li');

    });

    $('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: '#333333',
        color: '#ffffff',
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        enableZoom: true,
        showTooltip: true,
        scaleColors: ['#C8EEFF', '#006491'],
        values: { "af": "16.63", "al": "11.58", "dz": "158.97", "ao": "85.81", "ag": "1.1", "ar": "351.02", "am": "8.83", "au": "1219.72", "at": "366.26", "az": "52.17", "bs": "7.54", "bh": "21.73", "bd": "105.4", "bb": "3.96", "by": "52.89", "be": "461.33", "bz": "1.43", "bj": "6.49", "bt": "1.4", "bo": "19.18", "ba": "16.2", "bw": "12.5", "br": "2023.53", "bn": "11.96", "bg": "44.84", "bf": "8.67", "bi": "1.47", "kh": "11.36", "cm": "21.88", "ca": "1563.66", "cv": "1.57", "cf": "2.11", "td": "7.59", "cl": "199.18", "cn": "5745.13", "co": "283.11", "km": "0.56", "cd": "12.6", "cg": "11.88", "cr": "35.02", "ci": "22.38", "hr": "59.92", "cy": "22.75", "cz": "195.23", "dk": "304.56", "dj": "1.14", "dm": "0.38", "do": "50.87", "ec": "61.49", "eg": "216.83", "sv": "21.8", "gq": "14.55", "er": "2.25", "ee": "19.22", "et": "30.94", "fj": "3.15", "fi": "231.98", "fr": "2555.44", "ga": "12.56", "gm": "1.04", "ge": "11.23", "de": "3305.9", "gh": "18.06", "gr": "305.01", "gd": "0.65", "gt": "40.77", "gn": "4.34", "gw": "0.83", "gy": "2.2", "ht": "6.5", "hn": "15.34", "hk": "226.49", "hu": "132.28", "is": "12.77", "in": "1430.02", "id": "695.06", "ir": "337.9", "iq": "84.14", "ie": "204.14", "il": "201.25", "it": "2036.69", "jm": "13.74", "jp": "5390.9", "jo": "27.13", "kz": "129.76", "ke": "32.42", "ki": "0.15", "kr": "986.26", "undefined": "5.73", "kw": "117.32", "kg": "4.44", "la": "6.34", "lv": "23.39", "lb": "39.15", "ls": "1.8", "lr": "0.98", "ly": "77.91", "lt": "35.73", "lu": "52.43", "mk": "9.58", "mg": "8.33", "mw": "5.04", "my": "218.95", "mv": "1.43", "ml": "9.08", "mt": "7.8", "mr": "3.49", "mu": "9.43", "mx": "1004.04", "md": "5.36", "mn": "5.81", "me": "3.88", "ma": "91.7", "mz": "10.21", "mm": "35.65", "na": "11.45", "np": "15.11", "nl": "770.31", "nz": "138", "ni": "6.38", "ne": "5.6", "ng": "206.66", "no": "413.51", "om": "53.78", "pk": "174.79", "pa": "27.2", "pg": "8.81", "py": "17.17", "pe": "153.55", "ph": "189.06", "pl": "438.88", "pt": "223.7", "qa": "126.52", "ro": "158.39", "ru": "1476.91", "rw": "5.69", "ws": "0.55", "st": "0.19", "sa": "434.44", "sn": "12.66", "rs": "38.92", "sc": "0.92", "sl": "1.9", "sg": "217.38", "sk": "86.26", "si": "46.44", "sb": "0.67", "za": "354.41", "es": "1374.78", "lk": "48.24", "kn": "0.56", "lc": "1", "vc": "0.58", "sd": "65.93", "sr": "3.3", "sz": "3.17", "se": "444.59", "ch": "522.44", "sy": "59.63", "tw": "426.98", "tj": "5.58", "tz": "22.43", "th": "312.61", "tl": "0.62", "tg": "3.07", "to": "0.3", "tt": "21.2", "tn": "43.86", "tr": "729.05", "tm": 0, "ug": "17.12", "ua": "136.56", "ae": "239.65", "gb": "2258.57", "us": "14624.18", "uy": "40.71", "uz": "37.72", "vu": "0.72", "ve": "285.21", "vn": "101.99", "ye": "30.02", "zm": "15.69", "zw": "5.57" },
        normalizeFunction: 'polynomial'
    });
}

function sortByKey(array, key) {
    return array.sort(function (a, b) {
        var x = a[key],
            y = b[key];
        if (typeof x === 'string') {
            x = x.toLowerCase();
            y = y.toLowerCase();
            if (!isNaN(x) && !isNaN(y)) {
                x = parseInt(x, 10);
                y = parseInt(y, 10);
            }
        }
        return (x < y ? -1 : (x > y ? 1 : 0));
    });
}

RunMonitor();


function NumberFormat(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}