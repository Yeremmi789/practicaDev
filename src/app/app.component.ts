import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'practicaDev';
  
  // form:FormGroup = new FormGroup({});
  

  variable1 = 0;
  variable2 = 0;
  resultado = 0;


  // constructor(private fb: FormBuilder) {
  //   this.crearFormulario();
  // }

  form!: FormGroup; // Asegúrate de que está definida como un FormGroup

  

  constructor(private fb: FormBuilder) {
    this.form = new FormGroup({
      variable1: new FormControl(null, [Validators.required, Validators.min(0)]),
      variable2: new FormControl(null, [Validators.required, Validators.min(0)]),
    });
  }

  ngOnInit(): void {}

  crearFormulario() {
    this.form = this.fb.group({
      variable1: [null, [Validators.required, Validators.min(0)]],
      variable2: [null, [Validators.required, Validators.min(0)]],
    });
  }
  

  operacionRealizada: string = '';

realizarOperacion(operacion: string) {
  if (this.form.valid) {
    this.variable1 = this.form.value.variable1;
    this.variable2 = this.form.value.variable2;

    switch (operacion) {
      case 'SUMAR':
        this.resultado = this.variable1 + this.variable2;
        this.operacionRealizada = 'SUMAR';
        break;
      case 'RESTAR':
        this.resultado = this.variable1 - this.variable2;
        this.operacionRealizada = 'RESTAR';
        break;
      case 'MULTIPLICAR':
        this.resultado = this.variable1 * this.variable2;
        this.operacionRealizada = 'MULTIPLICAR';
        break;
      case 'DIVIDIR':
        if (this.variable2 === 0) {
          this.resultado = 0;
        } else {
          this.resultado = this.variable1 / this.variable2;
        }
        this.operacionRealizada = 'DIVIDIR';
        break;
      default:
        break;
    }
  }
}

}
