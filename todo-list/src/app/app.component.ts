import { Component, OnInit } from '@angular/core';
import { ListService } from './core/services/list/list.service';
import { Item } from './core/models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-list';
  itemList!: Item[];

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.getAllListItems();
  }

  getAllListItems(): void {
    this.listService.getAllListItems().subscribe({
      next: itens => {
        this.itemList = itens;
        this.itemList = this.itemList.sort(this.compareItems);
      },
      complete: () => {
        console.log(this.itemList);
      },
      error: e => {
        console.error('Erro ao buscar a lista completa de itens' ,e);
      }
    })
  }

  updateItem(item: Item): void {
    this.listService.updateItem(item.id as number, item). subscribe({
      next: () => {
        console.log(item);
      },
      complete: () => {
        this.itemList = [];
        this.getAllListItems();
      },
      error: e => {
        console.error(e);
      }
    });
  }

  createItem(title: string): void {
    const item = {
      title: title,
      ready: false
    };
    this.listService.createItem(item).subscribe({
      next: () => {
        console.log(item);
      },
      complete: () => {
        this.itemList = [];
        this.getAllListItems();
      },
      error: e => {
        console.error(e);
      }
    })
  }

  removeItem(id: number): void {
    this.listService.deleteItem(id).subscribe({
      next: () => {
        console.log('removed item id: ',id);
      },
      complete: () => {
        this.itemList = [];
        this.getAllListItems();
      },
      error: e => {
        console.error(e);
      }
    })
  }

  compareItems(a: Item, b: Item): number {
    if (a.ready && !b.ready) {
      return 1; // a comes after b
    } else if (!a.ready && b.ready) {
      return -1; // a comes before b
    } else {
      return 0; // no change in order
    }
  }

}
