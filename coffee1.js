// Menu items
const menuItems = [
  { name: "coffee", price: "10RS" },
  { name: "GreenTea", price: "12RS" },
  { name: "BadamHot Milk", price: "20RS" },
  { name: "Mocha", price: "5RS" },
  { name: "Americano", price: "15RS" }
];

// Display menu
const menu = document.getElementById("menu");
menuItems.forEach((item, index) => {
  const menuItem = document.createElement("div");
  menuItem.className = "menu-item";
  menuItem.textContent = `${item.name} - ${item.price}`;
  menuItem.onclick = () => selectItem(item.name);
  menu.appendChild(menuItem);
});

// Order form and confirmation
const orderForm = document.getElementById("order-form");
const confirmation = document.getElementById("confirmation");
const selectedItemDisplay = document.getElementById("selected-item");
const buyButton = document.getElementById("buy-button");

// Show order form
function selectItem(itemName) {
  orderForm.classList.remove("hidden");
  selectedItemDisplay.textContent = itemName;
}

// Show confirmation message
buyButton.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  // Check if fields are filled
  if (!name) {
    alert("Name is a mandatory field. Please fill it in.");
    return;
  }
  if (!phone) {
    alert("Phone Number is a mandatory field. Please fill it in.");
    return;
  }
  if (!address) {
    alert("Address is a mandatory field. Please fill it in.");
    return;
  }

  // If all fields are filled
  orderForm.classList.add("hidden");
  confirmation.classList.remove("hidden");
});
