<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');

require '../config.php';
require '../functions.php'; 


$request_method = $_SERVER['REQUEST_METHOD']; 

$data = json_decode(file_get_contents("php://input"));


if($request_method == "POST" ){

    try {
        
        if(isset($data->token)){
            if(check_token($conn_accounts,$data->token) == false){
                $data = [
                    "status" => "error",
                    "msg"    => "Token is invalid or expired"
                ];
                echo json_encode($data);
                return;
            }
        }else{
            $data = [
                "status" => "error",
                "msg"    => "Token is required"
            ];
            echo json_encode($data);
            return;
        }

        $products = "SELECT * FROM `product_categories` ";
        $products_stmt = $conn_inventory->prepare($products);
        $products_stmt->execute();

        if ($products_stmt->rowCount()){

            $categories_data = $products_stmt->fetchAll();
            $categories_list = [];
            foreach($categories_data as  $categoty){

                $categoty = [
                    'id'      => $categoty['id'],
                    'name'      => $categoty['name'],
                ];

                array_push($categories_list,$categoty);
            }


            $data = [
                "status"    => "success",
                "msg"       => 'data is  received',
                "categories_list" => $categories_list
            ];

            
        }else{
            $data = [
                "status" => "error",
                "msg"    => 'username or password is wrong'
            ];
        }
    } catch (PDOException $e) {
        $data = $e->getMessage();
    }






    


    echo json_encode($data);



}
