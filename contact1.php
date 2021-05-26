<?php
 
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "helloxpart@gmail.com";
 
    $email_subject = $_POST['subject'];

    function died($error) {
 
        // your error code can go here
 
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
 
        echo "These errors appear below.<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "Please go back and fix these errors.<br /><br />";
 
        die();
 
    }

    // validation expected data exists
 
    if(!isset($_POST['name']) ||
 
        !isset($_POST['email']) || 
 
        !isset($_POST['comments'])) {
 
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
 
    }

    $field_name = $_POST['name']; // required
 
    $field_subject = $_POST['subject']; // required
 
    $email_from = $_POST['email']; // required
 
    $comments = $_POST['comments']; // required

    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
 
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
 
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$field_name)) {
 
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
 
  }
 

 
  if(strlen($comments) < 2) {
 
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
 
  }
 
  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
    $email_message .= " ".clean_string($comments)."\n";
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_message, $headers);  
 
?>
 
<!-- include your own success html here -->

Thank you for contacting us. We will be in touch with you very soon.
 <br><br>
<a class="btn btn-default" href="http://template.helloxpart.com/consult/consult/index-01.html" style="font-size:16px;color:#fff;background:#333;padding:6px 10px;text-decoration:none;border-radius:4px;font-weight:bold;"> Go Back To Home</a>
<?php
 
}
 
?>












