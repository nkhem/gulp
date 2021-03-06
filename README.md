# Gulp

[On Heroku][heroku]

[heroku]: https://nkhem-gulp.herokuapp.com

## Minimum Viable Product

Gulp is a web application inspired by Yelp built using a PostgreSQL database, Ruby on Rails on the backend,
and React/Redux on the front. By May 1st, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- Hosting on Heroku
- Authentication: new account creation, login, and guest/demo login using BCrypt
- Business Page: displays business info, map with business location marker, list of reviews, and new review form. Allows for the editing of reviews associated with the currently logged-in user.
- Search Bar: provides dropdown autocomplete suggestions as you type
- Reviews/Ratings: CRUD capable
- Search Results Page: displays Google map with business location markers based on top search results
- Production README

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

### Phase 4: Search Bar (1 day)
**Objective** To render top search results into dropdown list and navigation pages as user types in a search term.

### Phase 5: Business Search Results Page (1 day)
**Objective** To display list of businesses when user submits search term.

### Phase 6: Business Detail Page (1 day)
**Objective** To display business show page when user's search matches a business name.

### Phase 7: Reviews (2 days)
**Objective** To display business reviews on business show page, and allow user to write reviews if they're logged in.

### Phase 8: Maps (2 days)
**Objective** To display a map on the search results page and the business show page, with information boxes that display business info on mouseover.

### Phase 9: CSS (4 days)
**Objective** To make things pretty.

### Phase 10: Add CRUD capabilities to reviews (2 days)
**Objective** To allow users to create, edit and delete reviews associated with their account.

### Phase 11: Personal Profile Page (1 day)
**Objective** To display list of reviews associated with the current user's account on their personal profile page.


### Bonus Features (TBD)
- [X] Personal profiles
- [ ] Responsiveness
- [ ] Performance and Scaling
- [ ] Specs
