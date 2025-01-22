// Für den User Service
const userDb = db.getSiblingDB("user_service"); // Datenbank für den User Service

// Benutzer-Sammlung erstellen
userDb.createCollection("users");

// Dummy-Benutzerdaten einfügen
userDb.users.insertMany([
  {
    username: "testuser1",
    email: "testuser1@example.com",
    password: "$2b$12$0IxPDAKzvTca1AmXS291juJoH5AQSRxzAwWkTHfB5H7CbE6WduOzi", // password123
    createdAt: new Date()
  },
  {
    username: "testuser2",
    email: "testuser2@example.com",
    password: "$2b$12$N7OyZOdlaxbnb.6EdAK9cevs7jiLYgygRHYRx0i1gREkm1ixq5PiS", // securepass456
    createdAt: new Date()
  }
]);

// Für den Product Service
const productDb = db.getSiblingDB("store"); // Datenbank für den Product Service

// Produkte-Sammlung erstellen
productDb.createCollection("products");

// Dummy-Produktdaten einfügen
productDb.products.insertMany([
  {
    description: "A compact and fast external SSD",
    name: "External SSD new",
    price: 149.99,
    stock_quantity: 60,
    stock_status: "inStock"
  },
  {
    description: "A powerful gaming console with 1TB storage",
    name: "Gaming Console",
    price: 499.99,
    stock_quantity: 0,
    stock_status: "outOfStock"
  },
  {
    description: "A high-resolution 4K monitor",
    name: "Monitor",
    price: 399.99,
    stock_quantity: 20,
    stock_status: "lowStock"
  },
  {
    description: "A sleek and durable wireless mouse",
    name: "Mouse",
    price: 49.99,
    stock_quantity: 200,
    stock_status: "inStock"
  },
  {
    description: "An ergonomic mechanical keyboard",
    name: "Keyboard",
    price: 89.99,
    stock_quantity: 75,
    stock_status: "inStock"
  }
]);
