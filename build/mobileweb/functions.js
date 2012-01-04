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
	if ( typeof options != undefined ) {
		var view = Ti.UI.createView( options.view );

		return view;
	}
}

function makeDescriptionHeader ( options ) {
	// Create a default header of description
	if ( typeof options !== undefined ) {
		var frame = Ti.UI.createView(options.view),
			titleView = Ti.UI.createView(options.tView),
			titleLabel = Ti.UI.createLabel(options.tTitle),
			pickerView = Ti.UI.createView(options.pView),
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

			// Add view of title to the description view
			frame.add(titleView)
			// Add picker in the view
			frame.add(pickerView);

			return frame
	}
}

function makeProfileContent ( options ) {
	// Create a profile content to show informations
	if ( typeof options != undefined ) {
		
	}
}
;