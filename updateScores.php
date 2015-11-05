<?php

    $scores = $_GET['scores'];
    
    file_put_contents($_SERVER['DOCUMENT_ROOT'].'scores2.txt',$scores);
    //$myFile = fopen($_SERVER['DOCUMENT_ROOT'].'scores2.txt', 'w') or die("Unable to open file!");
    //fwrite($myFile, $scores);
    //fclose($myFile);
    
    //print"$scores";
    
    //header("Location: index.html");
    
?>