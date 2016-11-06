###Installation

```
npm install --save-dev flexbox-lite
```

Import the main sass file into your sass build:

```
@import "~flexbox-lite/src/flexbox-lite";
```

Or alternatively, use the pre-compiled `flexbox-lite.css` file in the dist folder and add it into your index.html

###Gridless flexbox

Flexbox is simple and easy enough to use all by itself. It doesn't need to be wrapped in a grid system.

In particular, grid systems such as flexboxgrid.com force you into the "bootstrap" way of doing things with 12 columns, which can be limiting.

This package is intended to be a VERY minimal method of applying only a few properties - `flex-direction`, `justtify-content` and `align-items` - to each of the standard breakpoints (xs, sm, md, lg, xl).

If you haven't taken the time to understand flexbox yet I highly recommend you take a look at [this article](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex). 

###Flex direction

With flexbox you should have columns OR rows. (You do not need to keep putting columns inside rows like you do in bootstrap) e.g:

```
<div class="col-xs row-sm"> {child elements} </div>
```

Here, the child items will be vertically aligned on xs devices, but horizontally on sm and upwards.

NOTE: If you want different "column widths" the way you have in bootstrap then you should set the width of the child items yourself. This package deliberately doesn't have an opinion on how you should do that (but since we are using flexbox you might want to consider using flex-basis).

You can reverse the order of child items using:

```
<div class="col-reverse-md row-reverse-lg">
```

###Horizontal - justify content

The horizontal positioning of child items is set using either: start, center or end:

```
start-xs
center-sm
end-md
```

e.g. `<div class="row center-xs start-md"> {child elements} </div>`


If you're not sure what justify-content means then re-read [this article](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex) again.

###Vertical - align items

Vertical positioning is set using either top, middle or bottom:

```
top-md
middle-lg
bottom-xl
```

IMPORTANT: Remember that when you are using `flex-direction: column;` then the "horizontal" and "vertical" axes are the other way round. In others words, for `flex-direction: column;` the horizontal alignment is set using top, middle or bottom. This might be counter-intuitive at first, but this is how flexbox actually works and you will quickly get used to it.

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

A few other classes have been included. If you want to know what they are then read the source. If you want to extend this then do it yourself. I won't be adding any additional features.

