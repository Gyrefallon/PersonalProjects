import { Component, ViewChild, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { Candidatos } from 'src/app/interfaces/candidatos';
import { prependListener } from 'process';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  iconoAgregar: String = '/assets/img/agregar.svg';
  public postulantes!: Candidatos[];
  public habilidades!: Candidatos[];
  selectedpostulantes = [];
  consumo: any;
  public candidatosStr: any;
  public habilidadStr: any;

  loading: boolean = true;

  @ViewChild('dt') table!: Table;

  constructor(
    private ApiService: ApiService,
    private primengConfig: PrimeNGConfig,
    private ms: ModalService
  ) {}

  ngOnInit() {
    this.cargaCandidatos();
    this.loading = false;
    this.primengConfig.ripple = true;
  }

  openModal = () => this.ms.openModal()

  cargaCandidatos() {
    this.ApiService.getUserList().subscribe({
      next: (data: any) => {
        this.postulantes = data.response;

        this.candidatosStr = this.postulantes.map((obj) => {
          let strHabilidad = '';

          if (obj.Habilidad) {
            obj.Habilidad.map((objEx) => {
              strHabilidad += objEx.HabilidadTecnica + ' ';
            });
          }

          return {
            Nombre: obj.Nombre,
            RUN: obj.RUN,
            Perfil: obj.Perfil,
            DescripcionPerfil: obj.DescripcionPerfil,
            FechaIngreso: obj.FechaIngreso,
            PaisResidencia: obj.PaisResidencia,
            Fuente: obj.Fuente,
            Experiencia: obj.Experecia,
            Formacion: obj.Formacion,
            Habilidad: strHabilidad,
            Idioma: obj.Idioma,
          };
        });
        console.log('mapa', this.candidatosStr);
      },
    });
  }

  //     this.ApiService.getCustomersLarge().sub(customers => {
  //         this.customers = customers;
  //         this.loading = false;
  //     });

  //     this.primengConfig.ripple = true;
  // }

  onActivityChange(event: any) {
    const value = event.target.value;
    if (value && value.trim().length) {
      const activity = parseInt(value);

      if (!isNaN(activity)) {
        this.table.filter(activity, 'activity', 'gte');
      }
    }
  }

  onDateSelect(value: any) {
    this.table.filter(this.formatDate(value), 'date', 'equals ');
  }

  formatDate(date: any) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }

  // onRepresentativeChange(even: any) {
  //   this.table.filter(event.value, 'representative', 'in');
  // }
}

// ngOnInit(): void {
//   console.log('componente inicializado');
//   this.Service.getUsers().subscribe((response: any) => console.log(response))
// }}
