import { BooksService } from './../services/books.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  bookSubscription :  Subscription;

  constructor(private booksService : BooksService, private router : Router) { }

  ngOnInit(): void {
    this.bookSubscription = this.booksService.booksSubject.subscribe(
      (books: Book[]) =>{
        this.books = books;
      }
    );
    this.booksService.emitBooks();
  }

  onNewBook(){
    this.router.navigate(['/books', 'new']);
  }

  onDeleteBook(book: Book){
    this.booksService.removeBook(book);
  }

  onViewBook(id:number){
    this.router.navigate(['/books', 'view', id]);
  }

  ngOnDestroy(){              //Pour détruire l'allocation de mémoire subscribe
    this.bookSubscription.unsubscribe;
  }

}
