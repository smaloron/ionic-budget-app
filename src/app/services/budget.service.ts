import { BudgetEntry } from '../entity/budget-entry';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private budgetList: Array<BudgetEntry> = [];

  private static COLLECTION_NAME = "budget";

  constructor(private storage: Storage) {
    console.log('construction du service');
   }

   public getBudgetList(): Promise<any> {
     return this.storage.get(BudgetService.COLLECTION_NAME);  
   }

   public addEntry(infos: BudgetEntry, callback) {
     this.storage.get(BudgetService.COLLECTION_NAME)
      .then(
        (data)=> {
          if(!data) data = [];
          data.push(infos);
          this.storage.set(BudgetService.COLLECTION_NAME, data);
          callback();
        }
      )
    }
}
