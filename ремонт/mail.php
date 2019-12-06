<?php 
   $name = $_POST['name_form'];
   $tel = $_POST['tel_form'];

   $message = $name . '<br>' . $tel;

   $subject = "=?utF-8?B?".base64_encode("Заявка с сайта!")."?=";
   $headers = "From:   Администратору\r\nReply-to:   $name\r\nContent-type: text/html; charset=utf-8\r\n";

   $success = mail('mallinka316@gmail.com', $subject, $message, $headers);
   echo $success;
?>