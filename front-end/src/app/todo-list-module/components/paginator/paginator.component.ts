import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges, OnInit {

  page: number = 1;

  pages: Array<any>;

  @Input() countPages: number;

  constructor() { }

  ngOnChanges(): void {
    this.pages = new Array(this.countPages);
  }

  ngOnInit() {
  }

  getTasks(){

  }

}
