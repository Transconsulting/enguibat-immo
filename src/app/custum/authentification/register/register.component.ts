import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { matchingPasswords, emailValidator } from 'src/app/theme/utils/app-validators';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public isdisabled= false
  public user: User
  public registerForm: UntypedFormGroup;
  public hide = true;
  public isSucced: Boolean
  public secondMotDePasse: any
  public userTypes = [
    { id: 1, name: 'Agent' },
    { id: 2, name: 'Agency' },
    { id: 3, name: 'Buyer' }
  ];
  constructor(
      public fb: UntypedFormBuilder,
      public router:Router,
      public authService: AuthService,
      public snackBar: MatSnackBar,
      ) { 
    this.user= new User("","","","" ,"",[])
    // this.user= new User("","","","","","", [])
  }
  ngOnInit() {
  }

  onSubmit(formValues: NgForm){
    this.user.roles.push('CLIENT')
     this.authService.register(this.user)
       .subscribe(()=>{
          this.isSucced= true
          this.router.navigateByUrl('/custum/login')
       },
       (error)=>{
        this.isSucced= false
       })
  }

  

  public onRegisterFormSubmit(values:Object):void {
    if (this.registerForm.valid) {
      this.snackBar.open('You registered successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    }
  }
}
