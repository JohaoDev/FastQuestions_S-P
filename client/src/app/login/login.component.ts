import { PermisosService } from '../servicios/permisos.service';
import { DataRx } from '../modelos/data-rx';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CrudService } from '../servicios/crud.service';

export interface DataLogin {
  data: {
    email: string;
    password: string;
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  dataLogin: DataLogin;

  loginForm: FormGroup;
  LoginService: any;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private permisos: PermisosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._loginForm();
    this.dataLogin = {
      data: {
        email: '',
        password: '',
      },
    };
  }

  _loginForm = () => {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  };

  login(): void {
    this.dataLogin = {
      data: {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value,
      },
    };

    this.loginService.login(this.dataLogin).subscribe(
      (res: DataRx) => {
        if (res.transaccion) {
          if (this.permisos.decodificarToken(res.token)) {
            // console.log(this.permisos.ObtenerUsuarioLogin());
            let userData: any = this.permisos.ObtenerUsuarioLogin();
            switch (userData.rol) {
              case 'administrador':
                this.router.navigate(['/administration']);
                break;
              case 'encuestado':
                this.router.navigate(['/encuestado']);
                break;
              case 'encuestador':
                this.router.navigate(['/encuestador']);
                break;
              default:
                alert('No tiene un rol asignado');
            }
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Bienvedid@',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } else {
          this.dataLogin.data.email = '';
          this.dataLogin.data.password = '';
        }
      },
      (error) => {
        this.dataLogin.data.email = '';
        this.dataLogin.data.password = '';
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Correo y/o contraseña incorrectos',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
