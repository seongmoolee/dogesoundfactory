<?php
    header("Pragma: no-cache");
    header("Cache-Control: no-cache,must-revalidate");
    header("Content-Type: application/json; charset=UTF-8");
    $servername = "";
    $user = "";
    $password = "";
    $dbname = "";
    
    if($_POST['dogesound'] && $_POST['name'] && $_POST['tokenid']){
        $json = json_encode(
            array(
                'dogesound'=> $_POST['dogesound'],
                'name'=> $_POST['name'],
                'tokenid'=> $_POST['tokenid'],
                'date'=>date("Y-m-d H:i:s", time()),
            )
        );
        echo $json;
        $connect = mysqli_connect($servername, $user, $password, $dbname);
        $sql = "INSERT INTO `dogesound` (`metadata`) VALUES('$json')";
        mysqli_query($connect, $sql);
        mysqli_close($connect);
    }
?>