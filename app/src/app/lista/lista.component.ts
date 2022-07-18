import { Component, OnInit } from '@angular/core';
import { ContribuintesService } from '../contribuintes.service';
import { Contribuinte } from './contribuintes';

export interface Endereco {
  rua: String,
  numero: Number,
  bairro: String,
  cidade: String,
  cep: Number,
  estado: String,
  pais: String,
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  
  contribuintes: Contribuinte[] | undefined;
  constructor(private service: ContribuintesService) { }
 
  ngOnInit(): void {
    this.service.listar().
    subscribe(dados => this.contribuintes = dados);
  }


}
