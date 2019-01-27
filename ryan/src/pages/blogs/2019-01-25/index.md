---
path: '/week-three-labs'
date: 'Jan 25 2019'
title: 'Labs 9 Week Three Wrap up'
author: 'Ryan Clausen'
cover_image: ''
---

###Individual Accomplishments

[Github contribution graph.](https://github.com/Lambda-School-Labs/labs9-family-tabs/pulse)

This week was one of late nights and unrealistic expectations. I did my best to make sure our team had a feature complete website. My body collapsed from the anxiety and exhaustion induced by these expectations to the point that on Friday I could not get out of bed without feeling nauseous. Sorry this blog is late. I did manage to accomplish a lot. I got the calendar connected to the back end. I wired up all of the state through the log-in process to the components. I created a route maker function to quickly spin up some consistent endpoint across several tables. By combining react-datepicker and react-select, I was able to create the most powerful form I have ever created. It incorporates two dropdown calendar elements, has two dropdown fields that connect to separate tables on the backend and allow for creating new entries to those table prior to submitting the form, and one field that allows for the selection of multiple elements. Submitting this form creates a new event and new instances of that event for each of the users on a separate table and loads all that data back into the calendar.

###Proof of Progress

[Github Front end Commit #1: Add event modal created](https://github.com/Lambda-School-Labs/labs9-family-tabs/pull/82) -
[Corresponding Trello](https://trello.com/c/RZoHt0SX/54-modal-for-add-event-create-event) 
***[Screenshot album with reflections](https://imgur.com/a/7ZyBCoJ)***

[Github Front end Commit #2: Location and event types on form](https://github.com/Lambda-School-Labs/labs9-family-tabs/pull/100) - [Corresponding Trello](https://trello.com/c/QToAHTZf/46-calendar-features)

[Github Back end Commit #1: Connected the Auth login to user/family data on the back end](https://github.com/Lambda-School-Labs/labs9-family-tabs/pull/64) -
[Corresponding Trello](https://trello.com/c/mj9J0TNR/42-routemaker-endpoints) 

[Github Back end Commit #2: Address is now nullable](https://github.com/Lambda-School-Labs/labs9-family-tabs/pull/101) -
[Corresponding Trello](https://trello.com/c/eGWR8yGG/61-address-nullable) 






###Milestone Reflections      
  ***Features***
  
 * Calendar that displays existing events.
 * Form that allows for the creation of new events. 
 * A page that displays the family.
 * Admin controls for approving and denying child created events.
 * Admin controls for adding and editing existing family members.