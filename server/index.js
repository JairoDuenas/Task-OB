const express = require("express");
const cors = require("cors");
const webpush = require("web-push");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const vapidKeys = {
  "publicKey": "BGEJQoN0REiZ__kh7SR3MWGUUEFc3mRQ2ACg692N_dUGKqO53S46iXDUNt56Jr9wZQpBaDMi7g4s5-3JeHOlkfI",
  "privateKey": "M6dGcUgytP7Tq5gCnCqELoYXCLzaJb30w48oM_BCMYc"
}

webpush.setVapidDetails(
  'mailto:jairo@example.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const subscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/efyBy3AWGp4:APA91bGnflmHg3t4foY9zThlLPwRLL7oqzzJUYHdH1ESgA12JGJwu6obQvHRdoc2R06KPoltvJjVIuuSjhXw4gdqB3Hee-MqZKyswmhAX-MAvu1WdCRkYoyiIq2PqSju0RQuUDHp0dHO',
  expirationTime: null,
  keys: {
    p256dh: 'BPblf_je6amQYoNTIPH1s6sPdY2zQTFS8n4qK2DkMfQ5gHph56HwgN32UgW7h8eqBpkLxYhkjed_XW_UEBbZgDE',
    auth: '-W4E-bToCTTLvKDeZkz03g'
  }
}

app.get('/', (req, res) => {
  const payload = JSON.stringify(
    {
      title: "Server notification",
      message: "Esta es una notificación que llega desde el servidor"
    }
  );
  webpush.sendNotification(subscription, payload)
  res.send("Todo ok, funcionando correctamente");
});

app.post('/custom-notification', (req, res) => {
  const { title, message } = req.body;
  console.log(req.body);
  const payload = JSON.stringify({ title, message });
  webpush.sendNotification(subscription, payload);
  res.send("Todo ok, custom notification enviado");
})

app.post('/subscription', (req, res) => {
  const { pushSubscription } = req.body;
  console.log(pushSubscription);
  res.sendStatus(200);
})

const port = 8000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
