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

    if(isset($data->cat_id)  ){
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


        $cat_id=$data->cat_id;
        $products = "SELECT * FROM `products` where `cat_id` = :cat_id ";
        $products_stmt = $conn_inventory->prepare($products);
        $products_stmt->bindValue(':cat_id',$cat_id, PDO::PARAM_STR);
        $products_stmt->execute();
        

        if ($products_stmt->rowCount()){

            $product_data = $products_stmt->fetchAll();
            $product_list = [];
            foreach($product_data as  $product){

                $product = [
                    'id'      => $product['id'],
                    'name'      => $product['name'],
                    'price'  => $product['price'],
                    'desc'     => $product['description'],
                    'img'     => isset($_SERVER['HTTPS']) ? 'https://' : 'http://' .  $_SERVER['HTTP_HOST'] ."/uploads/".$product['img'],
                    'count'   => $product['count'],
                    'rating'   => $product['rating'],
                    'cat_name'   =>    get_category($conn_inventory,$product['cat_id'])['cat_name'],
                    'category'   =>    get_category($conn_inventory,$product['cat_id'])['cat_id'],       
                ];

                array_push($product_list,$product);
            }


            $data = [
                "status"    => "success",
                "msg"       => 'data is  received',
                "cat_name"       => get_category($conn_inventory,$cat_id)['cat_name'],
                "product_list" => $product_list
            ];

        }else{
            $data = [
                "status" => "error",
                "msg"    => 'no data found'
            ];
        }
    } catch (PDOException $e) {
        $data = $e->getMessage();
    }


    }else{
        $data = [
            "status" => "error",
            "msg"    => "cat_id is required"
        ];
    }
    echo json_encode($data);

}
