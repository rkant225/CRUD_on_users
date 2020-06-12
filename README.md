# CRUD_on_users

## Steps to launch the application :
1. Clone the Github repo on your local machine.
2. There are two separate folders one for SERVER and other for CLIENT.
3. First navigate into SERVER via terminal and run command "$npm
install" to install all the dependencies, and finally run command
"$npm start" to launch the server.
4. Now repeat same procedure with CLIENT folder, navigate into CLIENT
via terminal and run command "$npm install" to install all the
dependencies, and finally run command "$npm start" to launch the
client app.
5. Now, If every things goes well your app will be up and running.



## I want to highlight few points, regarding this application.:
1. I have created both server and client for this application to
achieve the requested functionality.
2. For server I have used Json-Server which is running at port 3001.
3. For client I have used React JS which is running at port 3000.
4. In client to implement routing I have used react-router.
5. This application is based on Redux based architecture for state management.
6. For capturing user detail from UI I have used redux-form also I
have use it for UI field validation.
7. there are multiple validations which I have added to Fields :
a.) Age must be a number.
b.) Mobile number must be a number and it's length must be 10 or more.
c.) Address's length must be 10 or more.
d.) Email must be valid
e.) PIN must be number with length of 6
f.) All fields are required.
8.) This application have all the requested functionalities :
a.) We can add a new user by clicking on "Add user" button in home
page at the bottom of User's table.
b.) We can view the details of a user by clicking on "View" button,
Details will be displayed via Modal.
c.) We can edit the existing user, by clicking on "Edit" button, here
all the details will be pre-populared in UI.
d.) We can delete an existing user, To confirm the delete operation a
Modal will be presented in front of user, Here user can cancel the
operation or he/she can go ahead and delete the user.
9.) For styling I have used the Semantic-UI.
