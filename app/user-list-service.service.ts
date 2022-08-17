import { Injectable } from '@angular/core';
import { SavedListComponent } from './saved-list/saved-list.component';
@Injectable({
  providedIn: 'root'
})
export class UserListServiceService {

  constructor(private savedist : SavedListComponent) { }

  refreshTable()
  {
    this.savedist.ngOnInit();
  }
}
