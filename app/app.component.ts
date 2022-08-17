import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { SavedListComponent } from './saved-list/saved-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  productForm: FormGroup;   
  constructor(private fb:FormBuilder) {
   
    this.productForm = this.fb.group({
      quantities: this.fb.array(['inputTxt']) ,
    });
  }  
  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray
  }   
  newQuantity(): FormGroup {
    return this.fb.group({
      inputTxt: '',
    })
  }   
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
  refreshList()
  {
   // this.savedList.ngOnInit();
  }
}
