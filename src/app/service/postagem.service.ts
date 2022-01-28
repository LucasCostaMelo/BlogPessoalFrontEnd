import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable ({
    providedIn: 'root'
})
export class PostagemService{

    constructor(private http: HttpClient) {}

    token = {
        headers: new  HttpHeaders().set('Authorization', environment.token)
    }

    getAllPostagens(): Observable<Postagem[]>{
        return this.http.get<Postagem[]>('http://localhost:8080/postagens', this.token)
    }

    postPostagem(postagem: Postagem): Observable<Postagem>{
        return this.http.post<Postagem>('http://localhost:8080/postagens', postagem, this.token)
    }
}