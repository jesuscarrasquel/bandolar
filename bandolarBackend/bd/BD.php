<?php

class Conectar {

    public function get_conection(){
        $user = "root";
        $pass = "";
        $host = "localhost";
        $db = "bandolardb";

        $url = "mysql:host=$host;dbname=$db;";

        try {

            $conection = new PDO($url,$user,$pass);
            return $conection;

        } catch (Exception $e) {

           echo $e -> getMessage();

        } 
    }
}


class Crud {

    protected $tabla;
    protected $conexion;
    protected $sql;


    public function __construct($tabla = null){
        $this -> conexion = (new Conectar()) -> get_conection();
        $this -> tabla = $tabla;
    }

    public function check($arg_email){
        
        $rows = null;
        $this -> sql = "SELECT * FROM {$this -> tabla} WHERE email = :email";
        $sth = ($this -> conexion) -> prepare($this -> sql);
        $sth -> bindValue(':email',$arg_email);
        $sth -> execute();
        
        while($result = $sth -> fetch()){
            $rows[] = $result;
        }

        return $rows;

    }

    public function login($arg_email, $arg_password){
        
        $rows = null;
        $this -> sql = "SELECT * FROM {$this -> tabla} WHERE email = :email AND password = :password";
        $sth = ($this -> conexion) -> prepare($this -> sql);
        $sth -> bindValue(':email',$arg_email);
        $sth -> bindValue(':password',$arg_password);
        $sth -> execute();
        
        while($result = $sth -> fetch()){
            $rows[] = $result;
        }

        return $rows;

    }

    public function signup($arg_username, $arg_lastname,$arg_email,$arg_phone, $arg_password){

        $this -> sql = "SELECT * FROM {$this -> tabla} WHERE email = :email";
        $sth = ($this -> conexion) -> prepare($this -> sql);
        $sth -> bindValue(':email', $arg_email);
        $sth -> execute();

        // while($result = $sth -> fetch()){
        //     $rows[] = $result;
        // }

        if($result = $sth -> fetch()) {

            return "Correo ya existente.";
        }

        // return $rows;
        else {


            $this -> sql = "INSERT INTO {$this -> tabla} (username,lastname, email, phone, password) VALUES (:username, :lastname,:email, :phone, :password)";
            $sth = ($this -> conexion) -> prepare($this -> sql);
            $sth -> bindValue(':username', $arg_username);
            $sth -> bindValue(':lastname', $arg_lastname);
            $sth -> bindValue(':email', $arg_email);
            $sth -> bindValue(':phone', $arg_phone);
            $sth -> bindValue(':password',$arg_password);
    
            $sth -> execute();
            $result = $sth -> fetch();

            return true;
        }






    }

    public function validar($arg_email){

        $arg_verificacion = "C";

        $this -> sql = "INSERT INTO {$this -> tabla} (email, verificacion) VALUES (:email, :verificacion)";
        $sth = ($this -> conexion) -> prepare($this -> sql);
   
        $sth -> bindValue(':email', $arg_email);
        $sth -> bindValue(':verificacion', $arg_verificacion);
 
        $sth -> execute();

        return true;

    }

    public function pedirNombre($arg_email) {
        $this -> sql = "SELECT username from {$this -> tabla} WHERE email = :email";
        // $res = ($this -> conexion) -> prepare($this -> sql);
        $sth = $this -> conexion;
        $res = $sth -> prepare($this -> sql);
        $res -> bindValue(':email', $arg_email);

        $res -> execute();

        while($result = $res -> fetch()){
            $rows[] = $result;
        }

        return $rows; 
    }




}

