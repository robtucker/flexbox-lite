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

###Gridless flexbox

Flexbox is simple and easy enough to use all by itself. It doesn't need to be wrapped in a grid system.

In particular, grid systems such as [flexboxgrid](http://flexboxgrid.com/) force you into the "bootstrap" way of doing things with 12 columns, which can be limiting.

This package is intended to be a very simple and minimal method of applying only a few key styles: 

- flex-direction 
- justify-content 
- align-items 
- flex-basis

Each of these is applied to the standard breakpoints (xs, sm, md, lg, xl).

If you haven't taken the time to understand flexbox yet I highly recommend you take a look at [this article](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex). 

###Flex direction (flex-direction)

With flexbox a container div is EITHER a column (vertical) OR a row (horizontal). This is completely different from most grid layouts where you put columns inside rows. Here is an example of a responsive flexbox container:

```
<div class="col-xs row-sm"> {child elements} </div>
```

The child items will be vertically aligned on xs devices, but horizontally on sm and upwards.

You can reverse the order of child items using:

```
<div class="col-reverse-md row-reverse-lg">
```

###Horizontal positioning (justify-content)

The horizontal positioning of child items is set using either: start, center or end:

```
start-xs
center-sm
end-md
```

Here the child items will be left aligned on xs devices, but center aligned on sm and above:

```
<div class="row start-xs center-sm"> {child elements} </div>
```

###Vertical positioning (align-items)

Vertical positioning is set using either top, middle or bottom:

```
top-md
middle-lg
bottom-xl
```

###The "horizontal" and "vertical" axes depend on the flex-direction

When the flex-direction is set to row then the horizontal alignment is set using start, center, end (the "justify-content" property) and the vertical alignment is set using top, middle, bottom (the "align-items" property).

HOWEVER: remember that when you set the flex-direction to column then the "horizontal" and "vertical" axes are the other way round. In others words, the horizontal alignment is now set using top, middle or bottom. This might be counter-intuitive at first, but this is how flexbox actually works and you will quickly get used to it.

If you're not sure what all this is about then re-read [this article](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex).

###Child widths and heights (flex-basis)

In flexbox, the notion of having column widths and offsets is replaced by simple percentages.

If you want all the child elements to share the space provided by the container equally, then simply give them all a width of 100% and they will divide the available space between themselves.

A few classes have been provided to help you set the widths and heights of child items responsively:

```
width-100-xs
width-75-xs
width-66-xs
width-50-xs
width-33-xs
width-25-xs

height-100-xs
height-75-xs
height-66-xs
height-50-xs
height-33-xs
height-25-xs
```

Here is an example of one common use case, where the child is 100% width on xs devices, 75% on md devices and 50% on lg and above:

```
<div class="row center-xs">
  <div class="width-100-xs width-75-md width-50-lg"> {contents} </div>
</div>
```

In many cases, you may not even need to apply any classes to the child items at all as the widths and heights are auto by default. From my perspective this is much more expressive than using a 12 grid column.

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

###Flex grow

The flex-grow property is set on child elements. It specifies how large a child element is compared to its sibling elements. In addition to specifying a break point you must also specify a "growth" factor. e.g. 

```
flex-grow-2-xs
flex-grow-3-lg
flex-grow-1-xl
```

As you can see, it's possible to reset the child element to the same size as its siblings by putting the growth factor back to 1.

A list of available growth factors is specified in the variables file: `$flex-grow-factors: 1, 2, 3;`. Only 1, 2 and 3 are included by default. You can over-ride this list if you need some special growth factor.

You can remove flex grow from your build by setting `$enable-flex-grow: false;`


###Additional container classes

By default only the core classes listed above are included. There are several other flex container classes that can be optionally enabled. Use the following variables to enable these in your build.

```
$enable-flex-wrap: true;
$enable-flex-between: true;
$enable-flex-around: true;
```

These would be used as expected on the flex container e.g. flex-wrap-xs, flex-between-md, flex-around-xl etc.


### Hold up! These class names are global!

I know. I very quickly got sick and tired of using [css modules](https://github.com/css-modules/css-modules) for layouts because it's much harder to debug layout issues when the class names are unreadable. I'm comfortable introducing a few global class names. If you aren't then I'll leave you to do your own special build.

###If you want more, do it yourself!!
 
Currently the uncompressed build is only 4kb and I'm reluctant to add any more responsive classes when there is plenty to work with here already. 

As I said at the start flexbox is simple and easy to use on its own, without needing to wrap it in some higher level abstraction.
