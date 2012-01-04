// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#14ADB5');

var win = Ti.UI.createWindow({
	url: 'stage1.js',
});

var stage = {
	that: {
		id: 1,
		name: 'Normal',
		file: 'stage' + 1 + '.js'
	},
	next: {
		id: 2,
		name: 'Limítrofe',
		file: 'stage' + 2 + '.js'
	}
};

win.stage = stage;

win.open();