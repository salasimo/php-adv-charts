$(document).ready(function() {

    $.ajax({
        url: "server.php",
        method: "GET",
        success: function(data) {
            var orange = "#FFA400";
            var lightblue = "#009FFD";
            var blue = "#2A2A72";
            var black = "#232528";
            var white = "#EAF6FF";
            var mesi = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
            var noOptions = {};
            var optionsChart1 = {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1000

                        }
                    }]
                }
            };
            var optionsChart3 = {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 0.1

                        }
                    }]
                }
            };
            if (access >= -1) {
                makeChart($("#first-chart"), data.fatturato.type, "Vendite", data.fatturato.data, mesi, optionsChart1, lightblue, lightblue, white);
            }
            var venditori = Object.keys(data.fatturato_by_agent.data);
            var vendite = Object.values(data.fatturato_by_agent.data);
            if (access >= 1) {
                makeChart($("#second-chart"), data.fatturato_by_agent.type, "Risultati Venditori", vendite, venditori, noOptions, [lightblue, blue, orange, black], white);
                $(".info-accesso-employee").hide();
            }
            var teams = ["Team 1", "Team 2", "Team 3"];
            if (access >= 2) {
                makeChartMulti($("#third-chart"), data.team_efficiency.type, "Risultati Teams", data.team_efficiency, mesi, optionsChart3, null, lightblue, orange, black, lightblue, orange, black);
                $(".info-accesso-clevel").hide();
            }

        },
        error: function(err) {
            alert("Errore: " + err);
        }
    });


    function makeChart(idChart, type, legenda, data, labels, options, bgColor, bdColor, otherColor) {
        var ctx = idChart;
        var chart = new Chart(ctx, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: legenda,
                    backgroundColor: bgColor,
                    borderColor: bdColor,
                    pointBackgroundColor: otherColor,
                    data: data
                }
                ]

            },
            options: options

        });
    }
    function makeChartMulti(idChart, type, legenda, data, labels, options, bgColor, bdColor1, bdColor2, bdColor3, otherColor1, otherColor2, otherColor3) {
        var ctx = idChart;
        var chart = new Chart(ctx, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: "Team 1",
                    backgroundColor: bgColor,
                    borderColor: bdColor1,
                    pointBackgroundColor: otherColor1,
                    data: data.data.Team1

                },
                {
                    label: "Team 2",
                    backgroundColor: bgColor,
                    borderColor: bdColor2,
                    pointBackgroundColor: otherColor2,
                    data: data.data.Team2

                },
                {
                    label: "Team 3",
                    backgroundColor: bgColor,
                    borderColor: bdColor3,
                    pointBackgroundColor: otherColor3,
                    data: data.data.Team3

                }
                ]

            },
            options: options

        });
    }

}); //==========
