import { Component, OnInit } from '@angular/core';
import { Dish } from './shared/Dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = [
    {
      id: '0',
      name: 'Pizaa',
      image: '/assets/images/images/pizza.png',
      category: 'Food',
      feature: false,
      label: 'This is Pizza',
      price: '50 RON',
      description: 'Very good Pizza'
    },

    {
      id: '1',
      name: 'Prajitura',
      image: '/assets/images/images/elaicheesecake.png',
      category: 'Food',
      feature: false,
      label: 'This is Prajitura',
      price: '50 RON',
      description: 'Very good Prajitura'
    }


  ];
  constructor() { }

  ngOnInit(): void {
  }

}
