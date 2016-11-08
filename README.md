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

The version that ships with [ng-material](https://github.com/justindujardin/ng2-material/blob/master/src/core/style/layout.scss) is much better, but still abstracts the inner workings of flexbox and forces you to learn a cutom interface. 

I won't even go into the problems with packages that use javascript to set inline styles, or the computations that are often done to simulate css breakpoints.

This package comes out at 7kb unzipped and opts for a pure OOCSS approach. The classnames are based on the css properties and follow an obvious naming scheme, so there is no need to learn some custom interface.

Under the hood, this package only uses a few key styles: 

- flex-direction 
- justify-content 
- align-items/align-self
- flex-grow/flex-basis

Each of these properties is applied to the standard responsive breakpoints (xs, sm, md, lg, xl).

If you haven't taken the time to understand flexbox yet I recommend you take a look at [this article](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties). 

###Flex containers (flex-direction)

In the flexbox system, a container div is EITHER a row OR a column. (This is completely different from most grid layouts where you put columns inside rows).

This package uses the "row" and "col" keywords. Like most classnames in this package, you can optionally add a breakpoint to the end e.g. 

```
row        // all breakpoints (synonymous with row-xs)
row-xs     // xs and above
row-sm     // sm and above
row-md     // etc
row-lg
row-xl
```

Here is an example of a responsive flexbox container - the child elements will be stacked vertically on xs devices, and horizontally on md and above:

```
<div class="col-xs row-md"> {child elements} </div>
```

You can reverse the order of child items using:

```
<div class="col-reverse-xs row-reverse-md">
```

###Horizontal positioning (justify-content)

The "justify" key word is used to position items horizontally. The following options can be used:

```
justify-start(-xs)     // => justify-content: flex-start;
justify-center         // => justify-content: center;
justify-end            // => justify-content: flex-end; 
justify-around         // => justify-content: space-between; 
justify-between        // => justify-content: space-around; 
```

Note that these classes should be applied to the container div and will affect ALL child elements, e.g.

```
<div class="row justify-start-xs justify-center-sm"> {child elements} </div>
```

###Vertical positioning (align-items)

The "align" key word is used to position items vertically. The following options can be used:

```
align-start(-xs)   // => align-items: flex-start;
align-center       // => align-items: center;
align-end          // => align-items: flex-end; 
align-stretch      // => align-items: stretch;
align-baseline     // => align-items: baseline; 
```

These classes are also applied to the container div and affect all child elements.

If you wish to specify custom vertical alignment for individual child elements then apply the "align-self" class to the child element:

```
align-self-start        // => align-self: flex-start;
align-self-center       // => align-self: center;
align-self-end          // => align-self: flex-end; 
align-self-stretch      // => align-self: stretch;
align-self-baseline     // => align-self: baseline; 
```

###The "horizontal" and "vertical" axes depend on the flex-direction

Normally, when the flex-direction is set to row, the "justify" property controls the horizontal axis and "align" controls the vertical axis.

HOWEVER: when you set flex-direction to column the axes are reversed - "justify" now controls the vertical axis, and "align" controls the horizontal. 


| flex-direction | "justify" axis | "align" axis |
| -------------- | -------------- | ------------ |
| row            | horizontal     | vertical     |
| col            | vertical       | horizontal   |

If you're not sure what all this is about then re-read [this article](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties).

###Flex grow and shrink

The "flex" property can be added to child elements to specify how large a child element should be compared to its sibling elements. 

For instance, if you want all the child elements to share the available space equally, then give them all a class of flex-1. If you give one element a class of flex-2 it will be twice as big as its siblings.

```
flex-1(-xs)     // => flex-grow: 1; 
flex-2          // => flex-grow: 2; 
flex-3          // => flex-grow: 3; 
etc.
```

A list of available growth factors is specified in the variables file: 

```
$flex-grow-factors: 1, 2, 3, 4, 5 !default;
``` 

Only 1-5 are included by default. You can over-ride this variable depending on your needs. 

###Flex wrap

The flex-wrap(-xs) class is applied to the container div and it allows child elements to go onto a new line rather than packing them all onto a single line.

###Flex-basis

The "flex-basis" property is a lot like width/height except it's "direction" is unspecified. It could be vertical or horizontal depending on the flex direction of its parent.

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

The default build is around 7kb unzipped. You can get rid of the responsive versions of certain classes if you want to trim it down even further.

```
$enable-flex-grow-responsive:        true !default;
$enable-flex-wrap-responsive:        true !default;
$enable-flex-basis-responsive:       false !default; // false by default
$enable-justify-between-responsive:  true !default;
$enable-justify-around-responsive:   true !default;
$enable-align-baseline-responsive:   true !default;
$enable-align-self-responsive:       true !default;
```

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
