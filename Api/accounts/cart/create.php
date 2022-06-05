<?php

// Include CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');


require '../../config.php';
require '../../functions.php';

$request_method = $_SERVER['REQUEST_METHOD']; // Check Server request method

$data = json_decode(file_get_contents("php://input"));


if($request_method == "POST" ){
    
    if(isset($data->products)){
    
        try {

            if(isset($data->token)){
                if(check_token($conn_accounts,$data->token) == false){
                    $data = [
                        "status" => "error",
                        "msg"    => "Token is invalid or expired"
                    ];
                    echo json_encode($data);
                    return;
                }else{
                    $id = check_token($conn_accounts,$data->token);
                }
            }else{
                $data = [
                    "status" => "error",
                    "msg"    => "Token is required"
                ];
                echo json_encode($data);
                return;
            }

            # loop insert orders
            foreach($data->products as $product){ 
                $products = "INSERT INTO `cart` (`user_id`, `product_id`, `count`) VALUES (:user_id, :product_id, :count)";
                $products_stmt = $conn_accounts->prepare($products);
                $products_stmt->bindValue(':user_id',$id, PDO::PARAM_STR);
                $products_stmt->bindValue(':product_id',$product->product_id, PDO::PARAM_STR);
                $products_stmt->bindValue(':count',$product->count, PDO::PARAM_STR);
                $products_stmt->execute();
            }

            #check if order is inserted
            if ($products_stmt->rowCount()){
                $data = [
                    "status" => "success",
                    "msg"    => 'added to cart successfully'
                ];
                echo json_encode($data);
                return;
            }else{
                $data = [
                    "status" => "error",
                    "msg"    => 'error adding to cart'
                ];
                echo json_encode($data);
                return;
            }
        } catch (PDOException $e) {
            $data = $e->getMessage();
        }
    }else{
        $data = [
            "status" => "error",
            "msg"    => "please enter all columns"
        ];
    }
    echo json_encode($data);
}
