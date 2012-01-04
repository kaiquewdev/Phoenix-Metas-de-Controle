
// Current window and Principal Window
var thisWin = Ti.UI.currentWindow,
	win		= Ti.UI.createWindow();
	
// Include the functions.js file for a utils functions
Ti.include('functions.js');

var stage = getStageSection('normal');

// Default Header section
var Header = makeHeader({
		view: {
				top: 0,
				width: 'auto',
				height: 60,
				backgroundColor: '#dedede'
	}, label: {
				text: 'Pressão Arterial: ' + stage.name,
				width: 'auto',
				height: 'auto',
				font: {fontSize: 18},
				textAlign: 'center',
				color: '#1A6E73'
	} 
});

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
	}
});

//Description.picker.addEventListener('change', function (e) {
//			numeration = getPattern(e.row.title, stage.pattern);
//
//			Ti.API.info('Numeration: ');
//			Ti.API.info(numeration);
//});

var Line1 = makeProfileLine({
	pHeader: {
		top: 10,
		backgroundColor: '#334849',
		width: 260,
		height: 40,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#dedede'
	},
	pHeaderLabel: {
		text: 'Pressão',
		left: 10,
		font: {fontSize: 14},
		color: '#fff'
	},
	lIndicator: {
		right: 5,
		backgroundColor: '#fff',
		width: 160,
		height: 30,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#dedede'
	},
	liLabel: {
		text: 'sistólica',
		width: 'auto',
		height: 'auto',
		color: '#1A6E73',
		left: 8
	},
	riLabel: {
		text: '< ',
		width: 'auto',
		height: 'auto',
		color: '#1A6E73',
		right: 8
	}
});

var Line2 = makeProfileLine({
	pHeader: {
		top: 55,
		backgroundColor: '#334849',
		width: 260,
		height: 40,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#dedede'
	},
	pHeaderLabel: {
		text: 'Pressão',
		left: 10,
		font: {fontSize: 14},
		color: '#fff'
	},
	lIndicator: {
		right: 5,
		backgroundColor: '#fff',
		width: 160,
		height: 30,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#dedede'
	},
	liLabel: {
		text: 'diastólica',
		width: 'auto',
		height: 'auto',
		color: '#1A6E73',
		left: 8
	},
	riLabel: {
		text: '< ',
		width: 'auto',
		height: 'auto',
		color: '#1A6E73',
		right: 8
	}
});

// Body content part - Start

// Profile add lines
Profile.add(Line1);
Profile.add(Line2);

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
