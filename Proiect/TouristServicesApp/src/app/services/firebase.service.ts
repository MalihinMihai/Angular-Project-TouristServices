import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLogin = false;

  constructor(public firebaseAuth : AngularFireAuth) { }
  //Metoda login
  async signin(email: string,parola:string)
  {
    await this.firebaseAuth.signInWithEmailAndPassword(email,parola).then(res=>{
      this.isLogin=true;
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }

  //Metoda SIGNUP
  async signup(email: string,parola:string)
  {
    await this.firebaseAuth.createUserWithEmailAndPassword(email,parola).then(res=>{
      this.isLogin=true;
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }


  //Metoda handle logout

  logout()
  {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user');
  }
}
