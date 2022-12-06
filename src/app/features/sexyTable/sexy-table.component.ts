import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {PopeDTO} from "../../shared/models/popeDTO";

let ELEMENT_DATA: PopeDTO[] = [
  {
    isActive: true,
    id: 0,
    name: 'Joseph Aloisius Ratzinger',
    holyName: 'Benedetto XVI',
    level: 69,
    schoolOfPrayer: 'Sith',
    specialization: 'Electrocuting people',
    holyCrusadesStarted: 10
  },
  {
    isActive: true,
    id: 1,
    name: 'Jorge Mario Bergoglio',
    holyName: 'Francesco I',
    level: 420,
    schoolOfPrayer: 'Tango argentino',
    specialization: 'Hand-slap',
    holyCrusadesStarted: 3
  },
  {
    isActive: true,
    id: 2,
    name: 'Pietro Angelerio',
    holyName: 'Celestino V',
    level: 10,
    schoolOfPrayer: 'Indolence',
    specialization: 'Short life',
    holyCrusadesStarted: 0
  }
];

@Component({
  selector: 'app-sexy-table',
  templateUrl: './sexy-table.component.html',
  styleUrls: ['./sexy-table.component.scss']
})

export class SexyTableComponent {
  displayedColumns: string[];
  dataSource: MatTableDataSource<PopeDTO>;
  clickedRows = new Set<PopeDTO>();
  maxId = Math.max(...ELEMENT_DATA.map(e => e.id), 0);
  popeToAdd:PopeDTO = {
    isActive: false,
    id: this.maxId + 1,
    name: '',
    holyName: '',
    schoolOfPrayer: '',
    specialization: ''
  };

  constructor() {
    this.dataSource = new MatTableDataSource<PopeDTO>(ELEMENT_DATA);
    this.displayedColumns = ['id', 'name', 'holyName', 'level', 'schoolOfPrayer', 'specialization', 'holyCrusadesStarted'];
  }

  toggleNewPopeLine() {
    if(!ELEMENT_DATA.find(e => e.name == '')){
      this.popeToAdd = {
        isActive: false,
        id: this.maxId + 1,
        name: '',
        holyName: '',
        schoolOfPrayer: '',
        specialization: ''
      };
      this.maxId = Math.max(...ELEMENT_DATA.map(e => e.id), 0);
      this.popeToAdd.id = this.maxId + 1;

      ELEMENT_DATA.push(this.popeToAdd);
      this.dataSource.data = ELEMENT_DATA;
    }
  }

  addNewPope() {
    this.popeToAdd.isActive = true;
    this.dataSource.data = ELEMENT_DATA;
  }
}
