import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Character} from "../../models/CharactersResponse";

@Component({
  selector: 'app-update-create-dialog',
  templateUrl: './update-create-dialog.component.html',
  styleUrls: ['./update-create-dialog.component.scss']
})
export class UpdateCreateDialogComponent implements OnInit {


  baseForm  = this.fb.group({
    name: ['',Validators.required],
    species: ['',Validators.required],
    status: ['',Validators.required],
    gender: ['',Validators.required],
    created: [new Date,Validators.required],
  });


  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<UpdateCreateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public char: Character) { }

  ngOnInit(): void {
    this.setFormValues();
  }

  setFormValues(){
    if (this.char){
      this.baseForm.setValue({
        'name': this.char.name,
        'species': this.char.species,
        'status': this.char.status,
        'gender': this.char.gender,
        'created': new Date(this.char.created)
      })
    }
  }

  save() {
    const char = {
      name: this.baseForm.value.name,
      species: this.baseForm.value.species,
      status: this.baseForm.value.status,
      gender: this.baseForm.value.gender,
      created: this.baseForm.value.created,
      image: this.char ? this.char.image : 'assets/base.jpeg' ,
    }
    this.dialogRef.close(char)
  }
}
