import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserCredentials } from '../model/UserCredencials';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()
  userCredentials: UserCredentials = new UserCredentials()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

  entrar() {
      this.auth.credentials(this.userLogin).subscribe((resp: UserCredentials) => {
      this.userCredentials = resp
     
      environment.token = resp.token
      environment.nome = resp.nome
      environment.foto = resp.foto
      environment.idUser = resp.idUser
    
      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.foto)
      console.log(environment.idUser)
    
      this.router.navigate(['/inicio'])
      }, erro => {
        if (erro.status == 400) {
          alert('Usuário ou senha estão incorretos')
        }
      })
    }
}
