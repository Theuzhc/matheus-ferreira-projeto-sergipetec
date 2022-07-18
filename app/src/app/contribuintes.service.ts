import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Contribuinte } from './lista/contribuintes';

@Injectable({
  providedIn: 'root'
})
export class ContribuintesService {

  private readonly API = "http://localhost:3000/contribuintes";

  constructor(private http:HttpClient ) { }

  listar() {
    return this.http.get<Contribuinte[]>(this.API)
  }
}
