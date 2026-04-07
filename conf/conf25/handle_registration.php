<?php
// handle_registration.php

// 1. Access form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $display_on_website = isset($_POST["display_on_website"]) ? "yes" : "no";
    $human_check = $_POST["human_check"];

    // 2. Validate data
    $errors = array();

    if (empty($name)) {
        $errors[] = "Name is required.";
    }
    if (empty($email)) {
        $errors[] = "Email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }
    if (empty($human_check)) {
        $errors[] = "Human check is required.";
    } elseif ($human_check != "9") {
        $errors[] = "Incorrect answer to the human check question.";
    }

    if (!empty($errors)) {
        // Output errors and stop execution
        foreach ($errors as $error) {
            echo "<p style='color:red;'>$error</p>"; // Simple error display, consider better UI
        }
        exit;
    }

    // 3. Connect to database (Replace with your actual database credentials)
    $servername = "localhost";
    $username = "your_db_user";
    $password = "your_db_password";
    $dbname = "your_database_name";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // 4. Store data in database
    $sql = "INSERT INTO registrations (name, email, message, display_on_website) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
     if ($stmt === false) {
        die("Error preparing statement: " . $conn->error);
    }
    $stmt->bind_param("ssss", $name, $email, $message, $display_on_website);

    if ($stmt->execute()) {
        $registration_id = $stmt->insert_id;
        echo "New record created successfully. Registration ID: " . $registration_id . "<br>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
        exit;
    }
    $stmt->close();

    // 5. Send confirmation email
    $to = $email;
    $subject = "Workshop Registration Confirmation";
    $email_message = "Dear " . $name . ",\n\nThank you for registering for the workshop!\n\nWe look forward to seeing you there.\n\nBest regards,\nThe Workshop Team";
    $headers = "From: workshop@example.com";

    if (mail($to, $subject, $email_message, $headers)) {
        echo "Confirmation email sent to " . $email . "<br>";
    } else {
        echo "Failed to send confirmation email.<br>";
    }

    // 6. Send email to workshop organizer
    $organizer_email = "organizer@example.com";  // Change this
    $organizer_subject = "New Workshop Registration";
    $organizer_message = "A new participant has registered:\n\nName: " . $name . "\nEmail: " . $email . "\nMessage: " . $message . "\nDisplay on Website: " . $display_on_website;
    $organizer_headers = "From: registrations@example.com"; // Change this

    if (mail($organizer_email, $organizer_subject, $organizer_message, $organizer_headers)) {
        echo "Notification email sent to organizer.<br>";
    } else {
        echo "Failed to send notification email to organizer.<br>";
    }

    // 7. Send response to the browser
    echo "Thank you for registering!";
    // header("Location: registration_confirmation.html");
    exit;

} else {
    echo "Invalid request.";
}
?>

