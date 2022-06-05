<?php

// Include CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Origin: http://localhost:3001');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Credentials", "true");
header('Content-Type: application/json');


echo json_encode("Ya rab");

