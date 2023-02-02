const serviceAccount = require('./service.json')
const { initializeApp, cert } = require('firebase-admin/app')
const { getMessaging } = require('firebase-admin/messaging')

initializeApp({
  credential: cert(serviceAccount)
})

getMessaging()
  .send({
    topic: 'topic',
    notification: {
      title: 'title',
      body: 'body'
    }
  })
  .then(console.log)