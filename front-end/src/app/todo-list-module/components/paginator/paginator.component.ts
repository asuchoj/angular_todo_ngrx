import { Component, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';

import { TodoPage } from '../../interfaces/interface';
import { ChangePages } from '../../redux/actions/pagination.actions';

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

  currentCount = new FormControl('');

  constructor(private store: Store<TodoPage>) { }

  ngOnChanges(): void {
    this.pages = new Array(this.countPages);
    this.currentCount.patchValue(this.count);
  }

  setPage(page: number) {
    this.store.dispatch(new ChangePages(page, this.currentCount.value));
  }

  setCount() {
    this.store.dispatch(new ChangePages(1, this.currentCount.value));
  }
}
