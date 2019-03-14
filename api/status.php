<?php
    include('config.php');
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://stats.uptimerobot.com/api/status-page/".$config['urlKey']."/1?sort=1",
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

    if ($err) {
        echo json_encode(["status"=>false, "message"=>"Error fetching status."]);
    } else {
        echo $response;
    }
