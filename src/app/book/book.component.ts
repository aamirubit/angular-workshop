import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent  {

  constructor() { }

  bookName= 'Ng Girls book';

  clearBookName() {
    this.bookName = '';
  }
}
