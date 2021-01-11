import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { locatii } from 'src/datamodel/locatii.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  Locatie: string;
  //Lista cu locatii
  locatii : locatii[] = [ {
    "Id" : 1,
    "Nume": "Hotel Ambient",
    "Locatie": "Brasov",
    "Pret": 200,
  },
  {
   "Id" : 2,
   "Nume": "Vila Lucky",
   "Locatie": "Brasov",
   "Pret": 100,
  },
  {
    "Id":8,
    "Nume": "Hotel Forum",
    "Locatie":"Ploiesti",
    "Pret":300
  },
  {
   "Id" : 5,
   "Nume": "Hotel Club Seva",
   "Locatie": "Ploiesti",
   "Pret": 150,
 }];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  //Functie cautare in lista de locatii.
  Search()
  {
    this.locatii = this.locatii.filter(res=>
      {
        return res.Locatie.toLocaleLowerCase().match(this.Locatie.toLocaleLowerCase());
      })
    
  }
  //Intoarcere la harta
  back(){
    this.router.navigateByUrl('/maps');
  }
}
