# Maricopa Healthy Mobile Platform

## Proposal
#### Project Description
Maricopa Healthy is an existing mobile app that was originally launched in March 2016. It was built on a proprietary template, has very limited functionality and several unresolved bugs have decreased user retention and limit the product owner’s ability to promote the app. The goal of the app rebuild is to:
- Fix the existing bugs;
- Increase and improve app functionality;
- Promote user engagement; and
- Allow the app and its content to be easily shared and promoted by both users and the product owner. 

From a technical perspective, the new Maricopa Healthy app must be:
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

#### Search
###### Layout:
- As a User, I will see a search icon on the top bar of the home screen.
- As a User, I will see tiles of the search results.

###### Functionality:
- As a User, I can search for all types of records.
- As a User, I can search for record titles, subtitles, and descriptions.
- As a User, when I reach a character count above two matching search results will be shown.
- As a User, I can tap on a search result and it will take me to the appropriate record view.
- As a User, I can easily clear my search term(s) or cancel search and go back to the home screen.

#### Markets
###### Layout:
- As a User, I will see a default map view with a five mile radius of 85003.
- As a User, if I have location services on the default map view will be a five mile radius of my current location.
- As a User, in list view I will see tiles of all markets in alphabetical order.
- As a User, I will only see no more than than three rows of buttons to filter with an option to expand to see more options.
- As a User, on an individual record I will see a thumbnail, market name, address, phone number, and favorite icon at the top. That is followed by the action buttons of More Info, Directions, and Meetup. Then any specific market details including the hours, Seasonal Produce, Payment Options, and Rating/Photos.


###### Functionality:
- As a User, I can toggle between list and map view.
- As a User, in map view I will be able to tap on a pin to see preview and if I tap preview it will take me to the record view.
- As a User, I will be able to filter records on Time of Day, Day of Week, Date Range, Payment Options and Rating.
- As a User, I can filter records either by selecting cities or by Zip Code.
- As a User, if the cities or Zip Code filter is on the other will be greyed out and unavailable until unselected.
- As a User, if location services is on the city filter will automatically be selected to that city.
- As a User, if location services is off then both the City and Zip Code filter will be accessible at start.
- As a User, I can sort by Best Match, Most Popular, or Near to Me.
- As a User, I can click Apply filter and it will take me to the previous screen with the appropriate filters applied.
- As a User, I will see if I have any filters applied with a transparent bar at the bottom of the page; if I click on that bar the filters will be removed after a confirmation prompt.
- As a User, I can tap the more info button to show either the market's facebook page or website in a webview.
- As a User, I can tap directions button to get directions to market.
- As a User, I can tap meetup to pull up the meetup app or webview.
- As a User, I can tap between the seaonal produce of the market by season.
- As a User, I can tap the up/down arrows to easily move between the individual records including applied filters.
- As a User, I can share the market via an HTML-formatted web view and allow for deep linking into the app.
- As a User, if I have the app the shared link will take me to the market record, and if not it will take me to the browser with the record in a web view and an install app ad at the top pf the screen.
- As an Admin, I will be able to update all database information including thumbnails, market names, addresses, phone numbers, hours, seasonal produce, and payment options.
- As an Admin, I can edit all action button icons, titles and destinations.
- As an Admin, I can edit section divider titles.
- As an Admin, I can add/remove filtering buttons for City, Time of Day, Day of Week, Payment Options and Sort By.

#### Recipes
###### Layout:
- Recipes Home screen will display a list view of all recipes tagged as "featured" in the database.
- Recipes Filter screen will display a set of criteria by which to filter including: Ingredient, Meal Type, Rating, and SortBy category.
- Recipes Record screen will display: recipe name, action buttons, Ingredients section, cooking Directions section, Nutrition Facts, and Ratings.

###### Functionality:
- Recipes Home screen will feature infinite scrolling through paginated results.
- Users will be able to filter recipes by: Ingredients, Meal Type, and Rating.
- Users will be able to sort recipes: alphabetical by Title, reverse alphabetical by Title, chronological by Date Added, and reverse-chronological order by Date Added.
- Recipes Record screen will include action buttons for the following actions: "Favorite", "Print", "Eat Healthy", and "Subscribe".
- Recipes will include a deep-link to AZ Health Zone and associated functionality.

#### Parks
###### Layout:
- As a User, I will see a default map view with a five mile radius of 85003.
- As a User, if I have location services on the default map view will be a five mile radius of my current location.
- As a User, in list view I will see tiles of all parks in alphabetical order of only the first 20 results.
- As a User, I will only see no more than than three rows of buttons to filter with an option to expand to see more options.
- As a User, on an individual record I will see a thumbnail, park name, address, phone number, and favorite icon at the top. That is followed by the action buttons of More Info, Directions, and Meetup. Then any specific park details including the hours, features, and Rating/Photos.


###### Functionality:
- As a User, I can toggle between list and map view.
- As a User, in list view I can view 20 records and scroll through the list to load more at the bottom.
- As a User, in map view I will be able to tap on a pin to see preview and if I tap preview it will take me to the record view.
- As a User, I will be able to filter records on Time of Day, Day of Week, Date Range, Features, and Rating.
- As a User, I can filter records either by selecting cities or by Zip Code.
- As a User, if the cities or Zip Code filter is on the other will be greyed out and unavailable until unselected.
- As a User, if location services is on the city filter will automatically be selected to that city.
- As a User, if location services is off then both the City and Zip Code filter will be accessible at start.
- As a User, I can sort by Best Match, Most Popular, or Near to Me.
- As a User, I can click Apply filter and it will take me to the previous screen with the appropriate filters applied.
- As a User, I will see if I have any filters applied with a transparent bar at the bottom of the page; if I click on that bar the filters will be removed after a confirmation prompt.
- As a User, I can tap the more info button to show either the park's facebook page or website in a webview.
- As a User, I can tap directions button to get directions to park.
- As a User, I can tap meetup to pull up the meetup app or webview.
- As a User, I can tap the up/down arrows to easily move between the individual records including applied filters.
- As a User, I can share the park via an HTML-formatted web view and allow for deep linking into the app.
- As a User, if I have the app the shared link will take me to the park record, and if not it will take me to the browser with the record in a web view and an install app ad at the top pf the screen.
- As an Admin, I will be able to update all database information including thumbnails, park names, addresses, phone numbers, hours, and featues.
- As an Admin, I can edit all action button icons, titles and destinations.
- As an Admin, I can edit section divider titles.
- As an Admin, I can add/remove filtering buttons for City, Time of Day, Day of Week, and Sort By.

#### Active
###### Layout:
- As a User, I will see a list view of tiles of all the activities in alphabetical order of only the first 20 results.
- As a User, I will only see no more than than three rows of buttons to filter with an option to expand to see more options.
- As a User, on an individual record I will see a thumbnail, activity name, and favorite icon at the top. That is followed by the action buttons of Leagues, Subscribe, and Meetup. Then any specific activity details including the How To, Find a Place, and Rating/Photos.


###### Functionality:
- As a User, in list view I can view 20 records and scroll through the list to load more at the bottom.
- As a User, I will be able to filter records on Time of Day, Day of Week, Date Range, and Rating.
- As a User, I can filter records either by selecting cities or by Zip Code.
- As a User, if the cities or Zip Code filter is on the other will be greyed out and unavailable until unselected.
- As a User, if location services is on the city filter will automatically be selected to that city.
- As a User, if location services is off then both the City and Zip Code filter will be accessible at start.
- As a User, I can sort by Best Match, Most Popular, or Near to Me.
- As a User, I can click Apply filter and it will take me to the previous screen with the appropriate filters applied.
- As a User, I will see if I have any filters applied with a transparent bar at the bottom of the page; if I click on that bar the filters will be removed after a confirmation prompt.
- As a User, I can tap the up/down arrows to easily move between the individual records including applied filters.
- As a User, I can share the activity via an HTML-formatted web view and allow for deep linking into the app.
- As a User, if I have the app the shared link will take me to the activity record, and if not it will take me to the browser with the record in a web view and an install app ad at the top pf the screen.
- As a User, I can click on the Find a Place button and will populate a map with parks with the selected activity feature listed.
- As a User, in map view I will be able to tap on a pin to see preview and if I tap preview it will take me to the park record view.
- As a User, in map view when I click back it will take me to the activity record view.
- As an Admin, I will be able to update all database information including thumbnails, activity names, addresses, phone numbers, hours, and featues.
- As an Admin, I can edit all action button icons, titles and destinations.
- As an Admin, I can edit section divider titles.
- As an Admin, I can add/remove filtering buttons for City, Time of Day, Day of Week, and Sort By.

#### Events
###### Layout:
- Events Home Screen will display a list view of the first 20 events in the database sorted in chronological order inclusive of events currently underway.
- Events Home Screen will feature infinite scrolling through paginated results.
- Events Filter screen will display a set of criteria by which to filter including: City, Zip Code, Cost, Recommended Age, Time of Day, Day of Week, and Date Range.
- Filter sections with more than three rows of buttons will accordion and include an expandability feature.
- Events Home Screen will indicate active filter criteria in order to inform the user that additional events are available.
- Events Record Screen will include: an event header component, action buttons, Details, and Where.

###### Functionality:
- Users will be able to sort events by: Best Match, Most Popular, and Nearest.
- City and Zipcode filter criteria shall be mutually exclusive. Users can use one but not both when applying a filter.
- If a user has location services enabled, relevant filter criteria will be preferentially selected when applying filters.
- If a user does not have location services enabled, City and Zipcode criteria will both be initially visible until a selection is made.
- Event Record header component will consist of: a thumbnail, event name, time, and cost.
- Event Record screen will include action buttons for the following actions: "Favorite", "Reminder", "Directions", "Meetup", and "Learn More".
- Events Learn More will include a deep-link to the event page.
- Users will be able to navigate between records via navigational arrows accessible with in the Event Record Screen.

#### Resources
###### Layout:
- As a User, I will see a list view of tiles of all the resources in alphabetical order of only the first 20 results.
- As a User, on an individual record I will see a thumbnail, resource name, and favorite icon at the top. That is followed by a description and a learn more button.

###### Functionality:
- As a User, in list view I can view 20 records and scroll through the list to load more at the bottom.
- As a User, I can tap the up/down arrows to easily move between the individual records.
- As an Admin, I will be able to update all database information including thumbnails, resource names, and descriptions.
- As an Admin, I can edit all action button icons, titles and destinations.

