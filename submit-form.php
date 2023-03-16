<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  // Replace the URL with your Google Form URL
  $googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdVeG5jZdKPf0UCT0Zw7-QLYGk76fDsgSh8-LmbaSqWGpx3ug/viewform?usp=sf_link";
  
  $data = [
    "entry.1234567890" => $name,
    "entry.2345678901" => $email,
    "entry.3456789012" => $message,
  ];

  $queryString = http_build_query($data);
  $url = "$googleFormUrl?$queryString";
  
  $response = file_get_contents($url);
  if ($response !== false) {
    echo "Thank you for your message!";
  } else {
    echo "Oops, something went wrong. Please try again later.";
  }
}
?>
