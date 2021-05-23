## A few notes

- Given I've had little professional exposure to Typescript - I've decided to use Javascript here to best show my ability. 
- I've included `date-fns` to help with the formatting of the message sent timestamp. Perhaps a touch heavy for this basic app - but would be used elsewhere and tree shaking would strip out anything we're not using. 
- I decided to go with the styled components approach to handing CSS - this isn't something I've used much but thought I'd take this opportunity to have a play. 
- I'm not completely thrilled with the styles being included in the snapshot - but the use of `jest-styled-components` removes the issue around changing classnames. For me - having these here crosses the line into UI testing. 
- I've not spent a whole lot of time trying to match fonts and colours - these would normally come from a designer as parts of the assets for the design.
- Likewise - icons like the one for the dropdown would normally be background SVGs rather than a blurry PNG. 
- I wrapped the chats in a button so they're accessibly clickable. This led to some less than ideal resetting of styles - would be handled with a little more grace in a full application. 
- Implementing a chat list automatic refresh or websocket would dramatically change how I've implemented the fetch. 
- I've not used the API to fetch the avatars due to time constraints. I feel I've shown I'm capable of working with the key concepts required of a senior React Engineer. 