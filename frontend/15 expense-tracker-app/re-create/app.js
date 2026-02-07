let expenses = [];  // Changed 'expense' to 'expenses' to indicate it's a list
let totalAmount = 0;

const categorySelect = document.getElementById("category-select");
const amountInput = document.getElementById("amount-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const expenseTableBody = document.getElementById("expense-table-body");
const totalAmountCell = document.getElementById("total-amount");

addBtn.addEventListener("click", () => {
  const category = categorySelect.value;
  const amount = Number(amountInput.value);
  const date = dateInput.value;

  if (category === "") {
    alert("Please select a category.");
    return;
  }
  if (date === "") {
    alert("Please select a date.");
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  const newExpense = { category, amount, date };
  expenses.push(newExpense);

  totalAmount += amount;
  totalAmountCell.textContent = totalAmount;

  const newRow = expenseTableBody.insertRow();
  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  
  deleteBtn.addEventListener("click", () => {
    const index = expenses.indexOf(newExpense);
    if (index !== -1) {
      expenses.splice(index, 1);
      totalAmount -= amount;
      totalAmountCell.textContent = totalAmount;
      expenseTableBody.removeChild(newRow);
    }
  });

  categoryCell.textContent = category;
  amountCell.textContent = amount;
  dateCell.textContent = date;
  deleteCell.appendChild(deleteBtn);
});



// Render existing expenses (if any)
for (const exp of expenses) {
  totalAmount += exp.amount;
  totalAmountCell.textContent = totalAmount;

  const newRow = expenseTableBody.insertRow();
  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    const index = expenses.indexOf(exp);
    if (index !== -1) {
      expenses.splice(index, 1);
      totalAmount -= exp.amount;
      totalAmountCell.textContent = totalAmount;
      expenseTableBody.removeChild(newRow);
    }
  });

  categoryCell.textContent = exp.category;
  amountCell.textContent = exp.amount;
  dateCell.textContent = exp.date;
  deleteCell.appendChild(deleteBtn);
}
