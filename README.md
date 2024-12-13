# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

-Mobile version-

![photo](./design/mobile-design.jpg)
![photo](./design/mobile-success.jpg)

 -Desktop version

![photo](./design/desktop-design.jpg)
![photo](./design/active-states.jpg)
![photo](./design/error-states.jpg)
![photo](./design/desktop-success.jpg)
![photo](./design/desktop-success-active.jpg)

### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/newsletter-sign-up-with-success-message-vUidmICgx1)
- Live Site URL: [Live Site](https://kaleidoscopic-otter-550bb8.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to validate email addresses from a Form element using RegEx in JavaScript.


```js
/* validate Email function */
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
```

## Author

- Frontend Mentor - [@Aboubakr06](https://www.frontendmentor.io/profile/Aboubakr06)

