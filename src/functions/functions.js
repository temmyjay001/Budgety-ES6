import UiControls from "../controller/Ui";
import Budget from "../controller/Budget";
import { DOMstrings } from "../Constants";

const UIctrl = new UiControls();
const budgetCtrl = new Budget();

export const formatNumber = (num, type) => {
  let numSplit, int, dec;
  /**
   * + or - before number
   *
   * exactly 2 decimal points
   * comma separating the thousands
   */

  num = Math.abs(num);
  num = num.toFixed(2);

  numSplit = num.split(".");

  int = numSplit[0];
  dec = numSplit[1];

  if (int.length > 3) {
    int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3); // input 2310, ouput 2,310
  }

  return (type === "exp" ? "-" : "+") + " " + int + "." + dec;
};

export const nodeListForEach = (list, callback) => {
  for (let index = 0; index < list.length; index++) {
    callback(list[index], index);
  }
};

const updatePercentages = () => {
  // calculate the percentages
  budgetCtrl.calculatePercentages();

  // read percentages from the budgetControler
  var percentages = budgetCtrl.getPercentages();

  //update the UI with the new percentage

  UIctrl.displayPercentages(percentages);
};

const updateBudget = () => {
  //1. calculate the budget
  budgetCtrl.calculateBudget();

  //2. return the budget
  const budget = budgetCtrl.getBudget();

  //3. Display the budget on the UI

  UIctrl.displayBudget(budget);
};

const addItem = () => {
  let input, newItem;

  // 1. Get the field input data
  input = UIctrl.getInput();

  if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
    //2. Add the item to the budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    //3. Add the item to the UI
    UIctrl.addListItem(newItem, input.type);

    //4. Clear the fields
    UIctrl.clearFields();

    //5. Calculate and update budget
    updateBudget();

    //6. update percentages
    updatePercentages();
  }
};

const deleteItem = () => {
  let itemId, spiltId, type, ID;

  itemId = e.target.parentNode.parentNode.parentNode.parentNode.id;

  if (itemId) {
    // inc-1
    spiltId = itemId.split("-");
    type = spiltId[0];
    ID = parseInt(spiltId[1]);

    // Delete the item from the data structure
    budgetCtrl.deleteItem(type, ID);

    // Delete the item from the UI
    UIctrl.deleteListItem(itemId);

    // Update and show the new budget
    updateBudget();

    // calculate the percentages
    updatePercentages();
  }
};

export { addItem, deleteItem, UIctrl, DOMstrings };
