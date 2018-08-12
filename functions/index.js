const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = functions.config().sendgrid.key

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

exports.firestoreEmail = functions.firestore
    .document('users/{userId}/followers/{followerId}')
    .onCreate(event => {
        const userId = event.params.userId;
        const db = admin.firestore()
        return db.collection('users').doc(userId)
            .get()
            .then(doc => {
                const user = doc.data()
                const msg = {
                    to: user.email,
                    from: 'hello@angularfirebase.com',
                    subject: 'New Follower',

                    templateId: 'd-c5487352b4d94d1fa6a522c1fdd133e4',
                    substitutionWrappers: ['{{', '}}'],
                    substitutions: {
                        name: user.displayName
                    }
                };
                return sgMail.send(msg)
            })
            .then(() => console.log('email sent'))
            .catch(err => console.log(err))
    });