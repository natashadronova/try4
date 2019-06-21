const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotifivation=(notification=>{
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc=> console.log('notification added',doc));
})

exports.projectCreated = functions.firestore
  .document('orders/{orderId}')
  .onCreate(doc=> {
    const order=doc.data();
    const notification = {
      content:'Added a new project',
      user: `${order.authorFirstName} ${order.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotifivation(notification);
})


exports.userJoined=functions.auth.user()
.onCreate(user =>{
  return admin.firestore().collection('users')
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser=doc.data();
      const notification={
        content:'Joined the application',
        user: `${newUser.FirstName} ${newUser.LastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()

      }

      return createNotifivation(notification);

    })
})

