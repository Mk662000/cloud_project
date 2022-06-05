<?php
// $servername = "inventory_db";
$servername = "localhost";
$username = "root";
$password = "";

try {
  $conn_inventory = new PDO("mysql:host=$servername;dbname=inventory", $username, $password);
  // set the PDO error mode to exception
  $conn_inventory->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch(PDOException $e) {
   $e->getMessage();
}

// $servername = "accounts_db";
$servername = "localhost";
$username = "root";
$password = "";

try {
  $conn_accounts = new PDO("mysql:host=$servername;dbname=accounts", $username, $password);
  // set the PDO error mode to exception
  $conn_accounts->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch(PDOException $e) {
   $e->getMessage();
}

// $servername = "orders_db";
$servername = "localhost";
$username = "root";
$password = "";

try {
  $conn_orders = new PDO("mysql:host=$servername;dbname=orders", $username, $password);
  // set the PDO error mode to exception
  $conn_orders->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch(PDOException $e) {
   $e->getMessage();
}
?>