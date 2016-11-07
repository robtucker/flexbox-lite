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

This package is intended to be a very simple and minimal method of applying only a few key styles (such as flex-direction, justify-content, and align-items) to each of the standard breakpoints (xs, sm, md, lg, xl).

If you haven't taken the time to understand flexbox yet I highly recommend you take a look at [this article](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex). 

###Flex direction (flex-direction)

With flexbox you should have EITHER columns OR rows. (You do not need to keep putting columns inside rows like you do in most grid systems) e.g:

```
<div class="col-xs row-sm"> {child elements} </div>
```

Here, the child items will be vertically aligned on xs devices, but horizontally on sm and upwards.

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

e.g. `<div class="row start-xs center-sm"> {child elements} </div>`

Here the child items will be left aligned on xs devices, but center aligned on sm and above.

###Vertical positioning (align-items)

Vertical positioning is set using either top, middle or bottom:

```
top-md
middle-lg
bottom-xl
```

###The horizontal and vertical axes can switch

When the direction is set to row then the horizontal alignment is set using the justify-content (i.e. start, center, end) property and the vertical alignment is set using align-items (top, middle, bottom).

HOWEVER: remember that when you set the flex-direction to column then the "horizontal" and "vertical" axes are the other way round. In others words, the horizontal alignment is now set using top, middle or bottom. This might be counter-intuitive at first, but this is how flexbox actually works and you will quickly get used to it.

If you're not sure what all this is about then re-read [this article](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex) again.

###Child widths and heights (flex-basis)

In flexbox percentages replace the notion of having column widths and offsets.

If you want all the child elements to share the space provided by the container equally, then simply give them all a width of 100% and they will divide the available space between themselves.

It is up to you to set the widths and heights of the child items however you want. A few classes have been provided to help you do this responsively:

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

Here is one example:

```
<div class="row center-xs">
  <div class="width-100 width-75-md width-50-lg"> {contents} </div>
</div>
```

On xs devices it is full width, 75% on md devices and 50% on lg and above.

In many cases, you may not even need to apply any classes to the child items at all. From my perspective this is much more expressive than using a 12 grid column.

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

### These class names are global!

I know. I very quickly got sick and tired of using css modules for layouts because it's much harder to debug layout issues when the class names are unreadable. I'm comfortable introducing a few global class names. If you aren't then I'll leave you to do your own special build.

###Additional classes

By default only the core classes listed above are included. There are several other responsive classes that can be optionally enabled. Use the following variables to enable these in your build.

```
$enable-flex-wrap: true;
$enable-flex-between: true;
$enable-flex-around: true;
```

These would be used as expected e.g. flex-wrap-xs, flex-between-md, flex-around-xl etc.

###If you want more, do it yourself!!
 
As I said at the start flexbox is simple and usable as it is, without needing to wrap it in some other abstraction.

If you want to extend this then do it yourself. I won't be adding any additional features beyond the basic responsive classes that are provided here.

