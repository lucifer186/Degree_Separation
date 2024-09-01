# Friend Relationship App (Degree of Separation)

# Project Overview
The Friend Relationship App is a React web-based application designed to help users visualize their connections with friends through degrees of separation.
The app allows users to:

Login: Users can log in by providing their name, email, phone number, and city.
View Friends: Once logged in, users can see a list of their friends.
Add Friends: Users can add new friends from a dropdown list of other users who are not yet their friends.
Suggested Friends: The app suggests friends based on mutual connections, making it easy to expand the user’s social circle.
Degree of Separation: Users can select a suggested friend to view how they are connected through other friends, displayed as a "Degree of Separation."

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
-> `npm install react react-dom`
-> `npm install react-router-dom`
-> `npm install bootstrap`
-> `npm install react-bootstrap`

# Getting Started
1. Clone the Repository: Download the project files from the repository.
2. Install Dependencies: Run the commands listed above to install all the necessary software.
3. Run the App: Start the application by running the following command in your terminal:
4. Run the command `npm start`.
Access the App: Open your web browser and go to http://localhost:3000 to view the app.

# Images:


# Summary
This app is designed to help you visualize and expand your social network by understanding the connections between you and others.
It’s user-friendly and provides a clear picture of how you are connected to friends of friends, making it easier to form new relationships.







