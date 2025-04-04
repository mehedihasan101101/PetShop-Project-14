**Live Link:** https://mehedihasan101101.github.io/PetShop-Project-14/

# **PetShop Project**

The **PetShop Project** is a dynamic and interactive web application designed to help users explore, adopt, and learn more about pets. It provides a seamless user experience with modern **JavaScript (ES6)** features, responsive design, and API integration.

---

## **Features**

### **Dynamic Pet Listing**
- Fetches pet data from an external API and dynamically displays it on the page.
- Displays essential details like **name, breed, date of birth, gender, price, vaccination status, and image**.

### **Sorting**
- Allows users to **sort pets by price** in descending order.
- Toggles between sorted and original data.

### **Category Filtering**
- Users can filter pets by categories such as **Dogs, Cats, Birds, Rabbits**, or view all pets.

### **Like Functionality**
- Users can "like" a pet, and the liked pets are displayed in a separate section.

### **Adopt Functionality**
- Users can adopt a pet, which **disables the button** and shows a **"Congrats" modal with a countdown timer**.

### **View Pet Details**
- Clicking the **"Details" button** opens a modal with detailed information about the selected pet.

### **Responsive Design**
- Fully responsive layout that adapts to different screen sizes, including **mobile, tablet, and desktop**.

---

## **JavaScript Features**

### **Dynamic Rendering**
- Pet data is fetched from an API and dynamically rendered into the DOM.

### **ES6 Features**
- Uses modern JavaScript features like **arrow functions, template literals, destructuring, and the spread operator**.

### **Asynchronous Programming**
- Uses **async/await** and **Promises** to handle API calls and asynchronous operations.

### **Error Handling**
- Implements **try...catch** blocks and **.catch()** methods to handle errors gracefully and provide user-friendly feedback.

### **Event Delegation**
- Efficiently handles events for dynamically created elements like buttons.

### **Sorting and Filtering**
- Sorts pets by **price** and filters them by **category** dynamically.

---

## **API Integration**
The project integrates with an external API to fetch pet data dynamically.

### **Endpoints:**
#### **Fetch All Pets:**
- **URL:** `https://openapi.programming-hero.com/api/peddy/pets`
- Used to fetch all pet data.

#### **Fetch Pet by ID:**
- **URL:** `https://openapi.programming-hero.com/api/peddy/pet/{petId}`
- Used to fetch detailed information about a specific pet.

#### **Fetch Pets by Category:**
- **URL:** `https://openapi.programming-hero.com/api/peddy/category/{category}`
- Used to fetch pets based on the selected category.

---

## **Error Handling**
The project ensures robust error handling by:
- **Catching errors** during API calls.
- Displaying **user-friendly error messages** when something goes wrong.
- **Logging errors** for debugging purposes.

---

## **Responsive Design**
- The application is **fully responsive**, ensuring a seamless experience across all devices.
- The **Pet Details Modal** is scrollable and adapts to different screen sizes, ensuring all content is visible.

---

## **Technologies Used**

### **Frontend:**
- **HTML5** – Structure of the web application.
- **CSS3 (Tailwind CSS)** – Styling for the layout, buttons, modals, and responsiveness.
- **JavaScript (ES6)** – Core functionality, including API integration, DOM manipulation, and event handling.

### **API:**
- **External API** for fetching pet data dynamically.

### **Tools:**
- **Google Fonts** – For typography.
- **Tailwind CSS** – For responsive and modern styling.

---

## **Conclusion**
The **PetShop Project** is a modern, interactive web application that demonstrates the power of **JavaScript (ES6)** and **responsive design**. It provides a seamless user experience for **exploring, adopting, and learning more about pets**. The **modular and reusable codebase** ensures **scalability** and **maintainability** for future enhancements.

🚀 **Happy Coding!** 🎉

