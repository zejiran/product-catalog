# Product Catalog App

Welcome to the Product Catalog App! This project is designed and developed as a full-stack application that provides a comprehensive catalog of products with various features for easy management.

<img width="80%" alt="home" src="https://github.com/zejiran/product-catalog/assets/30379522/2dcbc2ac-779a-4254-a03d-cd89f221bf4b">
<img width="40%" alt="detail" src="https://github.com/zejiran/product-catalog/assets/30379522/aaa1806b-bfa5-471a-9b50-08fd466a1ef0"><img width="40%" alt="create" src="https://github.com/zejiran/product-catalog/assets/30379522/9d688188-e927-4581-a6b6-a3ebd13ab4d5">

## Table of Contents

- [Product Catalog App](#product-catalog-app)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Requirements](#requirements)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Configuration](#configuration)
      - [Backend Configuration](#backend-configuration)
      - [Frontend Configuration](#frontend-configuration)
  - [Usage](#usage)
  - [License](#license)

## Introduction

This project aims to create a user-friendly product catalog with the following key features:

- List products with pagination and search functionality.
- Create new products and view them in the catalog.
- Edit existing products.
- Preview detailed information of a product.
- Maintain a history of price and stock changes for each product.

## Features

1. **Product Listing:**
   - View a paginated list of products.
   - Utilize a search feature to find specific products.

2. **Product Management:**
   - Create new products with details such as name, description, SKU, image, tags, price, and stock.
   - Edit existing products to update their information.
   - Delete products from the catalog.

3. **Product Details:**
   - View detailed information about a product.
   - Decide whether to edit or delete a product from the product details page.

4. **Database History:**
   - The system maintains a history of price and stock changes for each product, allowing for tracking changes over time.

## Requirements

To run this project, you'll need the following:

- Node.js and npm installed on your system. You can download them from [nodejs.org](https://nodejs.org/).
- MongoDB installed and running as the database server.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/zejiran/product-catalog.git
   ```

2. Navigate to the project directory:

   ```bash
   cd product-catalog
   ```

3. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

4. Install frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

### Configuration

#### Backend Configuration

- In the `backend` directory, create a `.env` file with the following content according to your MongoDB configuration:
   ```
   MONGO_URI=mongodb://host:password/product-catalog
   ```

#### Frontend Configuration

- In the `frontend` directory, you can edit the `apiURL` in the code to point to your backend server:

   ```javascript
   const apiURL = 'http://localhost:3001/api/products';
   ```

## Usage

1. Start the Node.js backend server:

   ```bash
   cd backend
   npm start
   ```

   The backend will be available at `http://localhost:3001`.

2. Start the Angular frontend:

   ```bash
   cd frontend
   ng serve
   ```

   The frontend app will be available at `http://localhost:4200` in your web browser.

3. Use the application to manage your product catalog.

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](LICENSE)**
- Copyright 2023 © Juan Alegría
