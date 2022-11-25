import { Component, ViewChild, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { ModalService } from 'src/app/services/modal.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { defaultMaxListeners } from 'events';
import { DataForm } from 'src/app/interfaces/dataformulario';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  iconoInter: String = '/assets/img/interrogacion.svg';
  public DataForm!: DataForm[];
  selectedpostulantes = [];
  consumo: any;

  loading: boolean = true;

  @ViewChild('dt') table!: Table;

  public formularioPostulante!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private primengConfig: PrimeNGConfig,
    private ms: ModalService,
    private ApiService: ApiService
  ) {}

  openModal = () => this.ms.openModal();
  //peticion api commons
  getDataForm() {
    this.ApiService.getDataForm().subscribe({
      next: (data: any) => {
        this.DataForm = data.response;
        console.log(this.DataForm);
      },
    });
  }
  ngOnInit() {
    this.getDataForm();
    this.loading = false;
    this.primengConfig.ripple = true;
    //validadores
    this.formularioPostulante = this.fb.group({
      Fuente: ['', [Validators.required]],
      DetalleFuente: ['', [Validators.required]],
      IdFuente: ['', [Validators.required]],
      PaisResidencia: ['', [Validators.required]],
      RUN: ['', [Validators.required]],
      Nombre: ['', [Validators.required]],
      Perfil: ['', [Validators.required]],
      DescripcionPerfil: ['', [Validators.required]],
      Experecia: this.fb.array([
        {
          Empresa: ['', [Validators.required]],
          FechaDesde: ['', [Validators.required]],
          FechaFin: ['', [Validators.required]],
          Rol: ['', [Validators.required]],
          DescripcionFunciones: ['', [Validators.required]],
        },
      ]),
      Formacion: this.fb.array([
        {
          Carrera: ['', [Validators.required]],
          Anio: ['', [Validators.required]],
          UniversidadInstitucion: ['', [Validators.required]],
        },
      ]),
      Habilidad: this.fb.array([
        {
          HabilidadTecnica: ['', [Validators.required]],
          IdNivelConocimiento: ['', [Validators.required]],
        },
      ]),
      Idioma: this.fb.array([
        {
          Idioma: ['', [Validators.required]],
          IdNivelIdioma: ['', [Validators.required]],
        },
      ]),
    });
  }

  get ExpereciaProf() {
    return this.formularioPostulante.get('Experecia') as FormArray;
  }
  newexperiencia() {
    const experiencia = this.fb.group({
      Empresa: new FormControl('', [Validators.required]),
      FechaDesde: new FormControl('', [Validators.required]),
      FechaFin: new FormControl('', [Validators.required]),
      Rol: new FormControl('', [Validators.required]),
      DescripcionFunciones: new FormControl('', [Validators.required]),
    });
    this.ExpereciaProf.push(experiencia);
  }
  get FormacionProf() {
    return this.formularioPostulante.get('Formacion') as FormArray;
  }
  newformacion() {
    const formation = this.fb.group({
      Carrera: new FormControl('', [Validators.required]),
      Anio: new FormControl('', [Validators.required]),
      UniversidadInstitucion: new FormControl('', [Validators.required]),
    });
    this.FormacionProf.push(formation);
  }

  get HabilidadProfesional() {
    return this.formularioPostulante.get('Habilidad') as FormArray;
  }

  newhabilidad() {
    const hability = this.fb.group({
      HabilidadTecnic: new FormControl('', [Validators.required]),
      IdConocimiento: new FormControl('', [Validators.required]),
    });
    this.HabilidadProfesional.push(hability);
  }

  get IdiomaProfesional() {
    return this.formularioPostulante.get('Idioma') as FormArray;
  }

  newidioma() {
    const language = this.fb.group({
      idioma: new FormControl('', [Validators.required]),
      IdNivelIdioma: new FormControl('', [Validators.required]),
    });
    this.IdiomaProfesional.push(language);
  }

  enviarForm() {
    console.log(this.formularioPostulante.value);
  }
}
