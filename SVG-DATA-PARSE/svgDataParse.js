(function (argument) {
	jQuery('form').on('click', 'button', function (e) {

		var mapName = jQuery('#mapName').val();

		jQuery('#output').prepend('/** Add Additional Map Data Points **/\
			jQuery.fn.vectorMap("addMap", "' + mapName + '", {\
			    "width": 959,\
			    "height": 593,\
			    "paths": {'
		);


		var source = jQuery('#source').val();
		var path = jQuery(source).find('path');
		jQuery.each(path, function (i) {
			var pathData = jQuery(this).attr('d');
			var pathID = jQuery(this).attr('id');
			var pathLabel = jQuery(this).attr('label');
			jQuery('#output').append('"' + pathID + '": {"path": "' + pathData + '", "name": "' + pathLabel + '"}').append(',');
		})

		jQuery('#output').append('}\
			});\
		'
		);

		e.stopPropagation();
		e.preventDefault();
	})

})();

