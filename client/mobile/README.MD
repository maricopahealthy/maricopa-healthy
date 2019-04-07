# Maricopa Healthy Mobile Platform

## Proposal
#### Project Description
Maricopa Healthy is an existing mobile app that was originally launched in March 2016. It was built on a proprietary template, has very limited functionality and several unresolved bugs have decreased user retention and limit the product owner’s ability to promote the app. The goal of the app rebuild is to:
- Fix the existings bugs;
- Increase and improve app functionality;
- Promote user engagement; and
- Allow the app and its content to be easily shared and promoted by both users and the product owner. 

- From a technical perspective, the new Maricopa Healthy app must be:
- Built for iOS and Android platforms using an open-source framework;
- Compatible with mobile phones and tablets;
- Able to support previous versions of both platforms; and
- Capable of sharing individual database records as HTML content in a web view.

The following sections detail the features and related functionality of the mobile application rebuild: 

## Component Tree

## User Stories

#### Loading
###### Layout:
- When the app is launched, a loading screen will appear consisting of a solid background color.
- Loading Screen will include the Maricopa Healthy Logo and tag-line.
###### Functionality:
- Loading Screen will display an active revolving status icon indicating the app is working to complete loading.

#### Onboarding
###### Layout:
- Onboarding will display a Favorites screen including: Maricopa Healthy Logo, Favorites icon, tag-line, Sign-up Button, Login Button.
- Onboarding will display a Filters screen including: Maricopa Healthy Logo, Favorites icon, tag-line, Sign-up Button, Login Button.
- Onboarding will display a Notifications screen including: Maricopa Healthy Logo, Favorites icon, tag-line, Sign-up Button, Login Button.
- All onboarding screen swill display a carousel indicator to indicate active screen.

###### Functionality:
- On application launch, if no active User credentials are present, app will display a series of onboarding screens.
- On application launch, if active User credentials are present, User will be directed to the primary Home Screen.
- Onboarding screens will automatically cycle through display on a fixed timer.
- User will be able to actively cycle through onboarding screens via a left/right swiping gesture.
- User will be able to navigate directly to a screen by tapping a the carousel indicator dot.
- User will be able to login, or sign-up for a new account on the application.

#### Home Screen
###### Layout:
- Top navigation bar will display icons corresponding to: Settings, Search, Notifications, and Favorites, in addition to Maricopa Healthy title.
- Home Screen will display a list view of all application-level Features including: Markets, Recipes, Parks, Active, Events, Resources and Subscribe.
- List view cards will include corresponding title, and include a relevant image as background.

###### Functionality:
- Top navigation bar will allow users redirection to: Settings, Search, Notifications, and Favorites.
- Users will be allowed reduced functionality and navigation through Features depending on User credential status.

#### User Registration and Authentication
###### Layout
- User registration and authentication flow will include: Sign-up, Login, and Password Reset.
- On Sign-up launch, new user registration will display a pitch statement and a blank registration form.
- Sign-up will include a link to Maricopa Healthy Terms of Service and Privacy Policy.
- On Login launch, User will be prompted for an account email address and password.
- Login will display navigation features for 'Forgot your password' and new account registration.
- Forgotten password will include a 'Contact' link and an option to resend verification email.

###### Functionality
- User registration will include validation. If a user attempts to register with an incomplete form a dialog will appear prompting the user to complete the form.
- User registration will handle forgotten passwords via 2-step email and code verification.
- Upon sending a forgotten password email, user will be provided with a confirmation message.

#### Settings
###### Layout:
- Settings Home screen will display a list view of settings features including: Profile, Favorites, Notifications, Subscribe, About, Contact, Privacy Policy, Terms of Service.
- Settings Home screen will prompt users to login or register if no active credentials are present.
- Favorites will display a list view of all favorite-d content.
- Notifications will display a list view of all active notifications.
- Subscribe will display a list view of a User's active subscriptions.
- About will display several sections relating information to users about the content of the applications and the purpose of the Maricopa Healthy initiative.
- Contact will display contact information for Maricopa Healthy.
- Privacy Policy will display the Maricopa Healthy Privacy Policy.
- Terms of Service will display the Maricopa Healthy Terms of Service.

###### Functionality:
- On Profile launch, users without active credentials will be prompted to create an account.
- Users without active credentials will be allowed limited functionality and navigation to: Favorites, Notifications, Meetup, and Subscribe. The displays will allow users to navigate to the sign-in page to enable further functionality.
- Subscribe will allow users to register for a Maricopa Healthy subscription via a capture form.

#### Markets
###### Layout:

###### Functionality:

#### Recipes
###### Layout:
- Recipes Home screen will display a list view of all recipes tagged as "featured" in the database.
- Recipes Filter screen will display a set of features by which to filter including: Ingredient, Meal Type, Rating, and SortBy category.
- Recipes Record screen will display: recipe name, action buttons, Ingredients section, cooking Directions section, Nutrition Facts, and Ratings.

###### Functionality:
- Recipes Home screen will feature infinite scrolling through paginated results.
- Users will be able to filter recipes by: Ingredients, Meal Type, and Rating.
- Users will be able to sort recipes: alphabetical by Title, reverse alphabetical by Title, chronological by Date Added, and reverse-chronological order by Date Added.
- Recipes Record screen will include action buttons for the following actions: "Favorite", "Print", "Eat Healthy", and "Subscribe".
- Recipes will include a deep-link to AZ Health Zone and associated functionality.

#### Parks
###### Layout:

###### Functionality:

#### Active
###### Layout:

###### Functionality:

#### Events
###### Layout:

###### Functionality:

#### Resources
###### Layout:

###### Functionality:
