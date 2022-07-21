import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContribuintesService } from '../contribuintes.service';
import { Contribuinte } from './contribuintes';

export interface Endereco {
  rua: String;
  numero: Number;
  bairro: String;
  cidade: String;
  cep: Number;
  estado: String;
  pais: String;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  message?: string;

  contribuintes: Contribuinte[] | undefined;
  constructor(
    private service: ContribuintesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  contribuinte$: Observable<Contribuinte[]> | undefined;

  ngOnInit(): void {
    this.contribuinte$ = this.service.listar();
  }

  onEdit(id: Number) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onRemove(id: any) {
    this.service.remove(id).subscribe({
      complete: () => {
        console.log('completo');
        this.onRefresh();
      },
      error: (error) => console.log(error),
    });

  }

  onRefresh() {
    window.location.reload();
  }

}
