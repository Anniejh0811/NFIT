import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-free-class-form',
  templateUrl: './free-class-form.component.html',
  styleUrls: ['./free-class-form.component.css']
})
export class FreeClassFormComponent {

  submiFreeClassForm(form:any){
    console.log(form);
    if(form.firstName == '' || form.lastName == '' || form.phoneNumber == '' || form.email == '' || form.date == ''){
      alert("Missing Value");
    } else{
      alert("We booked your class! See you then!")
      window.location.href = "/"
    }
    
  }
}
