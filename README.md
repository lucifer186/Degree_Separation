# Friend Relationship App (Degree of Separation)

# Project Overview
The Friend Relationship App is a React web-based application designed to help users visualize their connections with friends through degrees of separation.
The app allows users to:

1. Login: Users can log in by providing their name, email, phone number, and city.
2. View Friends: Once logged in, users can see a list of their friends.
3. Add Friends: Users can add new friends from a dropdown list of other users who are not yet their friends.
4. Suggested Friends: The app suggests friends based on mutual connections, making it easy to expand the user’s social circle.
5. Degree of Separation: Users can select a suggested friend to view how they are connected through other friends, displayed as a "Degree of Separation."

# How the App Works
When you log in, the app checks if your details already exist. If not, it saves your information and logs you in.
You can see your friends and suggested friends, who are other users with mutual friends.
The app allows you to add friends easily by selecting them from a dropdown menu.
When you click on a suggested friend, the app shows how you are connected to them through mutual friends, using a "Degree of Separation" feature.

# Example
If John is friends with Jane, and Jane is friends with Bob, then John and Bob are connected through a degree of separation via Jane.

# Dependencies
To run this app, you will need to install the following software and libraries:

1. React: The app is built using React, a popular JavaScript library for building user interfaces.
2. React Router: This library is used to manage the navigation between different pages in the app, like the login page and the home page.
3. Bootstrap: Bootstrap is used to style the app, making it look clean and responsive.
4. React-Bootstrap: This library allows us to use Bootstrap components in React easily.

# Installing Dependencies
To install the necessary dependencies, run the following commands:
1. `npm install react react-dom`
2. `npm install react-router-dom`
3. `npm install bootstrap`
4. `npm install react-bootstrap`

# Getting Started
1. Clone the Repository: Download the project files from the repository.
2. Install Dependencies: Run the commands listed above to install all the necessary software.
3. Run the App: Start the application by running the following command in your terminal:
4. Run the command `npm start`.
Access the App: Open your web browser and go to http://localhost:3000 to view the app.

# Images:
1. Login Page
 ![login_page](https://github.com/user-attachments/assets/79a65b06-90ea-47f3-9d36-2b28de2e9c33)
2. Main Page. 
--Brief Details--

1. Header represent the cuurent user who logged In with city.
2. In right side Other user logged-In show total users who logged In this app.
3. In Left side one drop down button where you add friend so once you click it add the user_name in friend list below drop down button.
4. Suggestion friend means some one is mutual friend in your friend list that's why it showing suggestion friend."
5. When you click the suggestion friend list it show how they are connected to each other in degree of separation details.
![home_page](https://github.com/user-attachments/assets/5416f86f-b398-494f-a04b-a1bc1e69eb40)

# Summary
This app is designed to help you visualize and expand your social network by understanding the connections between you and others.
It’s user-friendly and provides a clear picture of how you are connected to friends of friends, making it easier to form new relationships.







