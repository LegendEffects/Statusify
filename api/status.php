<?php
$config = include('config.php');
$curl = curl_init();
 
 curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.uptimerobot.com/v2/getMonitors",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => "api_key=".$config['apiKey']."&format=json&logs=1",
    CURLOPT_HTTPHEADER => array(
        "cache-control: no-cache",
        "content-type: application/x-www-form-urlencoded"
    ),
 ));
  
 $response = curl_exec($curl);
 $err = curl_error($curl);
  
 curl_close($curl);
  
 if ($err) {
    echo "cURL Error #:" . $err;
 } else {
    $response = json_decode($response);

    $sevenDays = strtotime("today", strtotime("-7 days"));
    $ranges = array();
    for($i=0;$i<7;$i++) {
        array_push($ranges, array(
            'start' => $sevenDays+((3600*24)*$i),
            'end' => $sevenDays+((3600*24)*$i)+((3600*24)),
        ));
    }
    die(var_dump($ranges));

    // Process Response
    $final = array(
        'psp' => array(),
        'days' => array(),
        'statistics' => array(),
    );
    $final['status'] = $response['stat'];

    foreach($response['monitors'] as $monitor) {

    }

    header('Content-Type: application/json');
    echo $response;
 }
 ?>