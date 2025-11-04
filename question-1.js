// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity = 200;
inventory.orange = { price: 20, quantity: 300 };
/*
ลอง
inventory.orange = {};
inventory.orange.price = 20;
inventory.orange.quantity = 300;
console.log(inventory);
*/

let totalPrice = 0;
for (const fruit in inventory) {
  /*
  console.log(fruit);
  console.log(inventory[fruit]);
  console.log(inventory[fruit].price);
  */
  totalPrice += inventory[fruit].price;
}

console.log(`Total inventory value: ${totalPrice} baht`);
