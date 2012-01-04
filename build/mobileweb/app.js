// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#14ADB5');

var win = Ti.UI.createWindow({
	url: 'stage1.js',
});

// Object for a default set for this stage and next stage
var stage = {
		that: {
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
		next: {
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

// Set stage options
win.stage = stage;

// Open the main window
win.open();