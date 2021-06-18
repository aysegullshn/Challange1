import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  faEye = faEye;
  email = new FormControl('');
  emailFormCheck = new FormControl(true);
  emailCheckErrorMessage = new FormControl('');

  password = new FormControl('');
  passwordFormCheck = new FormControl(true);
  passwordCheckErrorMessage = new FormControl('');


  @ViewChild('showLoginBtn') showLoginBtn: any;
  @ViewChild('showSignupBtn') showSignupBtn: any;


  showLoginForm = true;
  showSignupForm = false;


  //Signup

  signUpName = new FormControl('');
  signUpNameFormCheck: boolean | null = null;
  signUpNameFormCheckErrorMessage = '';

  signUpSurname = new FormControl('');
  signUpSurNameFormCheck: boolean | null = null;
  signUpSurNameFormCheckErrorMessage = '';

  signUpEmail = new FormControl('');
  signUpEmailFormCheck: boolean | null = null;
  signUpEmailFormCheckErrorMessage = '';

  signUpPassword = new FormControl('');
  signUpPasswordFormCheck: boolean | null = null;
  signUpPasswordFormCheckErrorMessage = '';

  singUpPasswordConfirm = new FormControl('');
  signUpPasswordConfirmFormCheck: boolean | null = null;
  signUpPasswordConfirmFormCheckErrorMessage = '';

  signaturetext = new FormControl(false);
  signaturetextCheck: boolean | null = null;
  signaturetextCheckFormCheckErrorMessage = '';

  enableSignUpBtn = false;


  @ViewChild('signupForm') signupForm: any;
  @ViewChild('signUpBtn') signUpBtn: any;


  constructor() {

  }

  emailCheck(): void {

    if (this.email.value.trim() == "") {
      this.emailCheckErrorMessage.setValue("E-posta alanı boş geçilemez");
      this.emailFormCheck.setValue(false);
    } else if (!this.email.value.match(/^\S+@\S+$/)) {
      this.emailCheckErrorMessage.setValue("E-Posta geçersiz");
      this.emailFormCheck.setValue(false);
    } else {
      this.emailCheckErrorMessage.setValue(false);
      this.emailFormCheck.setValue(true);
    }
  }

  passwordCheck(): void {
    if (this.password.value.trim() == "") {
      this.passwordCheckErrorMessage.setValue("Şifre alanı boş geçilemez");
      this.passwordFormCheck.setValue(false);
    } else if (!this.password.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      this.passwordCheckErrorMessage.setValue("Şifre en az 8 karakter ve en az bir tane küçük veya büyük harf yada rakam olmak zorundadır");
      this.passwordFormCheck.setValue(false);
    } else {
      this.passwordCheckErrorMessage.setValue(false);
      this.passwordFormCheck.setValue(true);
    }
  }

  showPassword(event: Event): void {
    let el = event.currentTarget as HTMLElement;
    // @ts-ignore
    el.parentNode.firstChild.type = el.parentNode.firstChild.type == 'text' ? 'password' : 'text';
  }

  ngOnInit(): void {
    this.email.valueChanges.subscribe((value => {
      console.log(value);
      if (value.trim() == "") {
        this.emailCheckErrorMessage.setValue("E-posta alanı boş geçilemez");
        this.emailFormCheck.setValue(false);
      } else if (!this.email.value.match(/^\S+@\S+$/)) {
        this.emailCheckErrorMessage.setValue("E-Posta geçersiz");
        this.emailFormCheck.setValue(false);
      } else {
        this.emailCheckErrorMessage.setValue(false);
        this.emailFormCheck.setValue(true);
      }
    }))
    this.password.valueChanges.subscribe((value => {
      if (this.password.value.trim() == "") {
        this.passwordCheckErrorMessage.setValue("Şifre alanı boş geçilemez");
        this.passwordFormCheck.setValue(false);
      } else if (!this.password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)) {
        this.passwordCheckErrorMessage.setValue("Şifre en az 8 karakter ve en az bir tane küçük veya büyük harf yada rakam olmak zorundadır");
        this.passwordFormCheck.setValue(false);
      } else {
        this.passwordCheckErrorMessage.setValue(false);
        this.passwordFormCheck.setValue(true);
      }
    }))
    this.signUpName.valueChanges.subscribe((value) => {
      if (value.length < 3 || value.length > 24) {
        this.signUpNameFormCheck = false;
        this.signUpNameFormCheckErrorMessage = 'Bu alan en düşük 3 en fazla 24 karakter olabilir';
      } else if (/[^a-zA-Z0-9]/.test(value)) {
        this.signUpNameFormCheck = false;
        this.signUpNameFormCheckErrorMessage = 'Özel karakter kullanılmamalıdır';
      } else {
        this.signUpNameFormCheck = true;
        this.signUpNameFormCheckErrorMessage = '';
      }
    })
    this.signUpSurname.valueChanges.subscribe((value) => {
      if (value.length < 3 || value.length > 24) {
        this.signUpSurNameFormCheck = false;
        this.signUpSurNameFormCheckErrorMessage = 'Bu alan en düşük 3 en fazla 24 karakter olabilir';
      } else if (/[^a-zA-Z0-9]/.test(value)) {
        this.signUpSurNameFormCheck = false;
        this.signUpSurNameFormCheckErrorMessage = 'Özel karakter kullanılmamalıdır';
      } else {
        this.signUpSurNameFormCheck = true;
        this.signUpSurNameFormCheckErrorMessage = '';
      }
    })
    this.signUpEmail.valueChanges.subscribe((value) => {
      if (value.trim() == "") {
        this.signUpEmailFormCheckErrorMessage = "E-posta alanı boş geçilemez";
        this.signUpEmailFormCheck = false;
      } else if (!value.match(/^\S+@\S+$/)) {
        this.signUpEmailFormCheckErrorMessage = "E-Posta geçersiz";
        this.signUpEmailFormCheck = false;
      } else {
        this.signUpEmailFormCheckErrorMessage = '';
        this.signUpEmailFormCheck = true;
      }
    })
    this.signUpPassword.valueChanges.subscribe((value) => {
      if (value.trim() == "") {
        this.signUpPasswordFormCheckErrorMessage = "Şifre alanı boş geçilemez";
        this.signUpPasswordFormCheck = false;
      } else if (!value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        this.signUpPasswordFormCheckErrorMessage = "Şifre en az 8 karakter ve en az bir tane küçük veya büyük harf yada rakam olmak zorundadır";
        this.signUpPasswordFormCheck = false;
      } else {
        this.signUpPasswordFormCheckErrorMessage = "";
        this.signUpPasswordFormCheck = true;
      }
    })
    this.singUpPasswordConfirm.valueChanges.subscribe((value) => {
      if (value.trim() == "") {
        this.signUpPasswordConfirmFormCheckErrorMessage = "Şifre onayı alanı boş geçilemez";
        this.signUpPasswordConfirmFormCheck = false;
      } else if (value.trim() !== this.signUpPassword.value) {
        this.signUpPasswordConfirmFormCheckErrorMessage = "Şifreler birbiriyle uyuşmuyor";
        this.signUpPasswordConfirmFormCheck = false;
      } else {
        this.signUpPasswordConfirmFormCheckErrorMessage = "";
        this.signUpPasswordConfirmFormCheck = true;
      }
    })
    this.signaturetext.valueChanges.subscribe((value) => {
      if (value == false) {
        this.signaturetextCheckFormCheckErrorMessage = "Rıza metni onaylanmalıdır";
        this.signaturetextCheck = false;
      } else {
        this.signaturetextCheckFormCheckErrorMessage = "";
        this.signaturetextCheck = true;
      }
    })

    // @ts-ignore
    document.getElementById('signup').addEventListener('input', () => {
      if (this.signUpNameFormCheck && this.signUpSurNameFormCheck && this.signUpEmailFormCheck && this.signUpPasswordFormCheck && this.signUpPasswordConfirmFormCheck && this.signaturetextCheck) {        this.enableSignUpBtn = true;
      } else {
        this.enableSignUpBtn = false;
      }
    });
    // @ts-ignore
    document.getElementById('signup').addEventListener('change', () => {
      if (this.signUpNameFormCheck && this.signUpSurNameFormCheck && this.signUpEmailFormCheck && this.signUpPasswordFormCheck && this.signUpPasswordConfirmFormCheck && this.signaturetextCheck) {        this.enableSignUpBtn = true;
      } else {
        this.enableSignUpBtn = false;
      }
    });
  }


  showSignupFormBtn(): void {
    this.showSignupForm = true;
    this.showLoginForm = false;
    this.showLoginBtn.nativeElement.classList.remove("active");
    this.showSignupBtn.nativeElement.classList.add("active");
  }

  showLoginFormBtn(): void {
    this.showLoginForm = true;
    this.showSignupForm = false;
    this.showLoginBtn.nativeElement.classList.add("active");
    this.showSignupBtn.nativeElement.classList.remove("active");
  }

  loginSubmit(event: Event): void {
    event.preventDefault();
    this.emailCheck();
    this.passwordCheck();
  }

}
