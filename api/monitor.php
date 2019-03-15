<?php
    if(isset($_POST['monitorID']) && !empty($_POST['monitorID'])) {
        $monitor = htmlspecialchars((int) $_POST['monitorID']);
        
        $curl = curl_init();
        include('config.php');

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://stats.uptimerobot.com/api/monitor-page/".$config['urlKey']."/".$monitor,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "cache-control: no-cache",
                "content-type: application/x-www-form-urlencoded"
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);
    } else {
        $err = "Missing POST parameter.";
    }


    if ($err) {
        echo json_encode(["status"=>false, "message"=>"Error fetching status."]);
    } else {
        echo $response;
    }
