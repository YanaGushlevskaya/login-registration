import app from 'firebase/app';

let config = {
  apiKey: "AIzaSyBr8Bbeqwyz95E0EGE3AsAR6C3plqWBVjs",
  authDomain: "projectId.firebaseapp.com",
  databaseURL: "https://bakery-shop-6cf96.firebaseio.com",
  storageBucket: "bakery-shop-6cf96.appspot.com"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
 
export default Firebase;
