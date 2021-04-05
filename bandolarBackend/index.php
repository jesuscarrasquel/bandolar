<?php

include 'bd/BD.php';

header('Access-Control-Allow-Origin: *');

$method = $_SERVER['REQUEST_METHOD'];

// if($method=='POST' && !empty($_POST['username']) && !empty($_POST['lastname']) && !empty($_POST['email']) && !empty($_POST['phone']) && !empty($_POST['password']) && !empty($_POST['confirm_password']) && ($_POST['type'] == 'register')){

    if($method=='POST' && ($_POST['password'] == $_POST['confirm_password']) && ($_POST['type'] == 'register') && strlen($_POST['password']) >= 8)
    {
     
        unset($_POST['METHOD']);
        $username = $_POST['username'];
        $lastname = $_POST['lastname'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $password = $_POST['password'];
    
        $fila = (new Crud("users")) -> signup($username, $lastname, $email, $phone, $password);

        // echo $fila;

        if($fila == 1) {

                require 'PHPMailerAutoload.php';

                $mail = new PHPMailer;
        
                $mail->SMTPDebug = 0;                               // Enable verbose debug output
        
                $mail->isSMTP();                                      // Set mailer to use SMTP
                $mail->Host = '';  // Specify main and backup SMTP servers
                $mail->SMTPAuth = true;                               // Enable SMTP authentication
                $mail->Username = '';                 // SMTP username
                $mail->Password = '';                           // SMTP password
                $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
                $mail->Port = 587;                                    // TCP port to connect to
        
                $mail->setFrom('', 'Form Bandolar');
                $mail->addAddress('');     // Add a recipient
                // $mail->addAddress('ellen@example.com');               // Name is optional
                $mail->addReplyTo('');
                // $mail->addCC('cc@example.com');
                // $mail->addBCC('bcc@example.com');
        
                // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
                // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
                $mail->isHTML(true);                                  // Set email format to HTML
        
                $message = "Hay un nuevo usuario llamado " . $username ." ".$lastname." en https://www.bandolar.com, su correo es: " . $email . ', y este su teléfono ' . $phone;  
                $mail->Subject = 'Bandolar Form';
                $mail->Body    = $message;
                $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        
                if(!$mail->send()) {
                    echo 'Message could not be sent.';
                    echo 'Mailer Error: ' . $mail->ErrorInfo;
                } else {
                    echo 'OK';
                }
        
        
            
                // echo "OK";
                header("HTTP/1.1 200 OK");
                exit();

                // echo json_encode($fila);
            
        } else {
            echo $fila;
        }




    } elseif ($method=='POST' && ($_POST['password'] != $_POST['confirm_password']) && ($_POST['type'] == 'register')) {
        echo "Las contrseñas no coinciden.";
    } elseif ($method=='POST' && strlen($_POST['password']) < 8 && ($_POST['type'] == 'register') && !empty($_POST['password'])) {
        echo "La contraseña debe contener al menos 8 carácteres.";
    }


// } else {
//     echo "Todos los campos son requeridos.";
// }

if($method=='POST' && ($_POST['type'] == 'nombre')){

    // $session_start();

    // $varsesion = $_SESSION['usuario'];

    if($varsesion == null || $varsersion = '') {
        echo 'Usted no tiene autorización';
    }


    $email = $_POST['email'];

    $fila = new Crud("users");
    $nombre = $fila -> pedirNombre($email);

    // print_r($nombre[0][0]);
    echo json_encode($nombre);
    // echo $email;
 }


   
if($method=='POST' && ($_POST['type'] == 'login')){

    unset($_POST['METHOD']);

    $email = $_POST['email'];
    $password = $_POST['password'];


    session_start();
    $_SESSION['usuario'] = $email; 


    $fila = (new Crud("users")) -> login($email, $password);

    if(!empty($fila)){
        echo "bien";
    }else {
        echo("Error en la combinación entre usuario y contraseña");
    }

    header("HTTP/1.1 200 OK");
    exit();

} 

if($method=='POST' && ($_POST['type'] == 'check')){

    unset($_POST['METHOD']);

    $email = $_POST['email'];
   

    $fila = (new Crud("validacion")) -> check($email);

    if(!empty($fila)){
        echo "C";
    }else {
        echo("No está verificado.");
    }

    header("HTTP/1.1 200 OK");
    exit();

} 

if($method=='POST' && ($_POST['type'] == 'upload')){

    $email = $_POST['email'];
    $foto = $_FILES['foto']['name'];
    $ruta = $_FILES['foto']['tmp_name'];
    $destino = "fotos/".$email."-".$foto;
    copy($ruta,$destino);

    $foto2 = $_FILES['documento']['name'];
    $ruta2 = $_FILES['documento']['tmp_name'];
    $destino2 = "documentos/".$email."-".$foto2;
    copy($ruta2,$destino2);

    $fila = (new Crud("validacion")) -> validar($email);

    echo "OK";


} 

if($method=='POST' && ($_POST['type'] == 'payment')){

    $email = $_POST['email'];
    $foto = $_FILES['pago']['name'];
    $ruta = $_FILES['pago']['tmp_name'];
    $destino = "prueba/".$email."-".$foto;
    copy($ruta,$destino);

    echo "Estamos revisando tu pedido";


} 






  ?>  
