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
            makeChart($("#first-chart"), data.fatturato.type, "Vendite", data.fatturato.data, mesi, optionsChart1, lightblue, lightblue, white);
            var venditori = Object.keys(data.fatturato_by_agent.data);
            var vendite = Object.values(data.fatturato_by_agent.data);
            makeChart($("#second-chart"), data.fatturato_by_agent.type, "Risultati Venditori", vendite, venditori, noOptions, [lightblue, blue, orange, black], white);


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

                }]

            },
            options: options

        });
    }

}); //==========
