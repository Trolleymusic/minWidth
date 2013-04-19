# minWidth
### Javascript plugin for making touch devices that have a screen size less than the min-width of the site scale the site to fit, but lets larger devices set their own width and show the content unscaled. Modifies the viewport meta tag.

## Why

A project I was on recently had a nice clear design that was quite flexible with a lot of content in columns. The design worked well on desktop, where there was a max-width of about six columns, and on tablets, which would end up narrowing to about three or four columns width.

We decided to put a min-width limit of two columns (about 582px including the margin), which looked good on narrow windows on a desktop, but on a mobile with the viewport settings as `width=device-width,initial-scale=1` the columns appeared too wide and required scrolling to see the whole two columns. The site looked great when scaled to the minWidth though. But I couldn't write two different viewport meta tags into the HTML though...

## ... Or could I?

Apparently I can! This plugin will change the viewport content to `width=x,initial-scale=y` where `x` is the min-width specified when the plugin is called and `y` is the device-width : min-width ratio.

## How to use it

I put it at the end of the plugins.js file from html5 boilerplate usually and as soon as I can in the main.js file  call it:

	// x is the min-width of the site
	minWidth(x);

minWidth takes two arguments:
	
	width : number, the min-width in pixels,
	debug :	boolean (optional), console.log debug information

Calling minWidth with debug will log to the console errors or the new viewport content if the viewport tag is changed.

minWidth puts itself into the `window` object so it can be accessed at `window.minWidth`, but will not override anything that's already there. I usually wrap the function call as well:

	// x is the min-width of the site
	(function () { minWidth(x); }());

At the moment minWidth requires Modernizr, but I will be getting rid of that soon.


### To do:
* Remove Modernizr and replace with native touch detect
* Add a demo
* Work out some way to force minWidth into the global namespace - IE fails when calling minWidth and says method not allowed when calling window.minWidth - add this to bugs list on GitHub?