import { Component, Input, OnChanges } from '@angular/core';

import { Store } from '@ngrx/store';

import { TodoPage } from '../../interfaces/interface';
import { ChangePages } from '../../redux/pagination/pagination.actions';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {

  @Input() countPages: number;
  
  @Input() page: number;
  
  @Input() count: number;
  
  pages: Array<any>;

  curentCount = new FormControl('');

  constructor(private store: Store<TodoPage>) {}

  ngOnChanges(): void {
    this.pages = new Array(this.countPages);
    this.curentCount.patchValue(this.count);
  }

  setPage(page: number){
    this.store.dispatch(new ChangePages(page, this.curentCount.value))
  }

  setCount(){
    this.store.dispatch(new ChangePages(1, this.curentCount.value))
  }
}
