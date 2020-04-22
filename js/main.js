$(document).ready(function() {

    $.ajax({
        url: "server.php",
        method: "GET",
        success: function(vendite) {
            var mesi = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
            var ctx = $("#first-chart");
            var chartOne = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: mesi,
                    datasets: [{
                        label: "Vendite",
                        backgroundColor: "#009ffd",
                        borderColor: "#009ffd",
                        pointBackgroundColor: "#eaf6ff",
                        data: vendite

                    }]

                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                stepSize: 1000

                            }
                        }]
                    }
                }
            });
        },
        error: function(err) {
            alert("Errore: " + err);
        }
    });






}); //==========
