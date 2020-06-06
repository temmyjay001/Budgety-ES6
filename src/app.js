import { addItem, deleteItem, UIctrl, DOMstrings } from "./functions/functions";

class App {
  constructor() {
    console.log("Application has started");
    UIctrl.displayMonth();

    UIctrl.displayBudget({
      budget: 0,
      totalInc: 0,
      totalExp: 0,
      percentage: -1,
    });

    this.EventListener();
  }

  EventListener() {
    document
      .querySelector(DOMstrings.inputButton)
      .addEventListener("click", addItem);

    document.addEventListener("keypress", (e) => {
      if (e.keyCode === 13 || e.which === 13) {
        addItem();
      }
    });

    document
      .querySelector(DOMstrings.container)
      .addEventListener("click", deleteItem);

    document
      .querySelector(DOMstrings.inputType)
      .addEventListener("change", UIctrl.changedType);
  }
}

new App();
