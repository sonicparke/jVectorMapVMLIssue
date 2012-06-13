function InitializeMaps(argument) {
	var maps = {
		WORLD:'world_en',
		US:'us_en',
		IA: 'usIA_en'
	}

	var axcData = {
		name: "Harsco Air-X-Changers",
		email: "axcsales@harsco.com",
		phone: "918-619-8000"
	};
	var westlandData = {
		name: "Westland Engineering",
		email: "axcsalesw@harsco.com",
		phone: "949-768-8699"
	};
	var eadsHoustonData = {
		name: "Eads Houston",
		email: "axcsalese@harsco.com",
		phone: "713-780-1551"
	};
	var eadsTulsaData = {
		name: "Eads Tulsa",
		email: "axcsalese@harsco.com",
		phone: "713-780-1551"
	};
	var eadsCanadaData = {
		name: "Eads Canada",
		email: "axcsalese@harsco.com",
		phone: "713-780-1551"
	};

	var currentMap = '#' + maps.WORLD;

	jQuery('.vmap').each(function() {
	   if(jQuery(this).is(currentMap)) {
	     jQuery(this).show();
	   } else {
	     jQuery(this).hide();
	   }
	});

	jQuery('.vmapContainer').on('click', '.close', function (e) {
		jQuery(this).closest('.vmap').fadeOut();
		e.preventDefault();
		e.stopPropagation();
	})

	jQuery('#' + maps.WORLD).vectorMap({
		    map: maps.WORLD,
		    backgroundColor: '#fff',
		    borderColor: '#c9c9c9',
		    color: '#84bfda',
		    hoverOpacity: 0.7,
		    enableZoom: true,
		    showTooltip: true,
		    // values: rep_values_world,
		    scaleColors: ['#C8EEFF', '#006491'],
		    normalizeFunction: 'polynomial',
		    onRegionClick: function  (event, label, index) {
		    	
		    	if(label === 'US') {
		    		// console.log(label)
		    		ShowMap(maps.US, 'US', label, maps);
		    	}
		    	else {
		    		// ShowDialog(index, label, 'world');
		    		jQuery('#dialog').dialog({
						position: { 
					        my: 'center',
					        at: 'center',
					        of: jQuery('.vmapContainer')
					    },
					    title: index,
					    resizable: false
					});
		    	}
		    	
		    }
		});

		
		
		jQuery('#' + maps.US).vectorMap({
		    map: maps.US,
		    backgroundColor: '#fff',
		    borderColor: '#c9c9c9',
		    borderWidth: 3,
		    color: '#84bfda',
		    hoverOpacity: 0.7,
		    scaleColors: ['#C8EEFF', '#006491'],
		    normalizeFunction: 'polynomial',
		    onRegionClick: function  (event, label, index) {
		    	// if(label === 'ny') {
		    	// 	ShowMap(maps.NY, 'ny', label, maps);
		    	// }
		    	// else
		    	 if(label === 'US-IA') {
		    		ShowMap(maps.IA, 'US-IA', label, maps);
		    	}
		    	else if(label === 'nj') {
		    		ShowMap(maps.NJ, 'nj', label, maps);
		    	}
		    	else if(label === 'pa') {
		    		ShowMap(maps.PA, 'pa', label, maps);
		    	}
		    	else {
		    		// ShowDialog(index, label, 'us');
		    		jQuery('#dialog').dialog({
						position: { 
					        my: 'center',
					        at: 'center',
					        of: jQuery('.vmapContainer')
					    },
					    title: index,
					    resizable: false
					});
		    	}
		    }
		});


		jQuery('#' + maps.IA).vectorMap({
		    map: maps.IA,
		    backgroundColor: '#fff',
		    borderColor: '#c9c9c9',
		    borderWidth: 3,
		    color: '#84bfda',
		    hoverOpacity: 0.7,
		    scaleColors: ['#C8EEFF', '#006491'],
		    normalizeFunction: 'polynomial',
		    onRegionClick: function  (event, label, index) {
	    		// ShowDialog(index, label, 'us_IA');
	    		jQuery('#dialog').dialog({
					position: { 
				        my: 'center',
				        at: 'center',
				        of: jQuery('.vmapContainer')
				    },
				    title: index,
					resizable: false
				});
		    }
		});
		
}

function ShowMap (id, code, label, maps) {
	// console.log(id)
    		jQuery('#' + id).fadeIn().css({'position': 'absolute', 'top': 0, 'left': 0});
    		jQuery('.close, h2#title').show();
}

function ShowDialog (index, label, code) {
	var data = rep_data_ + code;
	// console.log('rep_data_' + code + [label] )
	console.log(rep_data_us[label])
	jQuery('#dialog').dialog({
		position: { 
	        my: 'center',
	        at: 'center',
	        of: jQuery('.vmapContainer')
	    },
	    title: index,
		resizable: false
	}).html(RenderTemplate('rep_data_' + code + [label], 'dialog'));
}

	// RENDERS THE HANDLEBARS TEMPLATE
	function RenderTemplate (data, templateId, renderToId, callback) {
		if(renderToId){
			var source = jQuery("#" + templateId + "Template").html(); //GET THE HTML TEMPLATE
			var template = Handlebars.compile(source); //COMPILE THE TEMPLATE
			jQuery("#" + renderToId + "TemplateArea").html(template(data)); //ADD THE TEMPLATE TO THE TEMPATE AREA
		} else {
			var source = jQuery("#" + templateId + "Template").html(); //GET THE HTML TEMPLATE
			var template = Handlebars.compile(source); //COMPILE THE TEMPLATE
			jQuery("#" + templateId + "TemplateArea").html(template(data)); //ADD THE TEMPLATE TO THE TEMPATE AREA
		};
		if(callback){
			console.log('callback')
		}
	}