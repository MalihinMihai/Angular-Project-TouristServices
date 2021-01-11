import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  errors : string[] = ["Error: The email address is already in use by another account.",
  "Error: Password should be at least 6 characters.",
  "Error: The email address is badly formatted."];
  
  isSignedIn = false;
  constructor(public firebaseService : FirebaseService,public toastController: ToastController,private router: Router) { }

  ngOnInit() {
    //Daca userul este conectat atunci, isSignedIn = true.
    if(localStorage.getItem('user') !== null)
    {
      this.isSignedIn = true;
    }
    else
    {
      this.isSignedIn=false;
    }
  }

  //Functie register
  async register(email: string,password:string)
  {
   try{
    await this.firebaseService.signup(email,password);
    if(this.firebaseService.isLogin)
    {
      this.isSignedIn = true;
      this.router.navigateByUrl('/maps')

    }
   }
   catch(err)
   
   {
    err = err.toString();
    console.log(err);
    if(this.errors[0] == err)
    {
      this.presentToast_email();
    }if(this.errors[1] == err)
    {
      this.presentToast_parola();
    }if(this.errors[2] == err)
    {
      this.presentToast_email_wrong();
    }
  }
  }

  //Handle logout
  logout()
  {
    this.isSignedIn = false;
   
  }

   //Toast pentru diferite erori.
   async presentToast_email() {
    const toast = await this.toastController.create({
      message: 'Acest email este folosit de catre un alt cont.',
      duration: 2000
    });
    toast.present();
  }
  async presentToast_parola() {
    const toast = await this.toastController.create({
      message: 'Parola trebuie sa fie de minim 6 caractere',
      duration: 2000
    });
    toast.present();
  }
  async presentToast_email_wrong() {
    const toast = await this.toastController.create({
      message: 'Formatul adresei de email este gresit.',
      duration: 2000
    });
    toast.present();
  }

  goToLogin()
  {
    this.router.navigateByUrl('/login');
  }
   

}
