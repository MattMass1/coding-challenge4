const products = [
  { name: "Wireless Headphones", category: "electronics", price: 120.0, inventory: 8 },
  { name: "Cotton T-Shirt",      category: "apparel",     price: 25.0,  inventory: 20 },
  { name: "Whole Wheat Bread",   category: "groceries",   price: 4.5,   inventory: 50 },
  { name: "Dish Soap",           category: "household",   price: 6.0,   inventory: 30 },
  { name: "Notebook",            category: "stationery",  price: 3.0,   inventory: 40 },
]

for (const product of products) {
  let categoryDiscount; // expressed as a decimal rate, 0.20 = 20% off
 
  switch (product.category) {
    case "electronics":
      categoryDiscount = 0.20; 
      break;
    case "apparel":
      categoryDiscount = 0.15; 
      break;
    case "groceries":
    case "household": 
      categoryDiscount = 0.10; 
      break;
    default:
      categoryDiscount = 0.0; 
      break; 
  }

 product.categoryDiscount = categoryDiscount;
  product.discountedPrice = +(product.price * (1 - categoryDiscount)).toFixed(2);
 
  console.log(
    `${product.name}: $${product.price.toFixed(2)} -> $${product.discountedPrice.toFixed(2)} ` +
    `(${categoryDiscount * 100}% category discount)`
  );
}




function getCustomerDiscount(customerType) {
  let extraDiscount;
 
  if (customerType === "student") {
    extraDiscount = 0.05; // 5% extra off total
  } else if (customerType === "senior") {
    extraDiscount = 0.07; // 7% extra off total
  } else {
    extraDiscount = 0.0; // regular customers get no extra discount
  }
 
  return extraDiscount;
}
 

const customers = [
  { type: "regular", cart: [ { name: "Wireless Headphones", qty: 1 }, { name: "Notebook", qty: 2 } ] },
  { type: "student", cart: [ { name: "Cotton T-Shirt", qty: 3 }, { name: "Whole Wheat Bread", qty: 1 } ] },
  { type: "senior",  cart: [ { name: "Dish Soap", qty: 2 }, { name: "Whole Wheat Bread", qty: 4 } ] },
];

function findProduct(name) {
  return products.find((p) => p.name === name);
}

let customerNumber = 1; 
let i = 0;
while (i < customers.length) {
  const customer = customers[i];
  let cartTotal = 0;
 
  // Cycle through the items in this customer's cart.
  for (const item of customer.cart) {
    const product = findProduct(item.name);
    if (!product) continue; 
 
       
    const quantitySold = Math.min(item.qty, product.inventory);
    cartTotal += product.discountedPrice * quantitySold;
 
    product.inventory -= quantitySold;
  }
 
  
  const extraDiscount = getCustomerDiscount(customer.type);
  const finalTotal = +(cartTotal * (1 - extraDiscount)).toFixed(2);


  // Display customer number and total cost.
  console.log(
    `Customer #${customerNumber} (${customer.type}): ` +
    `subtotal $${cartTotal.toFixed(2)}, ` +
    `extra ${Math.round(extraDiscount * 100)}% off -> total $${finalTotal.toFixed(2)}`
  );
 
  customerNumber++;
  i++;
}


const sampleProduct = products[0];
console.log(`Details for "${sampleProduct.name}" after discounts:`);
for (const key in sampleProduct) {
  console.log(`  ${key}: ${sampleProduct[key]}`);
}
 



console.log("Final product report (post-checkout):");
for (const product of products) {
  for (const [field, value] of Object.entries(product)) {
    console.log(`  ${field} => ${value}`);
  }
}