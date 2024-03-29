# RV'n B

![](https://media.giphy.com/media/9XbAvWLnzffDFLagQe/giphy.gif)

## Intro
This application provides a platform for users to find RVs to rent in Texas.  Users must complete a Ruby on Rails authentication process to enter the website.  Once logged in, users are able to rent an RV and provide a review of their experience.  This app uses a Ruby on Rails backend, PostgreSQL Database, and React frontend.  Here is a walkthrough <a href="https://www.youtube.com/watch?v=vVlZN3wpy3c">video</a> of the app and a technical <a href="https://medium.com/@jfc0053/rvn-b-8a7b214bc162">blogpost</a>.


## User Journey
When users arrive at RV'n B, they are able to Login or Signup to the website.  After logging in, they can survey the available RVs to rent on the "Vehicles" page.  Users can filter the RVs by region (TX only) and they can "like" the RVs that tickle their fancy.  Users can then click on the RV they like and view the existing reviews provided by the other users on the website.  If the user wants to rent it, they click the "Rent Now" button which produces a POST request to the backend.  The user is then redirected to their UserProfile page where they can reflect on their rental and provide a review to help other users guide their choice of RV rental.  The user has full CRUD capability with the review; they can create, read, update, and delete their reviews.  

## Supporting Tech

As stated before, this features a Ruby on Rails backend, PostgreSQL Database, and a React.js frontend using functional components and react-router-dom:
- Ruby "2.7.4"
- Rails '~> 6.1.3', '>= 6.1.3.2'
- PostgreSQL '~> 1.1'
- React "^17.0.2"
- React-router-dom "^6.3.0"
- NodeJS (v16), and npm
- Heroku CLI
- Material UI "^5.8.3"
---there's plenty of other dependencies, be sure to check them out (package.json & Gemfile, respectively) in the [GitHub] repo if you have any questions.

## Installation

Check above for the supporting tech.  Make sure you have those versions installed on your local machine.  

```sh
git clone git@github.com:jcabot01/phase-4-project.git
cd phase-4-project
bundle install
npm install --prefix client
```

You can use the following commands to run the application:

- run the backend on http://localhost:3000
 ```sh 
rails s
```
- run the frontend on http://localhost:4000
```sh
npm start --prefix client
```

## Deployment
You can access the deployed app here: https://cabot-rv-n-b.herokuapp.com/

## Planning and Design Deck
Here is the Canva link to the design deck that I made prior to coding: <a href="https://www.canva.com/design/DAFC67OtvSY/rrPF-X8-SlDR9N1QxdfZTg/view?utm_content=DAFC67OtvSY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Design Deck</a>

Thank you for reading!

## License

MIT


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [GitHub]: <https://github.com/jcabot01/phase-4-project.git>

