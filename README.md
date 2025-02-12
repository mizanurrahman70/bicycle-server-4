# Bi-Cycle-Storee - Order Management System

Welcome to the **Bi-Cycle-Store - Order Management System**! This application provides a streamlined process for managing product inventory, customer orders, and stock updates in your store.

---
## Projact live link :https://bicycle-store-mu.vercel.app/
# Bicycle API

This API allows you to manage bicycles, handle inventory, place orders, and calculate revenue from sales.

---

## **Endpoints**

### 1. **Create a Bicycle**
- **Endpoint:** `/api/products`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "Roadster 5000",
    "brand": "SpeedX",
    "price": 300,
    "type": "Road",
    "description": "A premium road bike designed for speed and performance.",
    "quantity": 20,
    "inStock": true
  }

**README**

**Bicycle Shop API**

This API provides endpoints for managing bicycle inventory, orders, and revenue calculations.

**Endpoints:**

### Product Endpoints

**2. Get All Bicycles**
* **Endpoint:** `/api/products`
* **Method:** GET
* **Response:** A list of all bicycles with details like name, brand, price, type, etc.
* **Query Parameter:** `searchTerm` (Optional) - Filter products by name, brand, or type.
  * Example: `/api/products?searchTerm=mountain`

**3. Get a Specific Bicycle**
* **Endpoint:** `/api/products/:productId`
* **Method:** GET
* **Response:** The details of a specific bicycle by its ID.

**4. Update a Bicycle**
* **Endpoint:** `/api/products/:productId`
* **Method:** PUT
* **Request Body:** Bicycle details to update (e.g., name, price, type, etc.)

**5. Delete a Bicycle**
* **Endpoint:** `/api/products/:productId`
* **Method:** DELETE
* **Response:** Success message confirming the bicycle has been deleted.

### Order Endpoints

**6. Order a Bicycle**
* **Endpoint:** `/api/orders`
* **Method:** POST
* **Inventory Management:**
  * When an order is placed, reduce the quantity of the product in the inventory.
  * If the quantity reaches zero, set the `inStock` flag to `false`.
  * If there's insufficient stock, return an appropriate error message.

**7. Calculate Revenue from Orders**
* **Endpoint:** `/api/orders/revenue`
* **Method:** GET
* **Aggregation:**
  * Use MongoDB aggregation pipeline to calculate the total revenue from all orders.
  * Multiply the price of each bicycle by the quantity ordered to get the total price.
* **Response:** The total revenue from all orders.

## Features

### Product Management
- Add, update, and delete products.
- Manage product inventory with automatic stock adjustments upon order placement.

### Order Management
- Place orders with product details, quantity, and total price.
- Validate stock availability before order creation.
- Automatically update product stock and in-stock status.

### Error Handling
- Centralized error-handling middleware for streamlined debugging and user feedback.
- Custom error messages for invalid requests or business logic violations.

---

## Database Integration
- **MongoDB** for reliable and efficient data storage.
- Data validation using **Mongoose** schema and interface types.

---

## Technology Stack
- **Backend Framework:** Node.js with Express.js
- **Database:** MongoDB
- **Validation:** Zod (for request validation)
- **Error Handling:** Centralized middleware
- **Language:** TypeScript

---

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js:** v14.x or higher
- **npm:** v6.x or higher
- **MongoDB:** A running instance or MongoDB Atlas connection

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/isaiful508/your-store-name-server.git](https://github.com/mizanurrahman70/Bi-Cycle-store.git)]
