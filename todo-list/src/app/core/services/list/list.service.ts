import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../models/item';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  BASE_URL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAllListItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.BASE_URL}/todo-list`)
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.BASE_URL}/todo-list`, item)
  }

  updateItem(id: number, item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.BASE_URL}/todo-list/${id}`, item)
  }

  deleteItem(id: number): Observable<Item> {
    return this.http.delete<Item>(`${this.BASE_URL}/todo-list/${id}`)
  }

}
