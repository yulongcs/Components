requirejs.config({
	paths:{
		jquery:'jquery-2.1.4.min'
	}
});

requirejs(['jquery','backtop'], function($, backtop){

	// new backtop.BackTop($('#backTop'),{
	// 	mode: 'go',
	// 	pos:100,
	//     speed:1000
	// });

$('#backTop').backtop({
	mode: 'move',
	pos:100,
	speed:1000
});

});
