# Full Stack Food Ordering App (MERN)

## About The Project

This is a full stack food/grocery ordering application built using the MERN (MongoDB, Express, React, Node) stack. It allows users to sign up, log in, create new orders, view order history, update their account information, and delete their account. The communication between the frontend and backend is done via AJAX, and token-based authentication is implemented using Jsonwebtoken, react-router-dom, and bcrypt.

## Features

* User sign up: Users can create an account by providing their name, email, and password.
* User login: Users can log in to their account using their email and password.
* Create new order: Authenticated users can create new food orders.
* View order history: Users can view their order history to track their previous orders.
* Update account information: Users can update their account information, such as name and email.
* Delete account: Users have the option to delete their account if they no longer want to use the app.



## Prerequisites

Before running the app, ensure you have the following installed: 
* Node.js
* MongoDB 

## Dependencies

The application uses the following dependencies:

- Express: Web framework for Node.js.
- Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.
- Jsonwebtoken: Library for generating and verifying JSON web tokens.
- React: JavaScript library for building user interfaces.
- React-router-dom: Library for routing in React applications.
- Bcrypt: Library for hashing and salting passwords.




## Getting Started - Setup & Running app
1. Clone the repository to your local machine.
2. Install the dependencies by running npm install in the project root directory.
3. Configure the MongoDB connection in the config/database.js file.
4. Install the dependencies: npm install 
5. Seed the database: node seed.js 
6. Start the backend server: nodemon server
7. Start the frontend server: npm start
8. Open your web browser and access the application at http://localhost:3000


## App Structure 
* |** Food/Grocery ordering App
    *  config
        - checkToken.js: Middleware to check the validity of the authentication token.
        - database.js: Configuration file for connecting to the MongoDB database.
        - ensuredloggedIn.js: Middleware to ensure that the user is logged in before accessing certain  routes.

    * |**controllers/api - Contains controllers for handling API requests related to items, orders, and users.
        - items.js: Controller for handling API requests related to items.
        - orders.js: Controller for handling API requests related to orders.
        - users.js: Controller for handling API requests related to users.

    * |** models - Contains the Mongoose models for the application.
        - category.js: Model for representing food categories.
        - item.js: Model for representing food items.
        - itemSchema.js: Schema for the item model.
        - order.js: Model for representing orders.
        - user.js: Model for representing users.

    * |** routes/api - Contains the API routes for items, orders, and users.
        - items.js: API routes for handling requests related to items.
        - orders.js: API routes for handling requests related to orders.
        - users.js: API routes for handling requests related to users.

    * |** src/ components - Contains the React components used in the frontend.
        - CategoryList: Component for displaying the list of food categories.
        - LineItem: Component for displaying a single food item.
        - LogInForm: Component for the login form.
        - Logo: Component for the application logo.
        - MenuList: Component for displaying the menu list.
        - MenuListItem: Component for displaying a single menu item.
        - NavBar: Component for the navigation bar.
        - OrderDetail: Component for displaying the details of an order.
        - OrderList: Component for displaying the list of orders.
        - OrderListItem: Component for displaying a single order item.
        - SignUpForm: Component for the sign-up form.
        - UserLogOut: Component for logging out the user.

     * |** src/pages folder: Contains the React pages for different app functionalities
        - App.js: Main app component that handles routing and navigation.
        - AuthPage.js: Page for user authentication (login and signup).
        - NewOrderPage.js: Page for creating a new order.
        - OrderHistoryPage.js: Page for viewing order history.
        - UpdateUserPage.js: Page for updating user account information.

    * |** src/utilities folder: Contains utility functions and API service files.
        - items-api.js: API service file for handling requests related to items.
        - order-api.js: API service file for handling requests related to orders.
        - send-request.js: Utility function for sending AJAX requests.
        - users-api.js: API service file for handling requests related to users.
        - users-service.js: Service file for user-related operations.

    * |** src folder:
        - app.js: Entry point for the frontend application.
        - index.css: CSS file for styling the application.
        - index.js: Entry point for rendering the React app.

    * |** seed.js: Script for seeding the MongoDB database with some initial data.
    * |** server.js: Entry point for the backend server.
 



## Additional features to be added
    - Blog Page for users to submit recipes 
    - Add weekly newsletter



## Acknowledgments

* [README Template](https://github.com/othneildrew/Best-README-Template/blob/master/BLANK_README.md?plain=1)
* [MongoDB](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/)
* [Mongoose](https://mongoosejs.com/)


### Contribution

Contributions to the project are welcome. If you find any issues or want to add new features, please create a new issue or submit a pull request.

#### Contact

Your Name - [Romy Jean-Pierre](romyjeanpierre@yahoo.com) - romyjeanpierre@yahoo.com



