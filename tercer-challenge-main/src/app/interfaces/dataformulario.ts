export interface Response {
  success:  number;
  response: DataForm;
}

export interface DataForm {
  nivelConocimiento:      NivelConocimiento[];
  nivelIngles:            NivelIngle[];
  Rol:                    string[];
  Empresas:               string[];
  UniversidadInstitucion: string[];
  Carrera:                string[];
  Habilidades:            string[];
  Idiomas:                string[];
  Paises:                 string[];
}

export interface NivelConocimiento {
  IdNivelConocimiento: string;
  NivelConocimiento:   string;
}

export interface NivelIngle {
  IdNivelIdioma: string;
  NivelIdioma:   string;
}

// <div class="p-field p-col-12 p-md-4 col-md-4" *ngFor="let DataForm">
// <datalist id="browsers">
//   <option value="{{DataForm.nivelConocimiento.IdNivelConocimiento}}">
//   <option value="Firefox">
//   <option value="Chrome">
//   <option value="Opera">
//   <option value="Safari">
// </datalist>
// </div>
