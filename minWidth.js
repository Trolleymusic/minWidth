// minWidth - http://github.com/Trolleymusic/minWidth
// minWidth plugin by Wayne Durack
(function () {
	var minWidth = function (width, debug) {
		var setMinWidth,
			viewport,
			originalViewport;
	
		// Abort!
		if (!width || !Modernizr || !Modernizr.touch || isNaN(width)) { return; }
			
		// Min site width
		width = width - 1;
		
		// Get the viewport meta tag
		viewport = document.querySelector("meta[name=viewport]");
		originalViewport = viewport.getAttribute('content');

	
		setMinWidth = function () {
			var screenWidth,
				setViewport,
				scale,
				content;
			
			// Wrap the whole thing just in case an older / other browser doesn't like it
			try {
	
				screenWidth = screen.width;	
				if (window.orientation && (window.orientation == 90 || window.orientation == -90)) {	
					screenWidth = screen.height;
				}
				
				setViewport = function (content) {
					// Change it
					viewport.setAttribute('content', content);
				}
			
				// Is this a touch device with a screen width of less than width?
				if (screenWidth < width) {
		
					// Work out the scale of device-width : width;
					scale = screenWidth / width;
					
					// What we'll set the attribute to
					content = 'width=' + width + ',initial-scale=' + scale.toFixed(2);
					
					setViewport(content);
					
					if (debug && console && console.log) { console.log("viewport changed", content); }
					
				} else {
					// Is it wider, but we had previously zoomed out?
					setViewport(originalViewport);
					if (debug && console && console.log) { console.log("viewport changed", originalViewport); }
				}
				
			} catch(e) {
		
				// Log the error if we can
				if (debug && console && console.log) { console.log(e); }
				
			}
		}
		
		// Run on orientation change
		window.addEventListener("orientationchange", function() { setMinWidth(); }, false);
		
		// Run the minWidth function
		setMinWidth();
		
	}

	// Don't overwrite window.minWidth if something's already using it
	window.minWidth = (window.minWidth ? window.minWidth : minWidth);	
}());