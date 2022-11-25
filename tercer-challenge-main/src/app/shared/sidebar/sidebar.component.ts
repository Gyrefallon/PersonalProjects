import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  activoInicio: boolean = false;
  activoEquipos: boolean = false;
  activoAsignacion: boolean = false;
  activoPerfil: boolean = false;
  activoProyecto: boolean = false;
  activoUsuarios: boolean = false;
  activoInventario: boolean = false;
  canViewUsuarios: boolean = false;
  canViewInventario: boolean = false;
  practicaGlobal: any;
  disabled: boolean = false;
  practicas: any;
  iconoInicio: String = '/assets/img/inicio.svg';
  iconoUsuario: String = '/assets/img/usuario.svg';
  iconoFicha: String = '/assets/img/icono_ficha.svg';
  iconoAsig: String = '/assets/img/asignaciones.svg';
  iconoCola: String = '/assets/img/cola.svg';
  iconoProy: String = '/assets/img/proyectos.svg';
  iconoUsuarios: String = '/assets/img/person_add.svg';
  iconoInventario: String = '/assets/img/inventario.svg';


  constructor() {}

  ngOnInit(): void {

  }

  cambiarColorInicio(e: any) {
    if (e) {
      this.activoInicio = true;
      this.iconoInicio = '/assets/img/inicio_sel.svg';
    } else {
      this.activoInicio = false;
      this.iconoInicio = '/assets/img/inicio.svg';
    }
  }

  cambiarColorAsignaciones(e: any) {
    if (e) {
      this.activoAsignacion = true;
      this.iconoAsig = '/assets/img/asignaciones_sel.svg';
    } else {
      this.activoAsignacion = false;
      this.iconoAsig = '/assets/img/asignaciones.svg';
    }
  }

  cambiarColorInventario(e: any) {
    if (e) {
      this.activoInventario = true;
      this.iconoInventario = '/assets/img/inventario.svg';
    } else {
      this.activoInventario = false;
      this.iconoInventario = '/assets/img/inventario.svg';
    }
  }

  cambiarColorPerfil(e: any) {
    if (e) {
      this.activoPerfil = true;
      this.iconoCola = '/assets/img/cola_sel.svg';
    } else {
      this.activoPerfil = false;
      this.iconoCola = '/assets/img/cola.svg';
    }
  }

  cambiarColorProyectos(e: any) {
    if (e) {
      this.activoProyecto = true;
      this.iconoProy = '/assets/img/proyectos_sel.svg';
    } else {
      this.activoProyecto = false;
      this.iconoProy = '/assets/img/proyectos.svg';
    }
  }

  cambiarColorUsuarios(e: any) {
    if (e) {
      this.activoUsuarios = true;
      this.iconoUsuarios = '/assets/img/person_add_sel.svg';
    } else {
      this.activoUsuarios = false;
      this.iconoUsuarios = '/assets/img/person_add.svg';
    }
  }




}
