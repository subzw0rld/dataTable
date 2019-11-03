import { DataService } from './shared/data.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dataTable';

  public dataProvider = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    forkJoin(this.dataService.getSupplierList(), this.dataService.getSupplierName()).subscribe(result => {
      this.dataProvider = result[0].map((supplierListItem, index) => {
        result[1].map(supplierName => {
          if(supplierListItem.SupplierId === supplierName.value) {
            supplierListItem["supplierName"] = supplierName.label;
          }
        });

        return supplierListItem;
      });
    });
  }

}
