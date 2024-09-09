# FCM Push Notification Setup

## Overview

This guide will help you set up and test Firebase Cloud Messaging (FCM) push notifications with a backend server and a Flutter frontend. We'll also use Postman to simulate sending notifications.

---

## Backend Setup

1. **Install Node Version Manager (NVM)**

   Ensure you're using the correct Node version:

   ```bash
   nvm use 21
Install Backend Dependencies

After setting the Node version, install the necessary dependencies by running:

bash
Copy code
npm install
Start the Backend Server

Once the dependencies are installed, you can start the server:

bash
Copy code
npm start
Frontend Setup (Flutter)
Install Flutter Packages

Ensure all necessary Flutter packages are installed:

bash
Copy code
flutter pub get
Run the Flutter App

After installing the packages, start the Flutter app:

bash
Copy code
flutter run
Sending Notifications Using Postman
To send a push notification, follow these steps:

Open Postman and create a new POST request.

Use the following URL:

bash
Copy code
http://localhost:3000/send-notification
In the Body section, select raw and choose JSON as the format.

Copy the following JSON structure into the request body:

json
Copy code
{
  "token": "y4hvwaH13gwIo0oQzSne72vgJ_slPSpu_I967ioWXvNqDWz45R9bGMsoYDN9tjp36jk",
  "title": "Rohit rg Title",
  "message": "Rg Message"
}
Send the request, and the server will trigger a push notification to the specified token.

Example Push Notification Request
Endpoint: POST http://localhost:3000/send-notification

Request Body Example:

json
Copy code
{
  "token": "y4hvwaH13gwIo0oQzSne72vgJ_slPSpu_I967ioWXvNqDWz45R9bGMsoYDN9tjp36jk",
  "title": "Rohit rg Title",
  "message": "Giri Message"
}
Troubleshooting
Ensure the backend server is running before making the Postman request.
Double-check the token used in the JSON body. It should be a valid FCM token.
If you encounter any issues, check the terminal logs for detailed error messages.
