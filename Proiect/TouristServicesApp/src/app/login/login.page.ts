import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  errors : string[] = [
  "Error: The password is invalid or the user does not have a password.",
  "Error: The email address is badly formatted.","Error: There is no user record corresponding to this identifier. The user may have been deleted."];
  isSignedIn = false;
  constructor(public afAuth: AngularFireAuth, private router: Router,public toastController: ToastController,public firebaseService : FirebaseService) {}

  ngOnInit() {
  }

  //Functie login
  async login(email: string,password:string)
  {
   try{
    await this.firebaseService.signin(email,password);
    if(this.firebaseService.isLogin)
    {
      this.isSignedIn = true;
      this.router.navigateByUrl('/maps')

    }
   }
   catch(err)
   
   {
    err = err.toString();
    
    if(this.errors[0] == err)
    {
      this.presentToast_parola();
    }if(this.errors[1] == err)
    {
      this.presentToast_email();
    }if(this.errors[2] == err)
    {
      this.presentToast_user_not_exist();
    }
  }
  }

  //Toast pentru click oriunde pe harta
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Apasa pe un marker disponibil pe harta.',
      duration: 2000
    });
    toast.present();
  }

  //Toast pentru diferite erori.
  async presentToast_parola() {
    const toast = await this.toastController.create({
      message: 'Parola este incorecta.',
      duration: 2000
    });
    toast.present();
  }
  async presentToast_email() {
    const toast = await this.toastController.create({
      message: 'Trebuie sa introduci un Email.',
      duration: 2000
    });
    toast.present();
  }
  async presentToast_user_not_exist() {
    const toast = await this.toastController.create({
      message: 'Utilizatorul nu exista',
      duration: 2000
    });
    toast.present();
  }

  //Catre pagina de register
  register()
  {
    this.router.navigateByUrl('/register');
  }

  logout()
  {
    this.isSignedIn = false;
   
  }
}
