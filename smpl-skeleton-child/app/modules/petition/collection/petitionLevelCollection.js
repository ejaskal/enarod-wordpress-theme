define(
	function(require){
		'use strict';

		var Backbone = require('backbone'),
		PetitionLevel	= require( 'module/petition/model/petitionLevelModel' );

		return Backbone.Collection.extend({
			model: PetitionLevel,

			url: "https://enarod.org/app/api/petition/level",

			parse: function(data){
				return data.Data;
			}
		
		
		});


});
