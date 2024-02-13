import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from "./firebase-config.ts";

class Firestore {
    db;

    constructor(){
        const app = initializeApp(firebaseConfig);
        this.db = getFirestore(app);
    }

    async addWorkout(name: string) {
        try {
            const docRef = await addDoc(collection(this.db, "workouts"),
            {
                workoutName: name
            });
        } catch(e) {
            console.error("Error adding document: ", e);
        }
    }
    
    async deleteWorkout(){
        
    }
}