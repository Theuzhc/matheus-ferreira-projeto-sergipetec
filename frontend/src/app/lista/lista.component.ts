import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { catchError, empty, Observable } from 'rxjs';
import { ContribuintesService } from '../contribuintes.service';
import { Contribuinte } from './contribuintes';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'

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
  // modalRef?: BsModalRef;
  message?: string;

  contribuintes: Contribuinte[] | undefined;
  constructor(
    private service: ContribuintesService,
    // private modalService: BsModalService,
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

    // this.modalRef = this.modalService.show(template, {class: 'modal-sm'})
  }

  onRefresh() {
    window.location.reload();
  }

  confirm(): void {
    // this.message = 'Confirmed!';
    // this.modalRef?.hide();
  }

  decline(): void {
    // this.message = 'Declined!';
    // this.modalRef?.hide();
  }
}
