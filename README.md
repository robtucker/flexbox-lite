###Installation

```
npm install --save-dev flexbox-lite
```

Then (assuming you are using a bundler like webpack) require the main sass file in your code
```
import FlexboxLite from "flexbox-lite/lib/main.scss";
```

Or alternatively copy the minified stylesheet from the dist folder and add it to your index.html

###Motivation

Flexbox is simple and easy enough to use all by itself. It doesn't need to be wrapped in a grid system.

In particular, I tried some of the "grid" systems such as flexboxgrid.com, and I found that they force you into the "bootstrap" way of doing things with 12 columns. I don't believe that a class like "col-md-offset-3" has any place in a decent flexbox layout.

This package is intended to be a VERY minimal method of applying only `flex-direction`, `justtify-content` and `align-items` to each of the standard breakpoints (xs, sm, md, lg, xl).

If you haven't taken the time to understand flexbox yet I highly recommend you take a look now: https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex

###Flex direction

With flexbox you should have columns OR rows. You should not have a column inside a row like you do in bootstrap. e.g:

```
<div class="col-xs row-sm"> {child elements} </div>
```

The child items will be vertically aligned on xs devices, but horizontally aligned on sm and upwards.

NOTE: If you want different "column widths" the way you have in bootstrap then you should set the percentage width of the child items yourself. This package deliberately doesn't have an opinion on how you should do that (but since we are using flexbox you might want to consider using flex-basis).

You can reverse the order of child items using:

<div class="col-reverse-md row-reverse-lg">

###Justify content

The horizontal positioning of child items is set using either: start, center or end:

start-xs
center-xs
end-xs

```
<div class="row center-xs start-md"> {child elements} </div>
```

If you're not sure what this means then read the article:

###Align items

Vertical positioning is set using either top, middle or bottom:

top-xs
middle-xs
bottom-xs


IMPORTANT: Remember that when you are using "column" alignment then the "horizontal" and "vertical" directions are switched. So you would now be using top-xs to set what I have called the "horizontal" alignement above.

###Breakpoints

Override these breakpoints when you are compiling your sass:

```
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
) !default;

```

###If you want more, use flexbox yourself!!
 
As I said at the start flexbox is simple and usable as it is, without needing to wrap it in some other abstraction.

A few other classes have been included. If you want to know what they are then read the source. If you want to extend this then do it yourself.

