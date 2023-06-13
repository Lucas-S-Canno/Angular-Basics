import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../core/models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  @Output()
  itemUpdate = new EventEmitter<Item>;

  @Output()
  idToDelete = new EventEmitter<number>;

  @Input()
  itemList: Item[] = []

  changeItemReady(item: Item): Item {
    item.ready = !item.ready;
    return item;
  }

  emitItem(item: Item): void {
    item = this.changeItemReady(item);
    this.itemUpdate.emit(item);
  }

  emitId(item: Item): void {
    this.idToDelete.emit(item.id);
  }

}
