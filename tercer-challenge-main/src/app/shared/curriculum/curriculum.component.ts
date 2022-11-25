import { Component} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

type Experiencia = {
  DescripcionFunciones:string;
    Empresa:string;
    FechaDesde:string;
    FechaFin:string;
    Rol:string;
}

type Formacion = {
  Anio: string;
  Carrera: string;
  UniversidadInstitucion: string;
}

type Habilidades = {
  HabilidadTecnica: string;
  IdNivelConocimiento: string;
  NivelConocimiento: string;
}

type Idioma = {
  IdNivelIdioma: string
  Idioma: string;
  NivelIdioma: string;
}

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {
  nombre:string = '';
  profesion_rol:string ='';
  Presentacion:string = '';
  idioma:Idioma[] = [];
  experiencia:Experiencia[] = [];
  formacion:Formacion[] = [];
  habilidades:Habilidades[] = [];

  constructor(private apiService: ApiService) {   
  this.apiService.getUserList().subscribe({
    next: (data: any) => {
      this.nombre = data.response[0].Nombre     
      this.profesion_rol = data.response[0].DescripcionPerfil
      this.Presentacion = data.response[0].DetalleFuente
      this.habilidades = data.response[0].Habilidad.map((element: any) => element)
      this.idioma = data.response[0].Idioma.map((element: any) => element)
      this.experiencia = data.response[0].Experecia.map((element: any) => element)
      this.formacion = data.response[0].Formacion.map((element:any) => element)
    },
  });
}
}
