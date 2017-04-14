https://github.com/appacademy/curriculum/blob/master/full-stack-project/proposal/full-stack-project-proposal.md

# gulp

[On Heroku][heroku]

[On Trello][trello]

[heroku]: http://www.gulp.com/
[trello]: https://trello.com/b/Bow3TM3k/gulp

## Minimum Viable Product

Gulp is a web application inspired by Yelp built using Ruby on Rails
and React/Redux.  By May 1st, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- Hosting on Heroku
- Authentication: new account creation, login, and guest/demo login
- Business Page: displays business info, map with business location marker, list of reviews, and new review form
- Search Bar: provides dropdown autocomplete suggestions as you type
- Reviews/Ratings: CRUD capable
- Navigation Page: central map with up to ten business location markers based on top search results
- Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend Setup and Front End User Authentication (2 days)

**Objective:** To create a functioning rails project with front-end Authentication

### Phase 2: Models (.5 days)

**Objective:** To build complete business, review, photo, and tag models, controllers, and views (jbuilder)

### Phase 3: Home Page (1.5 days)

**Objective:** To set up a functioning home page with links to different cuisines

### Phase 4: Business Search (2 days)

**Objective:** To allow the user to search for businesses with location and cuisine, to set up a functioning search results page with links to different businesses, and to drop locations on a map

### Phase 5: Business Detail (2 days)

**Objective:** To set up a page with business details

### Phase 6: Reviews (2 days)

**Objective:** To allow the user to submit a review and view other reviews

### Bonus Features (TBD)
- [ ] Personal profiles
- [ ] Performance and Scaling
- [ ] Specs
