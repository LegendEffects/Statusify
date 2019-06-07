<?php

// Use cache if it's not more than 5 minutes old
if(file_exists("cache/monitors.json")) {
  $cache = json_decode(file_get_contents("cache/monitors.json"), true);
  if($cache['timestamp'] > time()-300) {
    header('FromCache: True');

    header('Content-Type: application/json');
    echo $cache['data'];
    exit();
  }
}

$curl = curl_init();
 
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://stats.legendeffects.co.uk/api/getMonitorList/6WE9VI3oN?_=".time(),
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
//curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13');
 
$response = curl_exec($curl);
$err = curl_error($curl);
 
curl_close($curl);
 

if ($err) {
  header('Content-Type: application/json');
  echo json_encode(["status" => "error", "error" => $err]);
} else {
  // Set to cache
  file_put_contents("cache/monitors.json", json_encode(["timestamp" => time(), "data" => $response]));

  header('Content-Type: application/json');
  echo $response;
}
?>