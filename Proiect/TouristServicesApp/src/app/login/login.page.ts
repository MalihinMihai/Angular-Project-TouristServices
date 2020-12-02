import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = "";
  parola: string = "";

  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
  }

  async login()
  {
    const {email,parola} = this;
    try
    {
      const res = await this.afAuth.signInWithEmailAndPassword(email,parola);
      this.router.navigateByUrl('/maps');
      console.log("Succes");

    }
    catch(err)
    {
      console.dir(err);
      if(err.code == "Utilizator incorect")
      {
        console.log("Utilizator incorect");
      }
    }
  }

}
