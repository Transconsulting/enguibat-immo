import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router'; 
import { AuthService } from 'src/_services/auth.service';
import { SharedService } from 'src/_services/shared.service';
import { TokenStorageService } from 'src/_services/token-storage.service';
import { UserService } from 'src/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];
  public loginForm: UntypedFormGroup;
  public hide = true;
  constructor(
      public fb: UntypedFormBuilder,
      public sharedService: SharedService,
      public _user: UserService,
      public router:Router,
      private authService: AuthService,
      private tokenStorage: TokenStorageService
      ) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    } 

    



    this.loginForm = this.fb.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      rememberMe: false
    });
  }

  onSubmit(formValues: NgForm): void {
    const { username, password } = this.form;
    this.authService.login(formValues.value.username, formValues.value.password).then(
      (data: any) => {
        this._user.behavior.next(true)

        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(
          this.tokenStorage.getDecodedAccessToken(data.token).sub
        );
        this.tokenStorage.saveRole(
          this.tokenStorage.getDecodedAccessToken(data.token).aud
        );
        // this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;
       
        // Cette condition juste en bas permet de savoir nous venons de la page de detail de produit pour pas

        if(sessionStorage.getItem("navigatedFrom") && sessionStorage.getItem("navigatedFrom") != null){
          this.router.navigateByUrl(sessionStorage.getItem("navigatedFrom"))
          sessionStorage.removeItem("navigatedFrom")
        }
        else{
          this.router.navigateByUrl('/');
        }
      },
      (err) => {
        this.errorMessage = err.error.message;
        console.log(err)
        this.isLoginFailed = true;
      }
    )
    .catch(error=> console.log(error));
  }

  reloadPage(): void {
    window.location.reload();
  }

  loginform = true;
  recoverform = false;

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }

  public onLoginFormSubmit(values:Object):void {
    if (this.loginForm.valid) {
      this.router.navigate(['/']);
    }
  }
}
