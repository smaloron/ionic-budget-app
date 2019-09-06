import { BudgetEntry } from '../entity/budget-entry';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private budgetList: Array<BudgetEntry> = [];

  constructor() {
    console.log('construction du service');
    // Ajout d'une ligne au tableau des dépenses
    const entry = new BudgetEntry(
      (new Date()).getTime(),
      {label: 'Loyer', category: 'Maison', amount: 700, createdAt: new Date()}
    );

    this.budgetList.push(entry);
   }

   public getBudgetList(): Array<BudgetEntry> {
     console.log(this.budgetList);
     return this.budgetList;
   }

   public addEntry(infos: BudgetEntry) {
     this.budgetList.push(infos);
   }
}
