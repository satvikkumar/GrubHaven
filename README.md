# GrubHaven 
GrubHaven(Digital Restaurant Management System) is an intelligent management app that allows customers and the restaurant owners to simplify their interaction. On the customer home page, the customer can select the city(e.g., Bangalore), and then it shows the top
reviews for the restaurants in that particular city. It also provides the customer with a list of restaurants they can choose from, depending on their preference. The customer can also 
check on the table availability in the restaurant and, if available, can reserve tables for themselves. Otherwise, the customer is added to a waiting queue. The customers can also 
enter the ingredient names and the app recommends/suggests a dish that can be prepared with those ingredients. After having decided the dish they want, they can place the order and proceed to the billing section. 
The entire process also involves an OTP, which is supplied to the customer once they enter the restaurant by the manager, and this can be used for authentication while placing orders and also when the customer is done and the table is to be freed.
The app also has an interface for the restaurant owners, where it helps them to manage everything related to their services like maintenance of inventory and staff, placing supply orders, view reservations, manage customer orders, etc.

App Prototyping: Figma

GrubHaven Tech stack:
Front End (View): AngularJS/ TypeScript
Back End (Controller): NodeJs, Python(Sentiment Analysis & Realtime Restaurant Recommender)
Database (Model): MongoDB/Mongoose

The entire tech stack was built using the Ionic framework mainly because:
 - Performance obsessed
 - Native focused
 - Utilizes AngularJS to build the frontend

Additionally, the User View needed to be via both an andriod/ios app & a Web App. Ionic with Cordova enables easier .apk * .ipa app builds.
We used JWT(JSON Web Token) & a basic Authentitcation mechanism to login,store & transport user credentials securely.
Realtime Payment Partner Integration: Paytm Payments

Following various software design patterns, 7 step SDLC life cycle and a scrum development methodolgy, GrubHaven - your favourite all-in-one restaurant app was conceived.


# Usage
## Server
 - Install NodeJS & MongoDB
 - Start the mongodb service
 - clone this repository `git clone https://github.com/satvikkumar/GrubHaven`
 - `cd GrubHaven` 
 - `npm install`
 - `npm run debug`

## Client
Checking

# License
// TODO
