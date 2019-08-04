import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {
  employeeGroup : FormGroup;
  constructor(private fb: FormBuilder) {  }

  ngOnInit() {
    this.employeeGroup = this.fb.group({
      fullName : ['',Validators.required],
      email : [''],
      skills : this.fb.group({
        skillName : [''],
        experienceInYears : [''],
        proficiency : ['']
      })
    });
  }
  onSubmit(): void {
    console.log(this.employeeGroup.dirty);
  }
  onLoadDataClick(): void {
    this.employeeGroup .patchValue({
     
      skills :{
        skillName : "english",
        experienceInYears : "5",
        proficiency : "advanced"
      }
    });
  }
}
