<?

$name   = $_POST['name'];
$tel    = $_POST['tel'];
$email  = $_POST['email'];

$message = $name . "\r\n" . $tel . "\r\n" . $email . "\r\n";

mail('kolotushkin_d@inbox.ru', 'Заявка с сайта!', $message);

?>