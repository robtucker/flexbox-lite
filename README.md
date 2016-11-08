###Installation

```
npm install --save-dev flexbox-lite
```

Import the main sass file into your sass build:

```
@import "~flexbox-lite/src/flexbox-lite";
```

If you are using something like webpack with [sass-loader](https://github.com/jtangelder/sass-loader) then you can simply require the module.

```
require('flexbox-lite');
```

Or alternatively, use the pre-compiled `flexbox-lite.min.css` file in the dist folder and add it into your index.html

###Flexbox done properly

By itslef, Flexbox is a wonderfully versatile and expressive system. Unfortunately many packages such as [bootstrap v4](http://v4-alpha.getbootstrap.com/layout/flexbox-grid/) and [flexboxgrid](http://flexboxgrid.com/) force flexbox into being a "grid" system with 12 columns. To me, this seems like forcing a porsche into being a bicycle. 

The version that ships with [ng-material](https://github.com/justindujardin/ng2-material/blob/master/src/core/style/layout.scss) is much better, but still not good enough. It attempts to abstract away the inner workings of flexbox for you. And it is 23 times bigger than this package.

This package comes out at 6kb unzipped and opts for a pure OOCSS approach. The classnames are based on the css properties and follow a simple naming scheme, so there is no need to learn some custom api.

Under the hood, this package only uses a few key styles: 

- flex-direction 
- justify-content 
- align-items/align-self
- flex/grow/flex-basis

Each of these properties is applied to the standard responsive breakpoints (xs, sm, md, lg, xl).

If you haven't taken the time to understand flexbox yet I recommend you take a look at [this article](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties). 

###Flex containers (flex-direction)

In the flexbox system, a container div is EITHER a row OR a column. This is completely different from most grid layouts where you put columns inside rows.

This package allows you to optionally add a breakpoint to the end of most classnames. e.g. 

```
row        // all breakpoints (synonymous with row-xs)
row-xs     // xs and above
row-sm     // sm and above
row-md     // etc
row-lg
row-xl
```

Here is an example of a responsive flexbox container - child items will be stacked vertically on xs devices, and stacked horizontally on md and upwards:

```
<div class="col-xs row-md"> {child elements} </div>
```

You can reverse the order of child items using:

```
<div class="col-reverse-xs row-reverse-md">
```

###Horizontal positioning (justify-content)

The "justify" key word is used to position items horizontally - this will set the "justify-content" css property. The following options can be used:

```
justify-start(-xs)     // => justify-content: flex-start;
justify-center    // => justify-content: center;
justify-end       // => justify-content: flex-end; 
justify-around    // => justify-content: space-between; 
justify-between   // => justify-content: space-around; 
```

Note that these classes should be applied to the container div and will affect ALL child elements, e.g.

```
<div class="row justify-start-xs justify-center-sm"> {child elements} </div>
```

###Vertical positioning (align-items)

The "align" key word is used to position items vertically - this will set the "align-items" css property.

```
align-start(-xs)   // => align-items: flex-start;
align-center       // => align-items: center;
align-end          // => align-items: flex-end; 
align-stretch      // => align-items: stretch;
align-baseline     // => align-items: baseline; 
```

These classes are also applied to the container div and affect ALL child elements.

If you wish to specify custom vertical alignment for individual child elements then apply the more specific "align-self" class to the child element:

```
align-self-start        // => align-self: flex-start;
align-self-center       // => align-self: center;
align-self-end          // => align-self: flex-end; 
align-self-stretch      // => align-items: stretch;
align-self-baseline     // => align-items: baseline; 
```

###The "horizontal" and "vertical" axes depend on the flex-direction

Normally, when the flex-direction is set to row, the "justify-content" property controls the horizontal axis and "align-items" controls the vertical axis.

HOWEVER: when you set flex-direction to column the axes are reversed - "justify" now controls the vertical axis, and "align" controls the horizontal. 

| flex-direction | "justify" axis | "align" axis |
| -------------- | -------------- | ------------ |
| row            | horizontal     | vertical     |
| col            | vertical       | horizontal   |

It would be possible to do some clever css tricks to map the css class names to different css properties depending on the flex-direction. However, the entire purpose of this package is to offer direct access to the raw css properties using OOCSS, without abstracting away their inner workings.

If you're not sure what all this is about then re-read [this article](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties).

###Flex grow and shrink

The flex property is set on child elements. It specifies how large a child element is compared to its sibling elements. 

For instance, if you want all the child elements to share the available space equally, then give them all a class of flex-1. If you give one elements a class of flex-2 it will be twice as big as its siblings.

```
flex-1(-xs)     // => flex-grow: 1; 
flex-2          // => flex-grow: 2; 
flex-3          // => flex-grow: 3; 
etc.
```

A list of available growth factors is specified in the variables file: 

```
$flex-grow-factors: 1, 2, 3, 4, 5;
``` 

Only 1-5 are included by default. You can over-ride this variable if you need more. 

###Flex-basis

The "flex-basis" property is a lot like width/height except it's "direction" is unspecified. It could be vertical or horizontal depending on whether the flex direction of its parent is row or col.

In most cases you actively don't want this behaviour. When you set the width property, you don't want it to suddenly become the height on mobile. 

For this reason it is more normal to use the flex grow property in conjunction with standard width/height. Nevertheless the following classes are provided. 

```
flex-basis-100     // => flex-basis: 100%;
flex-basis-75      // => flex-basis: 75%;
flex-basis-66      // => flex-basis: 66.66%;
flex-basis-50      // => flex-basis: 50%;
flex-basis-33      // => flex-basis: 33.33%;
flex-basis-25      // => flex-basis: 25%;
```
Responsive versions of these classes have been removed from the build by default, but can be easily added in (see below).

###Trimming the build

It's not practical to include 5 responsive classes for every single css property so by default only the key properties above have been included. You can enable the ones you need by adjusting these variables:

```
$enable-flex-grow-responsive: true !default;  //the only one that is true by default
$enable-flex-wrap-responsive: false !default;
$enable-flex-basis-responsive: false !default;
$enable-justify-between-responsive: false !default;
$enable-justify-around-responsive: false !default;
$enable-align-baseline-responsive: false !default;
$enable-align-self-responsive: false !default; 
```

The default build is around 6kb unzipped.

###Breakpoints

Feel free to override these breakpoints when you are compiling your sass:

```
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
) !default;

```

### Hold up! These class names are global!

I know. I very quickly got sick and tired of using [css modules](https://github.com/css-modules/css-modules) for layouts because it's much harder to debug layout issues when the class names are long and unreadable. I'm comfortable introducing global class names for layouts. If you aren't then I'll leave you to do your own special build.
