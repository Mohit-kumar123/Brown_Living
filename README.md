# BROWN_LIVING Node.js/Express Service

This is a simple Node.js/Express backend with two APIs:

- **GET /products**: Returns a hardcoded list of products (id, name, price).
- **POST /cart**: Accepts a product ID and quantity, returns the total price.

## How to Run

1. Install dependencies:
   ```powershell
   cd BROWN_LIVING
   npm install
   ```
2. Start the server:
   ```powershell
   npm start
   ```
3. Test APIs:
   - GET http://localhost:5000/products
   - POST http://localhost:5000/cart
     - Body: `{ "productId": 1, "quantity": 2 }`

## Tech Stack
- Node.js
- Express
- (MERN stack can be extended with MongoDB, React, etc. if required)

---

