import { db, firebase} from './init.js'

//firebaseのmessagesというコレクションの参照
const messagesRef = db.collection('messages')

const postMessage = (user, content) => {
    messagesRef.add({
        content,
        uid: user.uid,
        displayName: user.displayName,
        icon: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
}

const formatData = (doc) => {
    const message = {
        id: doc.id,
        ...doc.data()
    }
    
    if(message.timestamp === null) {
        message.timestamp = new Date(Date.now())
    } else {
        message.timestamp = message.timestamp.toDate()
    }
    return message
}

const setMessageListener = (added) => {
    messagesRef.orderBy('timestamp', 'asc').onSnapshot((querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
            switch(change.type){
                case 'added':
                    added(formatData(change.doc))
                    break
                case 'modified':
                    break
                case 'removed':
                    break
            }
        })
    })
}

export { postMessage , setMessageListener}