
// Current window and Principal Window
var thisWin = Ti.UI.currentWindow,
	win		= Ti.UI.createWindow();
	
// Include the functions.js file for a utils functions
Ti.include('functions.js');

var stage = getSections();

// Default Header section
var Header = makeHeader({
		view: {
				top: 0,
				width: 'auto',
				height: 60,
				backgroundColor: '#fff'
	}, label: {
				text: 'Logo',
				width: 'auto',
				height: 'auto',
				font: {fontSize: 16},
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
var setDescription = [
	'Doença cardiovascular', 
	'3 ou mais fatores de risco', 
	'1 a 2 fatores de risco',
	'Sem fator de risco'];

// Factor section
var Description = makeSection({
	view: {
		top: 75,
		backgroundColor: '#fff',
		width: 280,
		height: 215,
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
		top: 0,
		text: 'Fator:',
		font: {fontSize: 18},
		color: '#1A6E73',
		textAlign: 'center'
	},
	pView: {
		top: 35,
		width: 200,
		height: 40
	},
	sets: setDescription
});

setPressure = [
	'{0} - {1}'.deal(stage[0].profile.pressure[0], stage[0].profile.pressure[1]),
	'{0} - {1}'.deal(stage[1].profile.pressure[0], stage[1].profile.pressure[1]),
	'{0} - {1}'.deal(stage[2].profile.pressure[0], stage[2].profile.pressure[1]),
	'{0} - {1}'.deal(stage[3].profile.pressure[0], stage[3].profile.pressure[1]),
	'{0} - {1}'.deal(stage[4].profile.pressure[0], stage[4].profile.pressure[1]),
];

// Pressure section
var Pressure = makeSection({
	view: {
		top: 80,
		width: 280,
		height: 80
	},
	tView: {
		top: 5,
		width: 'auto',
		height: 40
	},
	tLabel: {
		top: 0,
		text: 'Pressão: (Sistólica e Diastólica)',
		font: {fontSize: 18},
		color: '#1A6E73',
		textAlign: 'center'
	},
	pView: {
		top: 35,
		width: 200,
		height: 40
	},
	sets: setPressure
});

var showResult = makeButton({
	view: {
		top: 160,
		width: 'auto',
		height: 50
	}, button: {
		title: 'Ver resultado',
		width: 150,
		height: 40
	}
});

var state = {
	factor: setDescription[0],
	pressure: setPressure[0]
};

Description.picker.addEventListener('change', function (e) {
	state['factor'] = e.row.title;
});

Pressure.picker.addEventListener('change', function (e) {
	state['pressure'] = e.row.title;
});

showResult.addEventListener('click', function () {

	var profile = {};

	for ( var i = 0; i < stage.length; i++ ) {
		var pressure = '{0} - {1}'.deal(stage[i].profile.pressure[0], stage[i].profile.pressure[1]),
			pattern;

		if ( state['pressure'] === pressure ) {
			profile['title'] = stage[i].profile.name;
			pattern = stage[i].profile.pattern;

			for ( var j = 0; j < pattern.length; j++ ) {
				if ( isPattern(state.factor, pattern[j].name) ) {
					profile['risk'] = pattern[j].risk;
					profile['goal'] = pattern[j].goal;
				}
			}
		}
	}

	profile.risk = getTranslation(profile.risk);

	alert(
		'{0} \n\n Risco: {1} \n\n Meta: {2} \n\n'.deal(profile.title, profile.risk, profile.goal)
	);
});

// Overlay - start
var result	= Ti.UI.createWindow({
		backgroundColor: '#000',
		zIndex: 9999,
		opacity: 0.0,
		visible: false
});

result.open()

// Add description head to body
Body.add(Description.frame);
Description.frame.add(Pressure.frame);
Description.frame.add(showResult);

// Add profile structure to body
//Body.add(Profile);

// Body content part - End

// Add the default header in the window
win.add(Header);

// Add the default description section
win.add(Body);

// Open the main window
win.open();
