
// Current window and Principal Window
var thisWin = Ti.UI.currentWindow,
	win		= Ti.UI.createWindow();
	
// Include the functions.js file for a utils functions
Ti.include('functions.js');

var Header = makeHeader({
	view: {
			top: 0,
			width: 'auto',
			height: 60,
			backgroundColor: '#dedede'
}, label: {
			text: 'Pressão Arterial',
			width: 'auto',
			height: 'auto',
			font: {fontSize: 18},
			textAlign: 'center',
			color: '#1A6E73'
} });

var setOptions = [
	'Doença cardiovascular', 
	'3 ou mais fatores de risco', 
	'1 a 2 fatores de risco',
	'Sem fator de risco']

var Description = makeDescriptionHeader({
	view: {
		top: 70,
		backgroundColor: '#fff',
		width: 500,
		height: 120,
		borderRadius: 4
	},
	sets: setOptions
});

// Add the default header in the window
win.add(Header);

// Add the default description section
win.add(Description);

// Open the main window
win.open();
