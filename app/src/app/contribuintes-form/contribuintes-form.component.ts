import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContribuintesService } from '../contribuintes.service';


@Component({
  selector: 'app-contribuintes-form',
  templateUrl: './contribuintes-form.component.html',
  styleUrls: ['./contribuintes-form.component.css']
})
export class ContribuintesFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: ContribuintesService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.minLength(5)]],
      cpf: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(11)]],
      telefone: [null],
      celular: [null, [Validators.required, Validators.minLength(3)]],
      endereco: {
        rua: [null],
        numero: [null],
        bairro: [null],
        cidade: [null],
        cep: [null],
        estado: [null],
        pais: [null]
      }
    });
  }

  hasError(field: string){
    
    return this.form?.get(field)?.errors;
  }

  onSubmit(){
    
    this.submitted = true;
    
    if(this.form?.valid){
      console.log('válido');
      this.service.criar(this.form.value).subscribe({
        complete: () => console.log('completo'),
        error: (error) => console.log(error)
        
         
       }
   
        
        
        
      );
    }
  }

  onCancel(){
    this.submitted = false;
    this.form?.reset();
  }

}
