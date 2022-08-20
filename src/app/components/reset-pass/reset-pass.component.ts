import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from "src/app/services/auth.service";



@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { }



  isAlert=false;
  alertMsg='';
  public email:string='';


  ngOnInit(): void {
  }

  resetPass(){
    console.log(this.email);
    this.authService.onResetUser(this.email).then(res=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `revise el correo escrito para el cambio de contraseña` ,
        text: `correo: ${this.email}`,

      }).then(res=>{
          this.router.navigate(['login']);
      })
    }).catch(error=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `Ha ocurido un error para el reseteo de contreaseña`,  
        text: `no se ha podido enviar el correo para cambiar la contraseña a: ${this.email}`,
      })
    })
  }
  
  

}
