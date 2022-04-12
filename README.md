# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Pod request access landing page solution](#frontend-mentor---pod-request-access-landing-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [More practice](#more-practice)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![mobile design](./assets/screenshots/mobile.png)
![tablet design](./assets/screenshots/tablet.png)
![desktop design](./assets/screenshots/desktop.png)
![desktop+ design](./assets/screenshots/desktop2.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- TailwindCSS
- Flexbox
- Vanilla JS
- Mobile-first workflow
- Deployed to Github Pages

### What I learned

Although a 'newbie' design structure, I learned a lot during this project.

Still working through the basics of TailwindCSS, I wanted to focus on just Tailwind and decided to structure the website with no frontend framework (React). The functionality was simple enough to get by with a few lines of Javascript to validate the form input from the user.

```js
form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.email.addEventListener('click', () => {
    error.classList.add('hidden');
  });

  if (!form.email.value) {
    error.classList.remove('hidden');
  }

  if (!form.email.value.includes('@')) {
    error.classList.remove('hidden');
  }
});
```

The hardest challenge was the structuring of the document with Tailwind. Tailwind is extremely nice to use and adds a lot of ease but ensuring the design matched multiple design methods was a bit challenging. One thing I know I should have done more efficently was to write out the designs and lay out my 'foundations' before putting code to editor. Since I did not do this effectively, I believe I added some unnecessary work arounds to get the responsive design of the webpage.

I do love how Tailwind implements responsive design (sm:, md:, lg:, etc.) and I can see how in the future and through practice, Tailwind will be an extreme asset and tool in my design practice.

### More practice

I need to practice with TailwindCSS and it's responsiveness when it comes to images. The widths/height/max-width/etc. gave me an extremely hard-time and will need to practice this more moving forward. Although easy to understand and accomplish with CSS, the tailwind implementation caused much headache.

### Continued development

For further projects/challenges/etc. I will continue my normal practice of putting my ideas and planning my approach before putting any code into an editor. I will also be looking more into the documentation and learning more of the images element using:

```html
<img
  srcset="
    elva-fairy-320w.jpg,
    elva-fairy-480w.jpg 1.5x,
    elva-fairy-640w.jpg 2x
  "
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy"
/>
```

I beleive this approade could have helped alot in the process of this project, instead of using multiple image tags. I will try this approach soon in this project to test out my ideas but want to get the method and understanding down before implementing.

I also intend to continue focusing on Tailwind and digging deeper into the documentation. I was able to learn more about the extend{} theme and manipulating the tailwind.config.js file: I learned the importance over using extend{} theme and how that can have effect on the use of Tailwind's default params.

```js
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    fontFamily: {
      'chivo-light': ['Chivo', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'mobile-pattern': "url('/assets/mobile/image-host.jpg')",
        'tablet-pattern': "url('/assets/tablet/image-host.jpg')",
        'desktop-pattern': "url('/assets/desktop/image-host.jpg')",
        'dot-pattern': "url('/assets/desktop/bg-pattern-dots.svg')",
      },
      colors: {
        'mint-green': '#54E6AF',
        'mint-green-light': '#B3FFE2',
        'dark-blue-grey': '#2C344B',
        'light-blue-grey': '#5A668A',
        'grey-smoke': '#C3CBE5',
        'dark-blue': '#121725',
        'pure-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
```

I also attempted to deploy to Vercel but continued to get errors. Moving forward I will be learning and researching the documentation to assist in deploying static sites and ensuring my dev structure fits requirements.

### Useful resources

- [Github Pages DOCS](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) - This helped me for understanding why I was having many issues with deploying with github pages.
- [TailwindCSS DOCS](https://tailwindcss.com/docs/installation) - This of course helped with the syntax needed to complete this project.

## Author

- Website - [Mason J. Dubelbeis](Soon!)
- Frontend Mentor - [@mdubelbeis](https://www.frontendmentor.io/profile/mdubelbeis)
- Twitter - [@mason_dubelbeis](https://twitter.com/mason_dubelbeis)
- Linkedin - [](https://www.linkedin.com/in/mason-dub/)
