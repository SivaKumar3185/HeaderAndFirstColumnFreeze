import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-column-freeze',
  templateUrl: './column-freeze.component.html',
  styleUrls: ['./column-freeze.component.css']
})
export class ColumnFreezeComponent implements OnInit {

  constructor(private element: ElementRef) { }
  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) private scrollHandler($event: Event): void {
    const multipleColumnBodyScroll = this.element.nativeElement.querySelector('#column-freeze-table-body');
    const singleColumnBodyScroll = this.element.nativeElement.querySelector('#single-column-table-body');
    if ($event.srcElement.id === 'column-freeze-table-body' ) {
     singleColumnBodyScroll.scrollTop = $event.srcElement.scrollTop;
    }
    if ( multipleColumnBodyScroll.scrollTop !== singleColumnBodyScroll.scrollTop ) {
      singleColumnBodyScroll.scrollTop =  multipleColumnBodyScroll.scrollTop;
    }
  }
}
