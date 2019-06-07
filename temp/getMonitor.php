<?php
if(!isset($_GET['m']) && !empty($_GET['m'])) {
  header('Content-Type: application/json');
  echo json_encode(["status" => false, "error" => "Missing monitor parameter (m)."]);
  exit();
}

$stripped = preg_replace("/[^0-9]/", "", $_GET['m']);
if(file_exists('cache/monitors/'.$stripped.'.json')) {
  $cache = json_decode(file_get_contents('cache/monitors/'.$stripped.'.json'), true);
  if($cache['timestamp'] > time()-300) {
    header('FromCache: True');
    header('Content-Type: application/json');
    echo $cache['data'];
    exit();
  }
}


$curl = curl_init();
 
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://stats.legendeffects.co.uk/api/getMonitor/6WE9VI3oN?m=".htmlspecialchars($_GET['m'])."&_=".time(),
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
  file_put_contents("cache/monitors/".$stripped.".json", json_encode(["timestamp" => time(), "data" => $response]));

  header('Content-Type: application/json');
  echo $response;
}
?>