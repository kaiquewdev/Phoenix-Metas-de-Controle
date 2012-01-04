//Current window
var thisWin = Ti.UI.currentWindow,
	win		= Ti.UI.createWindow();
	
function header ( options ) {
	if (typeof options !== undefined) {
		var backHeadView = Ti.UI.createView(options.view),
		labelHead	 = Ti.UI.createLabel(options.label);
		
		backHeadView.add(labelHead);
		
		return backHeadView;	
	}
}

var Header = header({view: {
	width: 'auto',
	height: 40,
}, label: {
	text: 'Pressão Arterial'
}});

win.add(Header);
;