import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {PopeDTO} from "../../shared/models/popeDTO";

const ELEMENT_DATA: PopeDTO[] = [
  {
    id: 0,
    name: 'Joseph Aloisius Ratzinger',
    holyName: 'Benedetto XVI',
    level: 69,
    schoolOfPrayer: 'Sith',
    specialization: 'Electrocuting people',
    holyCrusadesStarted: 10
  },
  {
    id: 1,
    name: 'Jorge Mario Bergoglio',
    holyName: 'Francesco I',
    level: 420,
    schoolOfPrayer: 'Tango argentino',
    specialization: 'Hand-slap',
    holyCrusadesStarted: 3
  },
  {
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
  sexyBool: boolean = true;
  displayedColumns: string[];
  dataSource: MatTableDataSource<PopeDTO>;
  clickedRows = new Set<PopeDTO>();

  constructor() {
    this.dataSource = new MatTableDataSource<PopeDTO>(ELEMENT_DATA);
    this.displayedColumns = ['id', 'name', 'holyName', 'level', 'schoolOfPrayer', 'specialization', 'holyCrusadesStarted'];
  }

  ciccio() {
    this.sexyBool = !this.sexyBool;
    
    console.log(this.sexyBool);
  }
}
