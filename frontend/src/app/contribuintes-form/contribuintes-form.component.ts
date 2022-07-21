import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ContribuintesService } from '../contribuintes.service';
import { Contribuinte } from '../lista/contribuintes';

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
  selector: 'app-contribuintes-form',
  templateUrl: './contribuintes-form.component.html',
  styleUrls: ['./contribuintes-form.component.css'],
})
export class ContribuintesFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: ContribuintesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap((id) => this.service.editarId(id ? id : ''))
        // switchMap((contribuinte) => this.service.obterEnderecos(id))
      )
      .subscribe((contribuinte) => this.updateForm(contribuinte));

    this.form = this.fb.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.minLength(5)]],
      cpf: [
        null,
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      telefone: [null],
      celular: [null, [Validators.required, Validators.minLength(9)]],
      endereco: {
        rua: [null],
        numero: [null],
        bairro: [null],
        cidade: [null],
        cep: [null],
        estado: [null],
        pais: [null],
      },
    });
  }

  updateForm(contribuinte: any) {
    this.form.patchValue({
      id: contribuinte.id,
      nome: contribuinte.nome,
      cpf: contribuinte.cpf,
      celular: contribuinte.celular,
      email: contribuinte.email,
      telefone: contribuinte.telefone,
      enderecos: contribuinte.enderecos,
    });
  }

  hasError(field: string) {
    return this.form?.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form?.valid) {
      if (this.form.value.id) {
        this.service.update(this.form.value).subscribe({
          complete: () => this.router.navigate(['']),
          error: (error) => console.log(error),
        });
      } else {
        this.service.criar(this.form.value).subscribe({
          complete: () => this.router.navigate(['']),
          error: (error) => console.log(error),
        });
      }
    }
  }

  onCancel() {
    this.submitted = false;
    this.form?.reset();
    this.router.navigate([''], { relativeTo: this.route });
  }
}
