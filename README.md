# 🛒 Amazon Clone - E-Commerce Web Application

![Amazon Clone](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

> A fully functional Amazon clone built with vanilla JavaScript, featuring modern e-commerce functionality and responsive design.

## 🌟 Live Demo
[Soon to be added!!!](https://github.com/Krishpatel-40/Amazon-Project-Javascript)
<!-- [View Live Demo](your-demo-link-here) | -->
 <!-- [GitHub Repository](https://github.com/yourusername/Amazon-Project-Javascript) -->

## 📸 Screenshots

### 🏠 Homepage
![Homepage](javascript-amazon-project-main\images\screenshots\image1.png)

### 🛍️ Shopping Cart
![Cart](javascript-amazon-project-main\images\screenshots\image2.png) 

### 📦 Order Tracking
![Tracking](javascript-amazon-project-main\images\screenshots\image3.png)

### 📦 Track Packages
![Track Packages](javascript-amazon-project-main\images\screenshots\image4.png)
## ✨ Features

### 🛍️ **Shopping Experience**
- Browse products with detailed information
- Add/remove items from cart
- Real-time cart quantity updates
- Responsive product grid layout

### 💳 **Checkout Process**
- Secure checkout flow
- Order summary with pricing breakdown
- Payment summary validation
- Order confirmation system

### 📦 **Order Management**
- Complete order history
- Real-time order tracking
- Package delivery status
- Progress bar visualization

### 🎨 **User Interface**
- Fully responsive design
- Mobile-first approach
- Clean and intuitive interface
- Amazon-inspired styling

## 🚀 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Date Management:** Day.js library
- **Storage:** Local Storage API
- **Architecture:** ES6 Modules
- **Async Operations:** Promises & Async/Await

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Krishpatel-40/Amazon-Project-Javascript.git
   cd Amazon-Project-Javascript
   ```

2. **Open with Live Server**
   ```bash
   # Using VS Code Live Server extension
   # Right-click on index.html and select "Open with Live Server"
   ```

3. **Or serve locally**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

4. **Open in browser**
   ```
   http://localhost:8000
   ```

## 📁 Project Structure

```
Amazon-Project-Javascript/
├── 📄 index.html                 # Homepage
├── 📄 checkout.html             # Checkout page
├── 📄 orders.html               # Order history
├── 📄 tracking.html             # Package tracking
├── 📁 styles/
│   ├── 🎨 shared/
│   │   ├── general.css
│   │   └── amazon-header.css
│   ├── 🎨 pages/
│   │   ├── amazon.css
│   │   ├── checkout.css
│   │   └── orders.css
├── 📁 scripts/
│   ├── 🔧 amazon.js
│   ├── 🔧 checkout.js
│   ├── 🔧 order.js
│   ├── 🔧 tracking.js
│   └── 📁 utils/
│       ├── money.js
│       └── displaydate.js
├── 📁 data/
│   ├── 🗃️ products.js
│   ├── 🗃️ cart.js
│   └── 🗃️ orders.js
├── 📁 images/
│   ├── 🖼️ products/
│   └── 🖼️ icons/
└── 📄 README.md
```

## 🔧 Key Functionalities

### 🛒 Cart Management
```javascript
// Add items to cart with quantity
addToCart(productId, quantity);

// Calculate total cart quantity
calculateCartQuantity();

// Remove items from cart
removeFromCart(productId);
```

### 📦 Order Tracking
```javascript
// Real-time progress calculation
function calculateTrack(orderTime, deliveryTime) {
    const progress = (elapsedTime / totalDuration) * 100;
    return { percentage: progress, status: currentStatus };
}
```

### 💾 Data Persistence
```javascript
// Local storage integration
localStorage.setItem('cart', JSON.stringify(cart));
localStorage.setItem('orders', JSON.stringify(orders));
```

## 🎯 Core Features Implemented

- ✅ **Product Catalog** - Dynamic product loading
- ✅ **Shopping Cart** - Add, remove, update quantities
- ✅ **Checkout Process** - Multi-step checkout flow
- ✅ **Order Management** - Complete order history
- ✅ **Package Tracking** - Real-time delivery status
- ✅ **Responsive Design** - Mobile and desktop optimized
- ✅ **Local Storage** - Persistent data across sessions
- ✅ **Error Handling** - Robust async operations

## 🌟 Highlights

### 📱 **Responsive Design**
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interfaces

### ⚡ **Performance Optimized**
- Vanilla JavaScript (no heavy frameworks)
- Efficient DOM manipulation
- Optimized image loading

### 🔒 **Data Management**
- Local Storage persistence
- Modular code architecture
- ES6 import/export system

## 🚀 Future Enhancements

- [ ] User authentication system
- [ ] Product search and filtering
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Multiple payment methods
- [ ] Admin dashboard
- [ ] Backend API integration

## 👨‍💻 Author

**Krish Patel**
- GitHub: [@Krishpatel-40](https://github.com/Krishpatel-40)
- LinkedIn: [Krish Patel](https://www.linkedin.com/in/krish-patel-14062722b)


