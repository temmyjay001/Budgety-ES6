import Expense from "../model/Expense";
import Income from "../model/Income";
import { data } from "../model/model";

export default class Budget {
  calculateTotal(type) {
    let sum = 0;
    data.allItems[type].forEach((current) => (sum += current.value));

    data.totals[type] = sum;
  }

  addItem(type, des, val) {
    let newItem, ID;

    // Create new ID
    if (data.allItems[type].length > 0) {
      ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
    } else {
      ID = 0;
    }

    //Create new item based on 'inc' or 'exp' type
    if (type === "exp") {
      newItem = new Expense(ID, des, val);
    } else {
      newItem = new Income(ID, des, val);
    }

    // Push it into our data structure
    data.allItems[type].push(newItem);

    // Return the new element
    return newItem;
  }

  calculateBudget() {
    // calcualte total income and expenses
    this.calculateTotal("exp");
    this.calculateTotal("inc");

    // calculate the budget: income - expenses
    data.budget = data.totals.inc - data.totals.exp;

    // calculate the percentage of income that we spent
    if (data.totals.inc > 0) {
      data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
    } else {
      data.percentage = -1;
    }
  }

  calculatePercentages() {
    data.allItems.exp.forEach((current) =>
      current.calculatePercentage(data.totals.inc)
    );
  }

  getPercentages() {
    const allPerc = data.allItems.exp.map((current) => current.getPercentage());
    return allPerc;
  }

  getBudget() {
    return {
      budget: data.budget,
      totalInc: data.totals.inc,
      totalExp: data.totals.exp,
      percentage: data.percentage,
    };
  }
  deleteItem(type, id) {
    let index, ids;

    ids = data.allItems[type].map((current) => current.id);

    index = ids.indexOf(id);

    if (index !== -1) {
      data.allItems[type].splice(index, 1);
    }
  }
}
