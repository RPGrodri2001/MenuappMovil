import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  componentes!: Observable<Componente[]>; // Agrega el operador '!' para indicar que se asignará un valor

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.initializeApp();
  }

  initializeApp() {
    this.componentes = this.dataService.getMenuOpts();
  }
}