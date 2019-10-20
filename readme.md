# mindarc assessment

## Exercise 1

### How to build - exercise 1

```cmd
cd task1_responsive_page
yarn start
```

### Demo url - exercise 1

<https://mindarc-1-choco.netlify.com/>

### Introduction - exercise 1

I use bootstrap since most developers know how to use it and it is easy for future maintenance.
Sematic HTML applied for SEO and readability. I use bootstrap class as much as I can to benefit future maintenance. I've tested the project on different resolutions and it works well.
I use bootstrap tab to implement tab for desktop users.

### Tools / libraries - exercise 1

#### vue.js

I slightly apply vue.js to separate data layer. Therefore we can change to other data source easily.

#### parcel and sass

I use parcel since it is great and fast for small project without setting like webpack. We need to compile sass and build project. parcel has the capability.

#### bootstrap

I override some bootstrap class such as `h2`, `display-4` and `p` in order to meet design.
Also I enable `enable-responsive-font-sizes` for better font display in small devices.
Customized `font-weight`, `letter-spacing` and round corner are also needed for the design.

## Exercise 2

### How to build - exercise 2

```cmd
cd task2_data_display
yarn start
```

### Demo url - exercise 2

<https://mindarc-2-choco.netlify.com/>

### Introduction - exercise 2

1. Data is fetched by `axios` and inject into html template by `vue.js`.
2. `media query` is used for switching between desktop and mobile layouts.
3. Only 1 accordion/tab is opened at a time.
4. The first accordion/tab opened on load.
5. If accordion/tab is opened, it will be closed after clicked.

### Tools / libraries - exercise 2

I use `vue.js`, `parcel` and `bootstrap` in exercise 2 for the same reason.
Axios is being used since I like its "Promise" way to fetch data.

### Bonus points

#### Improve the user experience with meaningful animations/transitions

Both mobile and desktop has animation while opening accordion / tab
In desktop we have shaking icons and fade on/off content.
In mobile we have turing icons and height growing animation on content.

#### Design and styling

Reasonable design and styling applied. I try to keep design similar on desktop / mobile so that users can have consistent user experience.

#### Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`

1. `'b' + 'a'` makes `'ba'`
2. `'ba' + + 'a'` makes `'ba' + NaN` since `+ 'a'` is not a number and `+ 'a'` has priority to run
3. `'ba' + NaN` makes `'baNaN'` since we have string in the front and it will try to convert the next element to string then concat them
4. `'baNaN' + 'a'` makes `'baNaNa'`
5. `'baNaNa'.toLowerCase()` makes `'banana'`
