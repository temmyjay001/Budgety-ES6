// BUDGET CONTROLLER
var budgetController = (function () {
    var Expense = function (id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
      this.percentage = -1;
    };
  
    Expense.prototype.calcPercentage = function (totalIncome) {
      if (totalIncome > 0) {
        this.percentage = Math.round((this.value / totalIncome) * 100);
      } else {
        this.percentage = -1;
      }
    };
  
    Expense.prototype.getPercentage = function () {
      return this.percentage;
    };
  
    var Income = function (id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };
  
    var data = {
      allItems: {
        exp: [],
        inc: [],
      },
      totals: {
        exp: 0,
        inc: 0,
      },
      budget: 0,
      percentage: -1,
    };
  
    var calculateTotal = function (type) {
      var sum = 0;
  
      data.allItems[type].forEach(function (current, index, array) {
        sum += current.value;
      });
  
      data.totals[type] = sum;
    };
  
    return {
      addItem: function (type, des, val) {
        var newItem, ID;
  
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
      },
  
      calculateBudget: function () {
        // calcualte total income and expenses
        calculateTotal("exp");
        calculateTotal("inc");
  
        // calculate the budget: income - expenses
        data.budget = data.totals.inc - data.totals.exp;
  
        // calculate the percentage of income that we spent
        if (data.totals.inc > 0) {
          data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
        } else {
          data.percentage = -1;
        }
      },
  
      calculatePercentages: function () {
        data.allItems.exp.forEach(function (current) {
          current.calcPercentage(data.totals.inc);
        });
      },
  
      getPercentages: function () {
        var allPerc = data.allItems.exp.map(function (current) {
          return current.getPercentage();
        });
        return allPerc;
      },
  
      getBudget: function () {
        return {
          budget: data.budget,
          totalInc: data.totals.inc,
          totalExp: data.totals.exp,
          percentage: data.percentage,
        };
      },
  
      deleteItem: function (type, id) {
        var index, ids;
  
        ids = data.allItems[type].map(function (current) {
          return current.id;
        });
  
        index = ids.indexOf(id);
  
        if (index !== -1) {
          data.allItems[type].splice(index, 1);
        }
      },
  
      testing: function () {
        console.log(data);
      },
    };
  })();
  
  // UI CONTROLLER
  var UIController = (function () {
    var DOMstrings = {
      inputType: ".add__type",
      inputDescription: ".add__description",
      inputValue: ".add__value",
      inputButton: ".add__btn",
      incomeContainer: ".income__list",
      expensesContainer: ".expenses__list",
      budgetLabel: ".budget__value",
      incomeLabel: ".budget__income--value",
      expenseLabel: ".budget__expenses--value",
      percentageLabel: ".budget__expenses--percentage",
      container: ".container",
      expensesPercentageLabel: ".item__percentage",
      dateLabel: ".budget__title--month",
    };
  
    var formatNumber = function (num, type) {
      var numSplit, int, dec;
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
  
    var nodeListForEach = function (list, callback) {
      for (let index = 0; index < list.length; index++) {
        callback(list[index], index);
      }
    };
  
    return {
      getInput: function () {
        return {
          type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
  
          description: document.querySelector(DOMstrings.inputDescription).value,
  
          value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
        };
      },
  
      addListItem: function (obj, type) {
        var html, newHtml, element;
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
      },
  
      getDOMstrings: function () {
        return DOMstrings;
      },
  
      deleteListItem: function (selectorID) {
        var element = document.getElementById(selectorID);
        element.parentNode.removeChild(element);
      },
  
      clearFields: function () {
        var fieldsArray, fields;
  
        fields = document.querySelectorAll(
          DOMstrings.inputDescription + "," + DOMstrings.inputValue
        );
  
        fieldsArray = Array.prototype.slice.call(fields);
  
        fieldsArray.forEach(function (current, index, array) {
          current.value = "";
        });
  
        fieldsArray[0].focus();
      },
  
      displayBudget: function (obj) {
        var type;
  
        obj.budget > 0 ? (type = "inc") : (type = "exp");
  
        document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(
          obj.budget,
          type
        );
        document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(
          obj.totalInc,
          "inc"
        );
        document.querySelector(
          DOMstrings.expenseLabel
        ).textContent = formatNumber(obj.totalExp, "exp");
  
        if (obj.percentage > 0) {
          document.querySelector(DOMstrings.percentageLabel).textContent =
            obj.percentage + "%";
        } else {
          document.querySelector(DOMstrings.percentageLabel).textContent = "--";
        }
      },
  
      displayPercentages: function (percentages) {
        var fields = document.querySelectorAll(
          DOMstrings.expensesPercentageLabel
        );
  
        nodeListForEach(fields, function (current, index) {
          if (percentages[index] > 0) {
            current.textContent = percentages[index] + "%";
          } else {
            current.textContent = "---";
          }
        });
      },
  
      displayMonth: function () {
        var now, month, year;
  
        now = new Date();
        months = [
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
      },
  
      changedType: function () {
        var fields = document.querySelectorAll(
          DOMstrings.inputType +
            "," +
            DOMstrings.inputDescription +
            "," +
            DOMstrings.inputValue
        );
  
        nodeListForEach(fields, function (cur){
          cur.classList.toggle('red-focus');
        })
  
        document.querySelector(DOMstrings.inputButton).classList.toggle('red');
      },
    };
  })();
  
  // GLOBAL APP CONTROLLER
  var controller = (function (budgetCtrl, UIctrl) {
    var setupEventListener = function () {
      var DOM = UIctrl.getDOMstrings();
      document
        .querySelector(DOM.inputButton)
        .addEventListener("click", ctrlAddItem);
  
      document.addEventListener("keypress", function (e) {
        if (e.keyCode === 13 || e.which === 13) {
          ctrlAddItem();
        }
      });
  
      document
        .querySelector(DOM.container)
        .addEventListener("click", ctrlDeleteItem);
  
      document
        .querySelector(DOM.inputType)
        .addEventListener("change", UIctrl.changedType);
    };
  
    var updatePercentages = function () {
      // calculate the percentages
      budgetCtrl.calculatePercentages();
  
      // read percentages from the budgetControler
      var percentages = budgetCtrl.getPercentages();
  
      //update the UI with the new percentage
  
      UIctrl.displayPercentages(percentages);
    };
  
    var updateBudget = function () {
      //1. calculate the budget
      budgetCtrl.calculateBudget();
  
      //2. return the budget
      var budget = budgetCtrl.getBudget();
  
      //3. Display the budget on the UI
  
      UIctrl.displayBudget(budget);
    };
  
    var ctrlAddItem = function () {
      var input, newItem;
  
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
  
    var ctrlDeleteItem = function (e) {
      var itemId, spiltId, type, ID;
  
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
  
    return {
      init: function () {
        console.log("Application has started");
  
        UIctrl.displayMonth();
  
        UIctrl.displayBudget({
          budget: 0,
          totalInc: 0,
          totalExp: 0,
          percentage: -1,
        });
  
        setupEventListener();
      },
    };
  })(budgetController, UIController);
  
  controller.init();
  