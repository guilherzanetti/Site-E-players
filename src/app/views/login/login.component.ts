import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  userModel = new User();
  menssagem = "";

  receberDados() {
    this.loginService.login(this.userModel).subscribe({
      next: (response) => {
        console.log("response", Response)
        console.log("O Status Code é", response.status)
        console.log("O token de permissão é", response.body.acesstoken)

        this.menssagem = "Bem-vindo" + response.body.user.name
        console.log(this.menssagem)
        localStorage.setItem("nomeUsuario", "Ordilei")
        // this.router.navigateByUrl("/")
      }
    })
  }

}