<?php   
$name = $_POST['name'];
$tel = $_POST['tel'];
$kviz_1 = $_POST['kviz_value_1'];
$kviz_2 = $_POST['kviz_value_2'];
$kviz_3 = $_POST['kviz_value_3'];
$kviz_4 = $_POST['kviz_value_4'];
$kviz_5 = $_POST['kviz_value_5'];

$message = $name . '<br>' . $tel . '<br><br>' . $kviz_1 . '<br>' . $kviz_2 . '<br>' . $kviz_3 . '<br>' . $kviz_4 . '<br>' . $kviz_5;

$subject = "=?utF-8?B?".base64_encode("Заявка с сайта!")."?=";
$headers = "From:   Администратору\r\nReply-to:   $name\r\nContent-type: text/html; charset=utf-8\r\n";

$success = mail('mallinka316@gmail.com', $subject, $message, $headers);
echo $success;



?>