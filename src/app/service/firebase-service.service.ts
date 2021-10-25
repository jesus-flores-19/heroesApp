import { Injectable } from '@angular/core';
import { firestore } from 'firebase-admin';
import { initializeApp, } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, setDoc, DocumentReference, deleteDoc} from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root'
})


export class FirebaseServiceService {

  firebaseConfig = {
    apiKey: "AIzaSyCAAYFxJH2DMRKm34xf5qlDcqHpkEHyZgA",
    authDomain: "crud-proyect-1.firebaseapp.com",
    projectId: "crud-proyect-1",
    storageBucket: "crud-proyect-1.appspot.com",
    messagingSenderId: "766616942496",
    appId: "1:766616942496:web:03ee72bec3477e380c96c5"
  };
  
  // Initialize Firebase
  app: any;
  db: any;

  constructor() {
   this.app = initializeApp(this.firebaseConfig);
   this.db = getFirestore(this.app);
   }

  //  async obtenerHeros(){
  //   const citiesCol = collection(this.db, 'heroes');
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());
  //   // this.agregarDato()
  //   return cityList;
    
  //  }
  //  async updateDoc(){
  //    const heroes = collection(this.db, "heroes");
  //    let doumento = doc(heroes, "BS2LBdFY352WjnOy6Tqm")
  //    const heroe= {
  //     nombre: "Jesus",
  //     poder: "venosos"
  //   }
  //    await updateDoc(doumento,heroe)
  //   // console.log(doumento);
    
  //  }
  //  async eliminarDoc(){
  //   const heroes = collection(this.db, "heroes");
  //    let documento = doc(heroes, "BS2LBdFY352WjnOy6Tqm")
  //    await deleteDoc(documento)
  //  }

   async agregarDato(heroe: any){
     const heroes = collection(this.db, "heroes");
     const heroe_2 = {
      nombre: heroe.nombre,
      poder: heroe.poder,
      vivo: heroe.vivo
     }
     return await addDoc(heroes, heroe_2)
   }
}
