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

    if(isset($data->id)  ){
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

        $id=$data->id;
        $products = "SELECT * FROM `products` where `id` = :id ";
        
        $products_stmt = $conn_inventory->prepare($products);
        $products_stmt->bindValue(':id',$id, PDO::PARAM_STR);
        $products_stmt->execute();
        

        if ($products_stmt->rowCount()){

            $product_data = $products_stmt->fetch();
            $product_data = [
                'id'      => $product_data['id'],
                'name'      => $product_data['name'],
                'price'  => $product_data['price'],
                'desc'     => $product_data['description'],
                'img'     => isset($_SERVER['HTTPS']) ? 'https://' : 'http://' .  $_SERVER['HTTP_HOST'] ."/uploads/".$product_data['img'],
                'count'   => $product_data['count'],
                'rating'   => $product_data['rating'],
                'cat_name'   =>    get_category($conn_inventory,$product_data['cat_id'])['cat_name'],
                'category'   =>    get_category($conn_inventory,$product_data['cat_id'])['cat_id'],        
            ];

            $data = [
                "status"    => "success",
                "msg"       => 'product found',
                "product_info" => $product_data
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
            "msg"    => "id is required"
        ];
    }
    echo json_encode($data);

}
