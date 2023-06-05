import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {

  itemList = [
    'Dar banho no peixe',
    'levar a vó no karate',
    'enxugar o gelo'
  ]

}
