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

**Objective:** To create a functioning rails project with front-end authentication

### Phase 2: Models (1 day)

**Objective:** To build complete business, review, photo, and category models, including associations and validations.

### Phase 3: Seed Database (1 day)
**Objective** To seed database.
* To give Users randomly generated names
* To create drink-related Categories, selected from [Yelp's category list]: https://www.yelp.com/developers/documentation/v2/category_list
* To take real-world data from Yelp's Fusion API to generate Businesses, Reviews, and Photos based on the selected drink-related Categories, and attributing them to random Users

### Phase 3: Search Bar (1 day)
**Objective** To render top search results into dropdown list and navigation pages as user types in a search term.


### Bonus Features (TBD)
- [ ] Personal profiles
- [ ] Performance and Scaling
- [ ] Specs
