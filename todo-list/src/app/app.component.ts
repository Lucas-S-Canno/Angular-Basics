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
      },
      complete: () => {
        console.log(this.itemList);
      },
      error: e => {
        console.error('Erro ao buscar a lista completa de itens' ,e);
      }
    })
  }
}
