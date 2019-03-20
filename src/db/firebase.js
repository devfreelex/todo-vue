
import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyCLuU0UespEpwtJdJYmXj5tGqPxBYa-Gbo",
    authDomain: "task-manager-f8121.firebaseapp.com",
    databaseURL: "https://task-manager-f8121.firebaseio.com",
    projectId: "task-manager-f8121",
    storageBucket: "task-manager-f8121.appspot.com",
    messagingSenderId: "1081222848973"
  });

  export const db = app.database();

  export const configRef = () => {
    return db.ref('tasks');
  }
