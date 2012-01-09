// Built-in function
String.prototype.deal = function() {
	var content = this,
		n = 0,
		args = arguments;

		for ( var i in args ) {
			if ( content.search(/\{+[0-9]+\}/) !== -1 ) {
				content = content.replace( '\{' + i + '\}', args[i] )
			} if ( content.search( /\{[0-9][:][e][0-9]\}/ ) > -1 ) {
				n = content.match( /\{[0-9][:][e][0-9]\}/ )
				n = n[0].replace( '\{'+i+':e', '' )
				n = n.replace( '\}', '' )
				n = parseInt(n)

				if ( content.search( '\{'+i+':e'+n+'\}' ) > -1 ) {
					args[i] = parseFloat(args[i])
					args[i] = args[i].toFixed(n)
					content = content.replace( /\{[0-9][:][e][0-9]\}/, args[i] )
				}
			}
		}

		return content;
}

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

function makeSection ( options ) {
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
	if ( typeof options !== undefined ) {
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
}

function makeFlag ( options ) {
	if ( typeof options !== undefined ) {
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
}

function makeLabel ( options ) {
	if ( typeof options !== undefined ) {
		var label = Ti.UI.createLabel( options.titleFlag );

		return label;
	}
}

function makeFrameFlag ( options ) {
	if ( typeof options !== undefined ) {
		var view = Ti.UI.createView( options.view );

		return view
	}
}

function makeTableMenu ( options ) {
	if ( typeof options !== undefined ) {
		var table = Ti.UI.createTableView( options.table );
		
		return table;
	}
}

function makeButton ( options ) {
	if ( typeof options !== undefined ) {
		var view = Ti.UI.createView( options.view ),
			button = Ti.UI.createButton( options.button );

		view.add(button);

		return view;
	}
}

function getSections () {
	return [{
							profile: {
								id: 1,
								name: 'Normal',
								pressure: ['< 130', '< 85'],
								pattern:
								[{
									id: 1,
									name: 'Doença cardiovascular',
									risk: 'high',
									goal: '< 130/85 mmHg',
								}, {
									id: 2,
									name: '3 ou mais fatores de risco ou lesão de órgãos-alvo ou diabetes melitus',
									risk: 'medium',
									goal: '< 140/90 mmHg'
								}, {
									id: 3,
									name: '1 a 2 fatores de risco',
									risk: 'low',
									goal: '< 130/85 mmHg'
								}, {
									id: 4,
									name: 'Sem fator de risco',
									risk: 'no-risk',
									goal: 'Manter nível da PA atual'
								}, {
									id: '',
									name: '',
									risk: '',
									goal: ''
								}],
							}
						}, {
							profile: {
								id: 2,
								name: 'Limítrofe',
								pressure: ['< 130-139', '< 85-89'],
								pattern:
								[{
									id: 1,
									name: 'Doença cardiovascular',
									risk: 'very-high',
									goal: '< 130/80 mmHg',
								}, {
									id: 2,
									name: '3 ou mais fatores de risco ou lesão de órgãos-alvo ou diabetes melitus',
									risk: 'high',
									goal: '< 130/85 mmHg'
								}, {
									id: 3,
									name: '1 a 2 fatores de risco',
									risk: 'low',
									goal: '< 130/85 mmHg'
								}, {
									id: 4,
									name: 'Sem fator de risco',
									risk: 'no-risk',
									goal: 'Manter nível da PA atual'
								}, {
									id: '',
									name: '',
									risk: '',
									goal: ''
								}],
							}
						}, {
							profile: {
								id: 3,
								name: 'Hipertensão Estágio 1',
								pressure: ['< 140-159', '< 90-99'],
								pattern:
								[{
									id: 1,
									name: 'Doença cardiovascular',
									risk: 'very-high',
									goal: '< 130/80 mmHg',
								}, {
									id: 2,
									name: '3 ou mais fatores de risco ou lesão de órgãos-alvo ou diabetes melitus',
									risk: 'high',
									goal: '< 130/85 mmHg'
								}, {
									id: 3,
									name: '1 a 2 fatores de risco',
									risk: 'medium',
									goal: '< 140/90 mmHg'
								}, {
									id: 4,
									name: 'Sem fator de risco',
									risk: 'low',
									goal: '< 140/90 mmHg'
								}, {
									id: '',
									name: '',
									risk: '',
									goal: ''
								}],
							}
						}, {
							profile: {
								id: 4,
								name: 'Hipertensão Estágio 2',
								pressure: ['< 160-179', '< 100-109'],
								pattern:
								[{
									id: 1,
									name: 'Doença cardiovascular',
									risk: 'very-high',
									goal: '< 130/80 mmHg',
								}, {
									id: 2,
									name: '3 ou mais fatores de risco ou lesão de órgãos-alvo ou diabetes melitus',
									risk: 'high',
									goal: '< 130/85 mmHg'
								}, {
									id: 3,
									name: '1 a 2 fatores de risco',
									risk: 'medium',
									goal: '< 140/90 mmHg'
								}, {
									id: 4,
									name: 'Sem fator de risco',
									risk: 'medium',
									goal: '< 140/90 mmHg'
								}, {
									id: '',
									name: '',
									risk: '',
									goal: ''
								}],
							}
						}, {
							profile: {
								id: 5,
								name: 'Hipertensão Estágio 3',
								pressure: ['>= 180', '>= 110'],
								pattern:
								[{
									id: 1,
									name: 'Doença cardiovascular',
									risk: 'very-high',
									goal: '< 130/80 mmHg',
								}, {
									id: 2,
									name: '3 ou mais fatores de risco ou lesão de órgãos-alvo ou diabetes melitus',
									risk: 'very-high',
									goal: '< 130/80 mmHg'
								}, {
									id: 3,
									name: '1 a 2 fatores de risco',
									risk: 'very-high',
									goal: '< 130/80 mmHg'
								}, {
									id: 4,
									name: 'Sem fator de risco',
									risk: 'high',
									goal: '< 130/85 mmHg'
								}, {
									id: '',
									name: '',
									risk: '',
									goal: ''
								}],
							}
						}];
}

function getTranslation ( pattern ) {
	var dic = [{
		untrans: 'very-high',
		translate: 'Risco muito alto'
	}, {
		untrans: 'high',
		translate: 'Risco alto'
	}, {
		untrans: 'medium',
		translate: 'Risco médio'
	}, {
		untrans: 'low',
		translate: 'Risco baixo'
	}, {
		untrans: 'no-risk',
		translate: 'Sem risco adicional'
	}]

	if ( typeof pattern !== undefined ) {
		for ( var i = 0; i < dic.length; i++ ) {
			if ( pattern === dic[i].untrans ) {
				return dic[i].translate;
			}
		}
	}
}

function getStageSection ( section ) {
	var sections = getSections();

	if ( typeof section !== undefined ) {
		for ( var i = 0; i <= sections.length; i++ ) {
			if ( i < sections.length ) {
				if ( section === sections[i].profile.id) {
					return sections[i].profile;
				}
			}
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
