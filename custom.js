$( document ).ready(function() {

	var userFeed = new Instafeed({
		get: 'user',
		userId: '',
		limit: 20,
		resolution: 'standard_resolution',
		accessToken: '',
		sortBy: 'most-recent',
		template: '<div class="col-lg-4 gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
	});
	userFeed.run();
	
	/* get userid from https://smashballoon.com/instagram-feed/find-instagram-user-id/?username=juanvelezfitness&349zxd17610jjzl=4 */
	/* get accessToken from http://instagram.pixelunion.net/  */

});