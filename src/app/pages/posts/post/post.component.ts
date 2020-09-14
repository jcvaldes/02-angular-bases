import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() mensaje;
  // @Output() clickPost = new EventEmitter();
  @Output() clickPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    console.log('Click desde el Hijo -> ', this.mensaje.id);
    // this.clickPost.emit({ id: 'ABC' });
    this.clickPost.emit(this.mensaje.id);
  }
}
