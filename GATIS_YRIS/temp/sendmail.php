<?php
  $to = "ruwn@gmx.de";
  $title = $_REQUEST['title'] ;
  $fname = $_REQUEST['fname'] ;
  $lname = $_REQUEST['lname'] ;
  $email = $_REQUEST['email'] ;
  $affil = $_REQUEST['affil'] ;
  $visa = $_REQUEST['visa'] ;
  $address = $_REQUEST['address'] ;
  $diet = $_REQUEST['diet'] ;
  $message = $_REQUEST['message'] ;
  $headers = "ruwn@gmx.de";
  $body = "From: $title $fname $lname \n\n Email: $email \n\n Affiliation: $affil \n\n Visa: $visa \n\n Address: $address \n\n Special: $diet \n\n Message: $message";
  $sent = mail($to, $subject, $body, $headers) ;
  if($sent)
    {echo "<script language=javascript>window.location = 'http://community.dur.ac.uk/gatis.summerschool/thanks.htm';</script>";}
  else
    {echo "<script language=javascript>window.location = 'error';</script>";}
?>
