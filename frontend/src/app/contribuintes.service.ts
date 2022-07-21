import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Contribuinte } from './lista/contribuintes';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContribuintesService {

  private readonly API = "http://localhost:3000/contribuintes";

  constructor(private http:HttpClient ) { }

  listar() {
    return this.http.get<Contribuinte[]>(this.API)
  }

  editarId(id: Number){
    return this.http.get(`${this.API}/${id}`).pipe(take(1))
  }

  criar( contribuinte: any) {
    return this.http.post(this.API, contribuinte).pipe(take(1))
  }

  update(contribuinte : any){
    return this.http.put(`${this.API}/${contribuinte.id}`, contribuinte).pipe(take(1))
  }

  remove(id : Number) {
    console.log('apagar');
    
    return this.http.delete(`${this.API}/${id}`).pipe(take(1))
  }
}
