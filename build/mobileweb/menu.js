//Menu file
var thisWin = Ti.UI.currentWindow,
	win = Ti.UI.createWindow();

Ti.include('functions.js');

var stage = getStageSection();

var Header = makeHeader({
		view: {
				top: 0,
				width: 'auto',
				height: 60,
				backgroundColor: '#fff'
	}, label: {
				text: 'Metas de Controle da Pressão Arterial',
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

function createMenu () {
	var menu = [];

	for ( var i = 0; i < stage.length; i++ ) {
		menu.push({title: '' + stage[i].profile.name + '', id: stage[i].profile.id, path: 'stage.js', hasChild: true});
	}

	Menu.setData(menu);
}

var Menu = makeTableMenu({
	table: {
		top: 0,
		left: 0,
		color: '#000'
	}
});

createMenu();

Menu.addEventListener('click', function (e) {
	if ( e.rowData.path && e.rowData.id ) {
		var main = Ti.UI.createWindow({
			url: e.rowData.path,
			title: 'Pressão Arterial: ' + e.rowData.title
		});

		var stageId = e.rowData.id;
		main.id = 1;
		main.open();
	}
});


// Body structure - start
Body.add(Menu);
// Body structure - end

//Create a structure
win.add(Header);

win.add(Body);

win.open();