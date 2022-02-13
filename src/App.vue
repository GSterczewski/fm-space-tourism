<template>
  <router-view />
</template>

<style>
:root {
  /*-------- COLORS------- */
  /* usage: hsl(var(--variable)) */
  --color-primary: 0 100% 100%;
  --color-accent: 231 77% 90%;
  --color-dark: 230 35% 7%;

  /*-------- FONT SIZES------- */
  /* 80-150 */
  --fs-900: 5rem;
  /* 56-80-100 */
  --fs-800: 3.5rem;
  /* 24-40-56 */
  --fs-700: 1.5rem;
  /* 16-24-32 */
  --fs-600: 1rem;
  /* 16-20-28 */
  --fs-500: 1rem;
  /* 16-14-16 */
  --fs-350: 1rem;
  /* 15-16-18 */
  --fs-300: 0.935rem;

  /*-------- FONT FAMILIES ------- */

  --ff-sans: "Barlow Condensed", sans-serif;
  --ff-serif: "Bellefair", serif;
}

@media (min-width: 50em) {
  :root {
    --fs-900: 9.375rem;
    --fs-800: 5rem;
    --fs-700: 2.5rem;
    --fs-600: 1.5rem;
    --fs-500: 1.25rem;
    --fs-350: 0.875rem;
    --fs-300: 1rem;
  }
}
@media (min-width: 75em) {
  :root {
    --fs-800: 6.25rem;
    --fs-700: 3.5rem;
    --fs-600: 2rem;
    --fs-500: 1.75rem;
    --fs-350: 0.875rem;
    --fs-300: 1rem;
  }
}

/*------- UTILITY CLASSES ------------ */
.ff-serif {
  font-family: var(--ff-serif);
}
.ff-sans {
  font-family: var(--ff-sans);
}
.fs-900 {
  font-size: var(--fs-900);
}
.color-primary {
  color: hsl(var(--color-primary));
}
.color-accent {
  color: hsl(var(--color-accent) / 4);
}
.color-dark {
  color: hsl(var(--color-dark));
}
.color-gray {
  color: hsl(var(--color-dark) / 0.25);
}
.d-block {
  display: block;
}

/*-------- BASE -------------------*/
body {
  color: hsl(var(--color-primary));
}
/*------- TYPOGRAPHY  ------------ */

.heading {
  text-transform: uppercase;
  font-weight: 400;
}
</style>
