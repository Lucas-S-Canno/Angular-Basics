import { Component } from '@angular/core';
import { Item } from '../core/models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {

  itemList: Item[] = [
    {
      title: 'Dar banho no peixe',
      ready: false
    },
    {
      title: 'levar a vó no karate',
      ready: false
    },
    {
      title: 'enxugar o gelo',
      ready: true
    }
  ]

  changeItemReady(item: Item): void {
    item.ready = !item.ready;
  }

}
