<?php

// Include CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');


require '../../config.php';
// require 'functions.php';

$request_method = $_SERVER['REQUEST_METHOD']; // Check Server request method

$data = json_decode(file_get_contents("php://input"));


if($request_method == "POST" ){
    
    if(isset($data->name)     && isset($data->username) &&  
       isset($data->password) && isset($data->email)    && 
       isset($data->phone)    && isset($data->address) &&
       !empty($data->name)     && !empty($data->username) &&  
       !empty($data->password) && !empty($data->email)    && 
       !empty($data->phone)    && !empty($data->address) ){
    
        try {
            $name = $data->name;
            $username = $data->username;
            $password = $data->password;
            $email = $data->email;
            $phone = $data->phone;
            $address = $data->address;

            $check_email = "SELECT `email` FROM `users` WHERE `email`=:email";
            $check_email_stmt = $conn_accounts->prepare($check_email);
            $check_email_stmt->bindValue(':email', $email, PDO::PARAM_STR);
            $check_email_stmt->execute();

            if ($check_email_stmt->rowCount()){
                $data = [
                    "status" => "error",
                    "msg"    => 'This E-mail already in use!'
                ];

            }else{
                $insert_query = "INSERT INTO `users`(`name`,`username`,`password`,`email`,`phone`,`address`) VALUES(:name,:username,:password,:email,:phone,:address)";

                $insert_stmt = $conn_accounts->prepare($insert_query);

                // DATA BINDING
                $insert_stmt->bindValue(':name', $name, PDO::PARAM_STR);
                $insert_stmt->bindValue(':username', $username, PDO::PARAM_STR);
                $insert_stmt->bindValue(':password', sha1($password), PDO::PARAM_STR);
                $insert_stmt->bindValue(':email', $email, PDO::PARAM_STR);
                $insert_stmt->bindValue(':phone', $phone, PDO::PARAM_STR);
                $insert_stmt->bindValue(':address', $address, PDO::PARAM_STR);

                $insert_stmt->execute();

                $data = [
                            "status" => "success",
                            "msg"    => 'You have successfully registered'
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
