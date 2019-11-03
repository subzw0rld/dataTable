import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input()
  tableData = [];

  headerData = [
    { label: "Supplier Name", field: "supplierName" },
    { label: "Name", field: "Name" },
    { label: "Email", field: "Email" },
    { label: "Position", field: "Position" },
    { label: "Phone", field: "Phone" },
    { label: "Address", field: "Address" }
  ];

  constructor() { }

  ngOnInit() {
  }

  editRow(index, editable: string) {
    const rows = document.querySelectorAll(".data-table tbody tr");
    const selectedRow = rows[index];
    const cells = selectedRow.getElementsByTagName('td');

    Array.from(cells).map((cell, index) => {
      
      if(index > 0) {
        const targetEl = cell.querySelector('.editable-field');
        targetEl.setAttribute('contenteditable', editable);
      }
    });
  }
}
