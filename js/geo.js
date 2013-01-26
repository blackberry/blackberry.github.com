// Process Signatories.json

// add new widget called repeatHeaders 
$.tablesorter.addWidget({ 
    // give the widget a id 
    id: "repeatHeaders", 
    // format is called when the on init and when a sorting has finished 
    format: function(table) { 

	// This should be changed to cache the headers based on the table object
	// because we are sorting multiple tables.
	// Invalidating the cache will work for now

	// invalidate the cache
	this.headers = null;
	
	// cache and collect all TH headers 
	if(!this.headers) { 
	    var h = this.headers = [];  
	    $("thead th",table).each(function() { 
		h.push( 
		    "<th>" + $(this).text() + "</th>" 
		); 
		
	    }); 
	} 
	
	// remove appended headers by classname. 
	$("tr.repeated-header",table).remove(); 
	
	// loop all tr elements and insert a copy of the "headers"     
	for(var i=0; i < table.tBodies[0].rows.length; i++) { 
	    // insert a copy of the table head every 20th row 
	    if((i%20) == 19) { 
		$("tbody tr:eq(" + i + ")",table).before( 
		    $("<tr></tr>").addClass("repeated-header").html(this.headers.join(""))
		    
		);     
	    } 
	} 
    } 
}); 

/*
 * parseSignatoriesIntoTable()
 *
 * data - from JASON parse
 */

function parseSignatoriesIntoTable(data) {

    var items = [];
    
    /* total hack on the overlap; need to fix */
    items.push('<thead>' +
	       '<tr>' +
	       '<th>Name</th>' + 
	       '<th>GitHub</th>' +
	       '<th>Twitter</th>' +
	       '<th>Where</th>' +
	       '</tr>' +
	       '</thead>')

    $.each(data, function(key, val) {
	/* The "_comment_" record is used to document the JSON format */
	if ( key === "_comment_" ) {
	    return true; /* skip this item */
	}

	// get longitude and latitude from loc_coordinates
	if ( val.loc_coordinates ) {
	    a = val.loc_coordinates.split(',')
	    mlon = a[0]
	    mlat = a[1]
	} else {
	    mlon = mlat = ''
	}

	items.push('<tr>' +
		   /* Start Row */

		   /* Name */
		   '<td><span style="white-space: nowrap;">' +
		   ( ( val.url )
		     ? ( '<a href="' + val.url + '" target="_blank">' + key + '</a>' )
		     : key
		     ) +
		   '</span></td>'
		   +

		   /* GitHub */
		   '<td>' + (( val.github ) ? val.github : '') + '</td>'
		   +

		   /* Twitter */
		   '<td>' + (( val.twitter ) ? val.twitter : '') + '</td>'
		   +

		   /* Location - Description */
		   '<td>' + (( val.loc_description )
			     ? ( (val.loc_description === "TBD")
				 ? ''
				 : ( '<a href="http://www.openstreetmap.org/?' +
				     'mlat=' + mlat + '&mlon=' + mlon + '" ' +
				     'title="latitude:' + mlat + ' longitude:' + mlon + '" ' +
				     'target="_blank">' +
				     val.loc_description +
				     '</a>' )
				 )
			     : '')
		   + '</td>'
		   +

		   /* End of row */
		   '</tr>');
    });
    return items;
}

/*
 * parseSignatoriesIntoKML()
 *
 * data - from JASON parse
 */

function parseSignatoriesIntoKML(data) {

    var items = [];
    
    // name
    items.push('<name>GitHub contributors</name>\n')

    // description
    items.push('<description>Mumble</description>\n')

    // Style
    items.push('<Style id="style1">'+
	       '<IconStyle>'+
	       '<Icon><href>http://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png</href></Icon>' +
	       '</IconStyle>'+
	       '</Style>\n')

    $.each(data, function(key, val) {
	/* The "_comment_" record is used to document the JSON format */
	if ( key === "_comment_" ) {
	    return true; /* skip this item */
	}

	// get longitude and latitude from loc_coordinates
	if ( val.loc_coordinates ) {
	    a = val.loc_coordinates.split(',')
	    mlon = a[0]
	    mlat = a[1]
	} else {
	    mlon = mlat = ''
	}

	if ( val.loc_description && ! (val.loc_description === "TBD") ) {
	    // Places
	    items.push('<Placemark>' +
		       '<name>' + key + '</name>' +
		       '<description>' +
		       'github: ' + val.github +
		       (( val.twitter ) ? ' | twitter: @' + val.twitter : '') +
		       ' | world: ' + val.loc_description +
		       '</description>' +
		       '<styleUrl>#style1</styleUrl>' +
		       '<Point><coordinates>' + val.loc_coordinates + '</coordinates></Point>' +
		       '</Placemark>\n')
	}

    });
    return items;
}
    

$(document).ready(function(){

    // Used to process hide/expand sections
 

    // Compute the stats
    $.getJSON('/Signatories.json', function(data) {

	var sigCount = 0;
	var geoCount = 0;
	$.each(data, function(key, val) {
	    /* The "_comment_" record is used to document the JSON format */
	    if ( key === "_comment_" ) {
		return true; /* skip this item */
	    }
	    sigCount += 1;
	    if ( val.loc_description && ! (val.loc_description === "TBD") ) {
		geoCount += 1;
	    }
	});
	$("#stats-sigCount").html(sigCount); // Inject
	$("#stats-geoCount").html(geoCount); // Inject
	    
    })

    // Create the table
    $.getJSON('/Signatories.json', function(data) {


	// Takes a list of items and injects them under a table element
	// Reused function

	function injectAndSort(items, name) {
	    if (items.length > 1) {
		// Inject into page
		$('<table/>', {  
		    'id': name+'Table',
		    html: items.join('')
		}).appendTo('#'+name).addClass("tablesorter");
		
		$("#"+name+"Table").tablesorter({
		    widgets: ['zebra', 'repeatHeaders']     // Stripping looking
		});
	    }
	}

	// Use the function above to parse the Signatory file and then inject

	injectAndSort(parseSignatoriesIntoTable(data), "geoTable");

    });

    // Create the KML file

    $.getJSON('/Signatories.json', function(data) {

	/* Common actions per table */

	items = parseSignatoriesIntoKML(data)

	if (items.length > 1) {
	    // Inject into page
	    
	    $('#geoKMLtext').text(
		'<?xml version="1.0" encoding="UTF-8"?>' +
		'<kml xmlns="http://earth.google.com/kml/2.2">'+
		'<Document>' +
		items.join('') +
		'</Document>' +
		'</kml>'
	    )

/*
 * Can't use code like $('<Document/>', {html: items.join('')})
 * because 'Document' is normalized to 'document' and that is not KML
 */
	    
	}
    });


});

