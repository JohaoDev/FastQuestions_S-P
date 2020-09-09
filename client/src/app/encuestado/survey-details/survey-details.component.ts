import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { CrudService } from '../../servicios/crud.service';
import { WebServiceService } from '../../servicios/web-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'survey-details-cliente',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.scss'],
})
export class SurveyDetailsComponent implements OnInit {
  respuestasEncuestaForm: FormGroup;

  private url: string;
  preguntas: Array<any> = [];
  counter: number = 1;
  code: Array<number> = [];

  constructor(
    private fb: FormBuilder,
    private servidor: WebServiceService,
    private http: HttpClient
  ) {
    this.url = servidor.obtenerUrl();
  }

  ngOnInit(): void {
    this.getDatosEncuesta();

    this.respuestasEncuestaForm = this.fb.group({
      usuario: [localStorage.getItem('encuestaID')],
      respuestas: this.fb.array([]),
    });
  }

  getDatosEncuesta(): void {
    let id = localStorage.getItem('encuestaID');

    this.http
      .get(
        `${this.url}get_idencuestas?id=${id}`,
        this.servidor.obtenerHeaders()
      )
      .subscribe((data: any) => {
        this.preguntas = data.data[0].contenido;
        console.log(this.preguntas);
      });
  }

  onChange(pregunta: any, opcionSeleccionada: any) {
    const respuestasEncuestaFormArray = <FormArray>(
      this.respuestasEncuestaForm.controls.respuestas
    );

    let respuestas = this.respuestasEncuestaForm.get('respuestas').value,
      counter: number = 1;

    if (respuestas.length == 0 && this.code.length == 0) {
      respuestas.unshift({
        pregunta,
        opcion: opcionSeleccionada,
        code: counter,
      });
      this.code.push(counter);
    } else if (this.code.length <= this.preguntas.length - 1) {
      for (let element of respuestas) {
        for (let item of this.code) {
          if (element.pregunta == pregunta && item == element.code) {
            element.opcion = opcionSeleccionada;
            break;
          } else if (element.pregunta != pregunta) {
            this.code.forEach((item) => {
              if (item == counter) {
                counter += 1;
              }
            });
            respuestas.unshift({
              pregunta,
              opcion: opcionSeleccionada,
              code: counter,
            });
            this.code.push(counter);
            break;
          }
        }
        break;
      }
    } else {
      respuestas.forEach((element) => {
        this.code.forEach((item) => {
          if (element.pregunta == pregunta && item == element.code) {
            element.opcion = opcionSeleccionada;
          }
        });
      });
    }
    // console.log(this.respuestasEncuestaForm.value);
  }
}
