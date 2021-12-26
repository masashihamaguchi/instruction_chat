import { db, firebase} from './firebase-init.js'

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

const deleteMessage = (id) => {
    messagesRef.doc(id).delete()
}

const updateMessage = (id, content) => {
    messagesRef.doc(id).update({content})
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

const setMessageListener = (added, modified, removed) => {
    messagesRef.orderBy('timestamp', 'asc').onSnapshot((querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
            switch(change.type){
                case 'added':
                    added(formatData(change.doc))
                    break
                case 'modified':
                    modified(formatData(change.doc))
                    break
                case 'removed':
                    removed(change.doc.id)
                    break
            }
        })
    })
}

export { postMessage , deleteMessage, updateMessage, setMessageListener}