
// Current window and Principal Window
var thisWin = Ti.UI.currentWindow,
	win		= Ti.UI.createWindow();
	
// Include the functions.js file for a utils functions
Ti.include('functions.js');

var stage1 = getStageSection('normal');

// Default Header section
var Header = makeHeader({
	view: {
			top: 0,
			width: 'auto',
			height: 60,
			backgroundColor: '#dedede'
}, label: {
			text: 'Pressão Arterial: ' + stage1.name,
			width: 'auto',
			height: 'auto',
			font: {fontSize: 18},
			textAlign: 'center',
			color: '#1A6E73'
} });

// Default body
var Body = makeBody({
	view: {
		top: 60,
		width: 'auto',
		height: 'auto'
	}
});

// Options for the factors
var setOptions = [
	'Doença cardiovascular', 
	'3 ou mais fatores de risco', 
	'1 a 2 fatores de risco',
	'Sem fator de risco']

// Description model
var Description = makeDescriptionHeader({
	view: {
		top: 10,
		backgroundColor: '#fff',
		width: 280,
		height: 115,
		borderRadius: 4,
		borderWidth: 2,
		borderColor: '#dedede'
	},
	tView: {
		top: 5,
		width: 'auto',
		height: 40
	},
	tLabel: {
		text: 'Fator:',
		font: {fontSize: 18},
		color: '#1A6E73'
	},
	pView: {
		top: 50,
		width: 'auto',
		height: 50
	},
	sets: setOptions
});

var Profile = makeProfileContent({
	view: {
		top: 135,
		backgroundColor: '#fff',
		width: 280,
		height: 200,
		borderRadius: 4,
		borderWidth: 2,
		borderColor: '#dedede'
	},
});

// Body content part - Start

// Add description head to body
Body.add(Description.frame);

// Add profile structure to body
Body.add(Profile);

// Body content part - End

// Add the default header in the window
win.add(Header);

// Add the default description section
win.add(Body);

// Open the main window
win.open();
