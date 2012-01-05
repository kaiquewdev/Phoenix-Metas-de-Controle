
// Current window and Principal Window
var thisWin = Ti.UI.currentWindow,
	win		= Ti.UI.createWindow();
	
// Include the functions.js file for a utils functions
Ti.include('functions.js');

var stage = getStageSection(1);

// Default Header section
var Header = makeHeader({
		view: {
				top: 0,
				width: 'auto',
				height: 60,
				backgroundColor: '#fff'
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
		text: stage.pressure[0],
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
		text: stage.pressure[1],
		width: 'auto',
		height: 'auto',
		color: '#1A6E73',
		right: 8
	}
});

var Line3 = makeProfileLine({
	pHeader: {
		top: 115,
		width: 260,
		height: 60
	}
});

var LeftTitleFrameFlag = makeLabel({
	titleFlag: {
		top: 0,
		left: 0,
		text: 'Risco cardiovascular',
		width: 125,
		height: 30,
		font: {fontSize: 12},
		textAlign: 'center',
		color: '#1A6E73'
	}
});

var RightTitleFrameFlag = makeLabel({
	titleFlag: {
		top: 0,
		right: 0,
		text: 'Meta (no mínimo)',
		width: 125,
		height: 30,
		font: {fontSize: 12},
		textAlign: 'center',
		color: '#1A6E73'
	}
});


var LeftFrameFlag = makeFrameFlag({
	view: {
		bottom: 0,
		left: 0,
		width: 125,
		height: 30
	}
});

var RightFrameFlag = makeFrameFlag({
	view: {
		bottom: 0,
		right: 0,
		width: 125,
		height: 30
	}
});

var Risks = makeFlag({
	view: {
		top: 0,
		left: 0,
		width: 125,
		height: 160,
		backgroundColor: '#fff'
	},
	flag1: {
		top:0,
		width: 125,
		height: 30,
		text: 'Risco Muito Alto',
		backgroundColor: '#a60808',
		color: '#fff',
		textAlign: 'center'
	},
	flag2: {
		top:33,
		width: 125,
		height: 30,
		text: 'Risco Alto',
		backgroundColor: '#e28602',
		color: '#fff',
		textAlign: 'center'
	},
	flag3: {
		top:66,
		width: 125,
		height: 30,
		text: 'Risco médio',
		backgroundColor: '#f9c614',
		color: '#fff',
		textAlign: 'center'
	},
	flag4: {
		top:99,
		width: 125,
		height: 30,
		text: 'Risco Baixo',
		backgroundColor: '#18c7d2',
		color: '#fff',
		textAlign: 'center'
	},
	flag5: {
		top:132,
		width: 125,
		height: 30,
		text: 'Sem risco adicional',
		backgroundColor: '#089be7',
		color: '#fff',
		textAlign: 'center'
	}
});

var Goals = makeFlag({
	view: {
		top: 0,
		left: 0,
		width: 125,
		height: 160,
		backgroundColor: '#fff'
	},
	flag1: {
		top:0,
		width: 125,
		height: 30,
		text: stage.pattern[0].goal,
		backgroundColor: '#fff',
		color: '#5c5c5c',
		textAlign: 'center'
	},
	flag2: {
		top:33,
		width: 125,
		height: 30,
		text: stage.pattern[1].goal,
		backgroundColor: '#fff',
		color: '#000',
		textAlign: 'center'
	},
	flag3: {
		top:66,
		width: 125,
		height: 30,
		text: stage.pattern[2].goal,
		backgroundColor: '#fff',
		color: '#000',
		textAlign: 'center'
	},
	flag4: {
		top:99,
		width: 125,
		height: 30,
		text: stage.pattern[3].goal,
		backgroundColor: '#fff',
		color: '#000',
		textAlign: 'center'
	},
	flag5: {
		top:132,
		width: 125,
		height: 30,
		text: stage.pattern[4].goal,
		backgroundColor: '#fff',
		color: '#000',
		textAlign: 'center'
	}
});

var positions = [{
	level: 'very-high',
	risk: 0
}, {
	level: 'high',
	risk: -33
}, {
	level: 'medium',
	risk: -66
}, {
	level: 'low',
	risk: -99
}, {
	level: 'no-risk',
	risk: -132
}];


//Define a default risk
for ( var i = 0; i <= positions.length; i++ ) {
	if ( i < positions.length ) {
		if ( positions[i].level === stage.pattern[0].risk ) {
			Risks.top = positions[i].position;
		}
	}
}

// Define a risk by selection
Description.picker.addEventListener('change', function ( e ) {
	var rowName = e.row.title,
		list = stage.pattern;

	for (var i = 0; i <= list.length; i++ ) {
		if ( i < list.length ) {
			if ( isPattern(rowName, list[i].name) ) {
				for ( var j = 0; j <= positions.length; j++ ) {
					if ( j < positions.length ) {
						if ( list[i].risk == positions[j].level ) {
							Risks.animate({top: positions[j].risk, duration: 700});
							Goals.animate({top: positions[i].risk, duration: 700});
						}
					}
				}
			}
		}
	}
});

// Body content part - Start
LeftFrameFlag.add(Risks);
RightFrameFlag.add(Goals);

Line3.header.add(LeftTitleFrameFlag);
Line3.header.add(RightTitleFrameFlag);

Line3.header.add(LeftFrameFlag);
Line3.header.add(RightFrameFlag);

// Profile add lines
Profile.add(Line1.header);
Profile.add(Line2.header);
Profile.add(Line3.header);

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
