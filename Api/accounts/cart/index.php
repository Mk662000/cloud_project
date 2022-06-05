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

            $cart = "SELECT * FROM `cart` WHERE `user_id`=:user_id";
            $cart_stmt = $conn_accounts->prepare($cart);
            $cart_stmt->bindValue(':user_id',$id, PDO::PARAM_STR);
            $cart_stmt->execute();

            #check if the user has any products in the cart
            if ($cart_stmt->rowCount()){
               
                $cart = $cart_stmt->fetchAll();
                $cart_list = [];
                foreach($cart as  $product){
                    $row = get_product($conn_inventory,$product['product_id']);
                    $row['count'] = $product['count'];
                    array_push($cart_list,$row);
                }


                $data = [
                    "status"    => "success",
                    "msg"       => 'data is  received',
                    "cart_list" => $cart_list
                ];
            }else{
                $data = [
                    "status" => "error",
                    "msg"    => 'Cart not found'
                ];
                echo json_encode($data);
                return;
            }
        } catch (PDOException $e) {
            $data = $e->getMessage();
        }
    echo json_encode($data);
}
