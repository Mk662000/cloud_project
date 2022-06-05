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
    
    if(isset($data->username) && isset($data->password) &&
        !empty($data->username) && !empty($data->password)  ){
    
        try {
            $username = $data->username;
            $password = sha1($data->password);

            $login = "SELECT `id`, `name`,`username`,`email`,`phone`,`address` FROM `users` WHERE ( `email`=:username OR `username`=:username  ) AND  `password`=:password " ;
            $login_stmt = $conn_accounts->prepare($login);
            $login_stmt->bindValue(':username', $username, PDO::PARAM_STR);
            $login_stmt->bindValue(':password', $password, PDO::PARAM_STR);
            $login_stmt->execute();

            if ($login_stmt->rowCount()){

                $user_data = $login_stmt->fetch();

                $token = reg_token($conn_accounts,$user_data['id']);

                if( $token != false){

                    $user_data = [
                        'name'      => $user_data['name'],
                        'username'  => $user_data['username'],
                        'email'     => $user_data['email'],
                        'phone'     => $user_data['phone'],
                        'address'   => $user_data['address'],
                    ];
    
                    $data = [
                        "status"    => "success",
                        "msg"       => 'Logged in successfully',
                        "user_info" => $user_data,
                        "token"     => $token
                    ];
    
                }else{
                    $data = [
                        "status" => "error",
                        "msg"    => 'Can\'t register a new token'
                    ];
                }
            }else{
                $data = [
                    "status" => "error",
                    "msg"    => 'username or password is wrong'
                ];
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