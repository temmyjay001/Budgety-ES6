import { DOMstrings } from "../Constants";
import { formatNumber, nodeListForEach } from "../functions/functions";

export default class UiControls {
  getInput() {
    return {
      type: document.querySelector(DOMstrings.inputType).value,
      // will be either inc or exp

      description: document.querySelector(DOMstrings.inputDescription).value,

      value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
    };
  }

  addListItem(obj, type) {
    let html, newHtml, element;
    // 1. create HTML string with placeholder text
    if (type === "inc") {
      element = DOMstrings.incomeContainer;
      html = `<div class="item clearfix" id="inc-%id%">
                  <div class="item__description">%description%</div>
                  <div class="right clearfix">
                    <div class="item__value">%value%</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
                </div>
    `;
    } else if (type === "exp") {
      element = DOMstrings.expensesContainer;
      html = `<div class="item clearfix" id="exp-%id%">
        <div class="item__description">%description%</div>
        <div class="right clearfix">
            <div class="item__value">%value%</div>
            <div class="item__percentage">21%</div>
            <div class="item__delete">
                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
            </div>
        </div>
    </div>
      `;
    }

    // 2. replace the placeholder text with actual data
    newHtml = html.replace("%id%", obj.id);

    newHtml = newHtml.replace("%description%", obj.description);

    newHtml = newHtml.replace("%value%", formatNumber(obj.value, type));

    //3. insert the HTML into the DOM
    document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
  }

  deleteListItem(selectorId) {
    const element = document.getElementById(selectorId);
    element.parentNode.removeChild(element);
  }

  clearFields() {
    //   const fieldsArray;
    const fields = document.querySelectorAll(
      DOMstrings.inputDescription + "," + DOMstrings.inputValue
    );

    fields.forEach((current, index, array) => {
      current.value = "";
    });

    fields[0].focus();
  }

  displayBudget(obj) {
    let type;

    obj.budget > 0 ? (type = "inc") : (type = "exp");

    document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(
      obj.budget,
      type
    );
    document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(
      obj.totalInc,
      "inc"
    );
    document.querySelector(DOMstrings.expenseLabel).textContent = formatNumber(
      obj.totalExp,
      "exp"
    );

    if (obj.percentage > 0) {
      document.querySelector(DOMstrings.percentageLabel).textContent =
        obj.percentage + "%";
    } else {
      document.querySelector(DOMstrings.percentageLabel).textContent = "--";
    }
  }

  displayPercentages(percentages) {
    const fields = document.querySelectorAll(
      DOMstrings.expensesPercentageLabel
    );

    nodeListForEach(fields, function (current, index) {
      if (percentages[index] > 0) {
        current.textContent = percentages[index] + "%";
      } else {
        current.textContent = "---";
      }
    });
  }

  displayMonth() {
    let now, month, year;

    now = new Date();
    const months = [
      "January",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    month = now.getMonth();

    year = now.getFullYear();
    document.querySelector(DOMstrings.dateLabel).textContent =
      months[month] + " " + year;
  }

  changedType() {
    var fields = document.querySelectorAll(
      DOMstrings.inputType +
        "," +
        DOMstrings.inputDescription +
        "," +
        DOMstrings.inputValue
    );

    nodeListForEach(fields, function (cur) {
      cur.classList.toggle("red-focus");
    });

    document.querySelector(DOMstrings.inputButton).classList.toggle("red");
  }
}
