(function () {
	var minWidth = function (width, debug) {
		var viewport,
			scale,
			screenWidth,
			content;
			
		// Abort!
		if (!width || !Modernizr || isNaN(width)) { return; }
			
		// Min site width
		width = width - 1;
		
		// Wrap the whole thing just in case an older / other browser doesn't like it
		try {
		
			// Is this a touch device with a screen width of less than width?
			if (Modernizr.touch && screen.width < width) {
			
				screenWidth = screen.width;			
	
				if (window.orientation && (window.orientation == 90 || window.orientation == -90)) {	
					screenWidth = screen.height;
				}
				
				// Work out the scale of device-width : width;
				scale = screenWidth / width;
				
				// What we'll set the attribute to
				content = 'width=' + width + ',initial-scale=' + scale.toFixed(2);
				
				// Get the viewport meta tag
				viewport = document.querySelector("meta[name=viewport]");
				// Change it
				viewport.setAttribute('content', content);
				
				if (debug && console && console.log) { console.log("viewport changed", content); }
				
			}
		
		} catch(e) {
	
			// Log the error if we can
			if (debug && console && console.log) { console.log(e); }
			
		}
	}
	// Don't overwrite window.minWidth if something's already using it
	window.minWidth = (window.minWidth ? window.minWidth : minWidth);	
}());