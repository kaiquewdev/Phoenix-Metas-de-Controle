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

function getStageSection ( section ) {
	if ( typeof section !== undefined ) {
		var sections = {
							profile1: {
								id: 1,
								name: 'Normal',
								file: 'stage' + 1 + '.js',
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
									pressure: [140, 90],
									risk: 'medium',
									goal: 140 + '/' + 90 +' mmHg'
								}, {
									id: 3,
									name: '1 a 2 fatores de risco',
									pressure: [130, 85],
									risk: 'low',
									goal: 130 + '/' + 85 +' mmHg'
								}, {
									id: 4,
									name: 'Sem fator de risco',
									pressure: [130, 85],
									risk: 'no-risk',
									goal: 'Manter nível da PA atual'
								}],
							},
							profile2: {
								id: 2,
								name: 'Limítrofe',
								file: 'stage' + 2 + '.js',
								pattern:
								[{
									id: 1,
									name: 'Doença cardiovascular',
									pressure: [[130, 139], [85, 89]],
									risk: 'very-high',
									goal: 130 + '/' + 80 +' mmHg'
								}, {
									id: 2,
									name: '3 ou mais fatores de risco ou lesão de órgãos-alvo ou diabetes melitus',
									pressure: [[130, 139], [85, 89]],
									risk: 'high',
									goal: 130 + '/' + 85 +' mmHg'
								}, {
									id: 3,
									name: '1 a 2 fatores de risco',
									pressure: [[140, 159], [90, 99]],
									risk: 'low',
									goal: 130 + '/' + 85 +' mmHg'
								}, {
									id: 4,
									name: 'Sem fator de risco',
									pressure: [[140, 159], [90, 99]],
									risk: 'no-risk',
									goal: 'Manter nível da PA atual'
								}],
							}
						};
		
		if ( section === 'normal' || section === 1 ) {
			return sections.profile1;
		} if ( section === 'limitrofe' || section === 2 ) {
			return sections.profile2;
		}
	}
}

function getSelection ( el ) {
	// return a row element of el
	if ( typeof el !== undefined ) {
		el.addEventListener('change', function (e) {
			return e.row;
		});
	}
}
