import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import {Router, ActivatedRoute} from '@angular/router';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';
import {PostagemService} from './../../service/postagem.service';

@Component({
    selector: 'app-postagem-delete',
    templateUrl: './postagem-delete.component.html',
    styleUrls: ['./postagem-delete.component.css']
})

export class PostagemDeleteComponent implements OnInit {

    postagem: Postagem = new Postagem()
    idPost: number

    constructor( 
        private router: Router,
        private route: ActivatedRoute,
        private postagemService: PostagemService
       
    ){
        
        ngOnInit() {
        window.scroll(0,0)

        if(environment.token ==''){
            this.router.navigate(['/entrar'])
          }
     this.idPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPost)


    }
    findByIdPostagem(id: number){
        this.postagemService.getbyIdPostagem(id).subscribe((resp: Postagem) =>{
            this.postagem = resp
        })
    }

    apagar(){
        this.postagemService.delePostagem(this.idPost).subscribe(() =>{
            alert('Postagem apagada com sucesso!')
            this.router.navigate((['/inicio']))
        })
       

    }
    }
}
