import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  // mensajes: any[] = [];
  mensajes: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log('INIT');
    // this.dataService.getPosts().subscribe((posts: any[]) => {
    //   this.mensajes = posts;
    // } );
    // es un puntero a la funcion
    this.mensajes = this.dataService.getPosts();
  }
  escuchaPost(id) {
    console.log('Escucho Post desde el padre ID ->', id);
  }
}
