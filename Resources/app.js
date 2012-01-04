// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#14ADB5');

var win = Ti.UI.createWindow({
	url: 'stage1.js',
});

// Open the main window
win.open();
