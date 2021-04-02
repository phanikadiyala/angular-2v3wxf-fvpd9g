import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FlopService } from './flop.service';

@Component({
  selector: 'my-flop-list',
  templateUrl: './flop-list.component.html',
  styleUrls: [ './flop-list.component.css'
  ]
})
export class FlopListComponent  {
  flops;
  rentalList;

  constructor(private flopService: FlopService) {

  }

  ngOnInit() {
    this.flopService.getFlops()
    .subscribe(flops => {
      this.flops = flops;
    })


    this.flopService.getRentalList()
    .subscribe(rentalList => this.rentalList = rentalList)
  }

  onClick() {
    console.log('rented')
  }

}
