import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.scss']
})
export class PatientSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    $('#searchModal').modal();
  }

}
