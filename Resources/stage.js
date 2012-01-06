
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
var setOptions = [
	'Doença cardiovascular', 
	'3 ou mais fatores de risco', 
	'1 a 2 fatores de risco',
	'Sem fator de risco']

// Description model
var Description = makeSection({
	view: {
		top: 10,
		backgroundColor: '#fff',
		width: 280,
		height: 350,
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
		width: 'auto',
		height: 40
	},
	sets: setOptions
});

/*var Pressure = makeSection({
	view: {
		top:
	}
});*/

/*var Profile = makeProfileContent({
	view: {
		top: 135,
		backgroundColor: '#fff',
		width: 280,
		height: 185,
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

var flags = {
	width: 125,
	height: 30,
	color: ['#fff', '#5c5c5c'],
	bgColor: ['#fff'],
	textAlign: 'center',
	font: {fontSize: 13}
};

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
		width: flags.width,
		height: flags.height,
		text: 'Risco Muito Alto',
		backgroundColor: '#a60808',
		font: flags.font,
		color: flags.color[0],
		textAlign: flags.textAlign
	},
	flag2: {
		top:33,
		width: flags.width,
		height: flags.height,
		text: 'Risco Alto',
		backgroundColor: '#e28602',
		font: flags.font,
		color: flags.color[0],
		textAlign: flags.textAlign,
	},
	flag3: {
		top:66,
		width: flags.width,
		height: flags.height,
		text: 'Risco médio',
		backgroundColor: '#f9c614',
		font: flags.font,
		color: flags.color[0],
		textAlign: flags.textAlign,
	},
	flag4: {
		top:99,
		width: flags.width,
		height: flags.height,
		text: 'Risco Baixo',
		backgroundColor: '#18c7d2',
		font: flags.font,
		color: flags.color[0],
		textAlign: flags.textAlign,
	},
	flag5: {
		top:132,
		width: flags.width,
		height: flags.height,
		text: 'Sem risco adicional',
		backgroundColor: '#089be7',
		font: flags.font,
		color: flags.color[0],
		textAlign: flags.textAlign,
	}
});

var Goals = makeFlag({
	view: {
		top: 0,
		left: 0,
		width: 125,
		height: 160,
		backgroundColor: flags.bgColor[0]
	},
	flag1: {
		top:0,
		width: flags.width,
		height: flags.height,
		text: stage.pattern[0].goal,
		backgroundColor: flags.bgColor[0],
		font: flags.font,
		color: flags.color[1],
		textAlign: flags.textAlign,
	},
	flag2: {
		top:33,
		width: flags.width,
		height: flags.height,
		text: stage.pattern[1].goal,
		backgroundColor: flags.bgColor[0],
		font: flags.font,
		color: flags.color[1],
		textAlign: flags.textAlign,
	},
	flag3: {
		top:66,
		width: flags.width,
		height: flags.height,
		text: stage.pattern[2].goal,
		backgroundColor: flags.bgColor[0],
		font: flags.font,
		color: flags.color[1],
		textAlign: flags.textAlign,
	},
	flag4: {
		top:99,
		width: flags.width,
		height: flags.height,
		text: stage.pattern[3].goal,
		backgroundColor: flags.bgColor[0],
		font: flags.font,
		color: flags.color[1],
		textAlign: flags.textAlign,
	},
	flag5: {
		top:132,
		width: flags.width,
		height: flags.height,
		text: stage.pattern[4].goal,
		backgroundColor: flags.bgColor[0],
		font: flags.font,
		color: flags.color[1],
		textAlign: flags.textAlign,
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
Profile.add(Line3.header);*/

// Add description head to body
Body.add(Description.frame);

// Add profile structure to body
//Body.add(Profile);

// Body content part - End

// Add the default header in the window
win.add(Header);

// Add the default description section
win.add(Body);

// Open the main window
win.open();
