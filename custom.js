$( document ).ready(function() {

	var userFeed = new Instafeed({
		get: 'user',
		userId: '1584366392',
		limit: 20,
		resolution: 'standard_resolution',
		accessToken: '1584366392.1677ed0.5a4f5b55779144c8ac2b9279c8221f32',
		sortBy: 'most-recent',
		template: '<div class="col-lg-4 gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
	});
	userFeed.run();


});