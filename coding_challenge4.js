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


