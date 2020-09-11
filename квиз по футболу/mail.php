<?php

$to         = 'kolotushkin_d@inbox.ru';
$subject    = 'Заявка с сайта квиза!!!';

$tel        = $_POST['tel'];
$kviz_1     = $_POST['kviz_value_1'];
$kviz_2     = $_POST['kviz_value_2'];
$kviz_3     = $_POST['kviz_value_3'];
$kviz_4     = $_POST['kviz_value_4'];

$message    = 'Телефон клиента: ' . $tel . "\r\n" . 'Ответы на вопросы: ' . "\r\n" . '1) ' . $kviz_1 . "\r\n" . '2) ' . $kviz_2 . "\r\n" . '3) ' . $kviz_3 . "\r\n" . '4) ' . $kviz_4;

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

mail($to, $subject, $message, implode("\r\n", $headers));

?>