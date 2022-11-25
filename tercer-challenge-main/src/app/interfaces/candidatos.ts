export interface Response {
  success:    number;
  txtSuccess: string;
  response:   Candidatos[];
}

export interface Candidatos {
  Nombre:            string;
  RUN:               string;
  Perfil:            string;
  DescripcionPerfil: string;
  FechaIngreso:      Date;
  DetalleFuente:     string;
  PaisResidencia:    string;
  RandomCandidato:   string;
  Fuente:            null;
  IdFuente:          null;
  Experecia :        Experecia[];
  Formacion:         Formacion[];
  Habilidad:         Habilidad[];
  Idioma:            Idioma[];
}

export interface Experecia {
  Empresa:              string;
  FechaDesde:           Date;
  FechaFin:             Date;
  Rol:                  string;
  DescripcionFunciones: string;
}

export interface Formacion {
  Carrera:                string;
  Anio:                   string;
  UniversidadInstitucion: string;
}

export interface Habilidad {
  HabilidadTecnica:    string;
  IdNivelConocimiento: string;
  NivelConocimiento:   string;
}

export interface Idioma {
  Idioma:        string;
  IdNivelIdioma: string;
  NivelIdioma:   string;
}
