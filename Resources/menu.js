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

var menuItens = [];

Ti.API.info(stage);

//for ( var i = 0; i <= stage.length; i++ ) {
//	if ( i < stage.length ) {
//		menuItens.push({title: stage[i].profile.name});
//	}
//}

var Menu = makeTableMenu({
	data: menuItens,
	top: 0,
	left: 0,
	color: '#000',
});


// Body structure - start
Body.add(Menu);
// Body structure - end

//Create a structure
win.add(Header);

win.add(Body);

win.open();