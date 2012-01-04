function makeHeader ( options ) {
	// Create a Header for the application
	if ( typeof options !== undefined ) {
		var backHeadView = Ti.UI.createView(options.view),
			labelHead = Ti.UI.createLabel(options.label);
		
		backHeadView.add(labelHead);
		
		return backHeadView;	
	}
}

function setDescriptionContent () {
	// Set a default content in the description header
	
}

function makeDescriptionHeader ( options ) {
	// Create a default header of description
	if ( typeof options !== undefined ) {
		var frame = Ti.UI.createView(options.view),
			picker = Ti.UI.createPicker(),
			pickerData = [];
			
			// Create rows in the picker
			for ( var i = 0; i <= options.sets.length; i++ ) {
				pickerData[i] = Ti.UI.createPickerRow({title: options.sets[i]});
			}

			// Add total data in the picker
			picker.add(pickerData);

			// Add picker in the view
			frame.add(picker);

			return frame
	}
}
