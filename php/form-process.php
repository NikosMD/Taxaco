<?php
$errorMSG = "";
// NAME
if (!empty($_POST["name"])) {
    $errorMSG = "Enter Name!";
} else {
    $name = $_POST["name"];
}
// SURNAME
if (!empty($_POST["surname"])) {
    $errorMSG = "Enter Surname!";
} else {
    $surname = $_POST["surname"];
}
// EMAIL
if (!empty($_POST["email"])) {
    $errorMSG .= "Enter email!";
} else {
    $email = $_POST["email"];
}
// PHONE
if (!empty($_POST["phone"])) {
    $errorMSG .= "Enter phone number!";
} else {
    $phone = $_POST["phone"];
}
$EmailTo = "nikos@taxaco.md";
$Subject = "Web Site Message";
// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Surname: ";
$Body .= $surname;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $phone;
$Body .= "\n";
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}
?>