function makeHeader ( options ) {
	// Create a Header for the application
	if ( typeof options !== undefined ) {
		var backHeadView = Ti.UI.createView(options.view),
			labelHead = Ti.UI.createLabel(options.label);
		
		backHeadView.add(labelHead);
		
		return backHeadView;	
	}
}

function makeBody ( options ) {
	// Set a default content in the description header
	if ( typeof options !== undefined ) {
		var view = Ti.UI.createView( options.view );

		return view;
	}
}

function makeDescriptionHeader ( options ) {
	// Create a default header of description
	if ( typeof options !== undefined ) {
		var frame = Ti.UI.createView( options.view ),
			titleView = Ti.UI.createView( options.tView ),
			titleLabel = Ti.UI.createLabel( options.tLabel ),
			pickerView = Ti.UI.createView( options.pView ),
			picker = Ti.UI.createPicker(),
			pickerData = [];
			
			// Create rows in the picker
			for ( var i = 0; i <= options.sets.length; i++ ) {
				if ( i < options.sets.length ) {
					pickerData.push( Ti.UI.createPickerRow({title: options.sets[i]}) );
				}
			}

			// Add total data in the picker
			picker.add(pickerData);

			// Add title to the view
			titleView.add(titleLabel);

			// View to picker
			pickerView.add(picker);

			// Add view of title to the description view
			frame.add(titleView)
			// Add picker in the view
			frame.add(pickerView);

			return { 
				frame: frame,
				picker: picker
			}
	}
}

function makeProfileContent ( options ) {
	// Create a profile content to show informations
	if ( typeof options !== undefined ) {
		var view = Ti.UI.createView( options.view );

		return view;
	}
}

function makeProfileLine ( options ) {
	// Make a line in the profile line
	var profileHeader = Ti.UI.createView( options.pHeader ),
		profileHeaderLabel = Ti.UI.createLabel( options.pHeaderLabel),
		leftIndicator = Ti.UI.createView( options.lIndicator ),
		leftIndicatorLabel = Ti.UI.createLabel( options.liLabel ),
		rightIndicatorLabel = Ti.UI.createLabel( options.riLabel );

	// Add label to header of profile
	profileHeader.add(profileHeaderLabel);

	// Add label to left indicator
	leftIndicator.add(leftIndicatorLabel);
	leftIndicator.add(rightIndicatorLabel);

	// Add indicator to profile header
	profileHeader.add(leftIndicator);

	// Add profile header in the main view
	return {
		header: profileHeader,
		label: rightIndicatorLabel
	};
}

function makeFlag ( options ) {
	// Create a flag indicator for project
	var view = Ti.UI.createView( options.view ),
		flag1 = Ti.UI.createLabel( options.flag1 ),
		flag2 = Ti.UI.createLabel( options.flag2 ),
		flag3 = Ti.UI.createLabel( options.flag3 ),
		flag4 = Ti.UI.createLabel( options.flag4 ),
		flag5 = Ti.UI.createLabel( options.flag5 );

	// Very High
	view.add(flag5);
	// High
	view.add(flag4);
	// Medium
	view.add(flag3);
	// Low
	view.add(flag2);
	// No Risk
	view.add(flag1);

	return view;
}

function makeLabel ( options ) {
	var label = Ti.UI.createLabel( options.titleFlag );

	return label;
}

function makeFrameFlag ( options ) {
	var view = Ti.UI.createView( options.view );

	return view
}

function getStageSection ( section ) {
	if ( typeof section !== undefined ) {
		var sections = {
							profile1: {
								id: 1,
								name: 'Normal',
								file: 'stage' + 1 + '.js',
								pressure: ['< ' + 130, '< ' + 85],
								pattern:
								[{
									id: 1,
									name: 'Doença cardiovascular',
									pressure: [130, 85],
									risk: 'high',
									goal: 130 + '/' + 85 +' mmHg'
								}, {
									id: 2,
									name: '3 ou mais fatores de risco ou lesão de órgãos-alvo ou diabetes melitus',
									risk: 'medium',
									goal: 140 + '/' + 90 +' mmHg'
								}, {
									id: 3,
									name: '1 a 2 fatores de risco',
									risk: 'low',
									goal: 130 + '/' + 85 +' mmHg'
								}, {
									id: 4,
									name: 'Sem fator de risco',
									risk: 'no-risk',
									goal: 'Manter nível da PA atual'
								}],
							}
						};
		
		if ( section === 'normal' || section === 1 ) {
			return sections.profile1;
		}
	}
}

function isPattern ( pattern, element ) {
	if ( typeof pattern === 'string' && typeof element === 'string' ) {
		if ( element.indexOf(pattern) > -1 ) {
			return true;
		} else {
			return false;
		}
	}
}
