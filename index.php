<!DOCTYPE html>
<html lang="it" dir="ltr">

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/style.css">
    <!--jQuery 3.4.1-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js" integrity="sha256-R4pqcOYV8lt7snxMQO/HSbVCFRPMdrhAFMH+vr9giYI=" crossorigin="anonymous"></script>
    <title>Advanced Charts</title>
</head>

<body>
    <?php
    $access = $_GET["access"];
    if ($access == "guest") {
        $access = 0;
    } elseif ($access == "employee") {
        $access = 1;
    } elseif ($access == "clevel") {
        $access = 2;
    } else {
        $access = -1;
    }
    ?>
    <div class="dashboard-container">
        <div class="container">
            <canvas id="first-chart"></canvas>
        </div>

        <div class="container">
            <canvas id="second-chart"></canvas>
            <p class="info-accesso-employee">Dati non visualizzabili con questo livello di accesso.</p>
        </div>
        <div class="container">
            <canvas id="third-chart"></canvas>
            <p class="info-accesso-clevel">Dati non visualizzabili con questo livello di accesso.</p>
        </div>
    </div>
    <script src="js/main.js" charset="utf-8"></script>
    <script type="text/javascript">
        var access = <?php echo $access; ?>
    </script>
</body>

</html>
