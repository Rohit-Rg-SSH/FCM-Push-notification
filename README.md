# 🚀 FCM Push Notification Setup Guide

## 📚 Overview

This guide will walk you through setting up and testing Firebase Cloud Messaging (FCM) push notifications with a backend server and a Flutter frontend. We'll also use Postman to simulate sending notifications.

---

## 🖥️ Backend Setup

### 1. Install Node Version Manager (NVM)

Ensure you're using the correct Node version:

```bash
nvm use 21
```

### 2. Install Backend Dependencies

After setting the Node version, install the necessary dependencies:

```bash
npm install
```

### 3. Start the Backend Server

Once the dependencies are installed, start the server:

```bash
node index.js
```

---

## 📱 Frontend Setup (Flutter)

### 1. Install Flutter Packages

Ensure all necessary Flutter packages are installed:

```bash
flutter pub get
```

### 2. Run the Flutter App

After installing the packages, start the Flutter app:

```bash
flutter run
```

---

## 📬 Sending Notifications Using Postman

To send a push notification, follow these steps:

1. Open Postman and create a new POST request.
2. Use the following URL:
   ```
   http://localhost:3000/send-notification
   ```
3. In the Body section, select `raw` and choose `JSON` as the format.
4. Copy the following JSON structure into the request body:

   ```json
   {
     "token": "y4hvwaH13gwIo0oQzSne72vgJ_slPSpu_I967ioWXvNqDWz45R9bGMsoYDN9tjp36jk",
     "title": "Rohit rg Title",
     "message": "Rg Message"
   }
   ```

5. Send the request, and the server will trigger a push notification to the specified token.

### Example Push Notification Request

**Endpoint:** `POST http://localhost:3000/send-notification`

**Request Body Example:**

```json
{
  "token": "y4hvwaH13gwIo0oQzSne72vgJ_slPSpu_I967ioWXvNqDWz45R9bGMsoYDN9tjp36jk",
  "title": "Rohit rg Title",
  "message": "Giri Message"
}
```

---

## 🛠️ Troubleshooting

- Ensure the backend server is running before making the Postman request.
- Double-check the token used in the JSON body. It should be a valid FCM token.
- If you encounter any issues, check the terminal logs for detailed error messages.

---
