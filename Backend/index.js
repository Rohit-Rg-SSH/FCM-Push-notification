const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Initialize Firebase Admin SDK
// Replace 'path/to/serviceAccountKey.json' with the path to your Firebase service account key
const serviceAccount = require('/home/developer/Projects/Notification/node js notification sender/fcm-flutter-d61d8-8cccb885308d.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(bodyParser.json());

app.post('/send-notification', async (req, res) => {
  const { token, title, message } = req.body;

  if (!token || !title || !message) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  const notificationMessage = {
    notification: {
      title: title,
      body: message
    },
    token: token
  };

  try {
    const response = await admin.messaging().send(notificationMessage);
    console.log('Successfully sent message:', response);
    res.status(200).json({ success: true, message: 'Notification sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ success: false, error: 'Failed to send notification' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});