# ecommerce Backend (Trabuwo Assignment)

This is a backend implementation for a simple B2C e-commerce homepage.

It includes REST APIs to fetch:
- Featured Categories
- Trending Products
- Best-Selling Products
- Banners/Ads

---

##  Tech Stack

- **Node.js** (runtime)
- **Express.js** (web framework)
- **MySQL** (relational database)
- **Postman** (for testing)
- **dotenv** (env config)
- **nodemon** (dev server)

---

## Project Structure

ecommerce/
├── controllers/ # Business logic
├── routes/ # Route definitions
├── models/ # DB connection
├── .env # Environment variables
├── app.js # App entry point
├── package.json
├── README.md


---

##  Setup & Run Locally

###  Clone the Repo
```bash
git clone https://github.com/your-username/b2c-backend.git
cd ecommerce

### install dependencies
npm install

### Now configure you .env file
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=marketplace
PORT=3000

### create mysql datatbase

CREATE DATABASE b2c_marketplace;

-- categories table
CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  image_url VARCHAR(255)
);

-- products table
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  category_id INT,
  price DECIMAL(10,2),
  is_trending BOOLEAN,
  is_best_selling BOOLEAN,
  image_url VARCHAR(255),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- banners table
CREATE TABLE banners (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100),
  image_url VARCHAR(255),
  link VARCHAR(255)
);

-- insert dummy data 


### Run The server

npm run dev

### check with postman

for example,
GET http://localhost:3000/api/featured-categories


### Status
Fully functional
Tested with Postman
Built with clean architecture

 ### Submission Info
GitHub Repo:  "https://github.com/sravanimarri/ecommerce-application"
Submitted for: Trabuwo Technologies