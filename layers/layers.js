var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_eltntvastbla_1 = new ol.format.GeoJSON();
var features_eltntvastbla_1 = format_eltntvastbla_1.readFeatures(json_eltntvastbla_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eltntvastbla_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eltntvastbla_1.addFeatures(features_eltntvastbla_1);
var lyr_eltntvastbla_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eltntvastbla_1, 
                style: style_eltntvastbla_1,
                popuplayertitle: 'eltűnt vastábla',
                interactive: true,
                title: '<img src="styles/legend/eltntvastbla_1.png" /> eltűnt vastábla'
            });
var format_ltezvastbla_2 = new ol.format.GeoJSON();
var features_ltezvastbla_2 = format_ltezvastbla_2.readFeatures(json_ltezvastbla_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ltezvastbla_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ltezvastbla_2.addFeatures(features_ltezvastbla_2);
var lyr_ltezvastbla_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ltezvastbla_2, 
                style: style_ltezvastbla_2,
                popuplayertitle: 'létező vastábla',
                interactive: true,
                title: '<img src="styles/legend/ltezvastbla_2.png" /> létező vastábla'
            });
var format_eltntvasasztal_3 = new ol.format.GeoJSON();
var features_eltntvasasztal_3 = format_eltntvasasztal_3.readFeatures(json_eltntvasasztal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eltntvasasztal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eltntvasasztal_3.addFeatures(features_eltntvasasztal_3);
var lyr_eltntvasasztal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eltntvasasztal_3, 
                style: style_eltntvasasztal_3,
                popuplayertitle: 'eltűnt vasasztal',
                interactive: true,
                title: '<img src="styles/legend/eltntvasasztal_3.png" /> eltűnt vasasztal'
            });
var format_ltezvasasztal_4 = new ol.format.GeoJSON();
var features_ltezvasasztal_4 = format_ltezvasasztal_4.readFeatures(json_ltezvasasztal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ltezvasasztal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ltezvasasztal_4.addFeatures(features_ltezvasasztal_4);
var lyr_ltezvasasztal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ltezvasasztal_4, 
                style: style_ltezvasasztal_4,
                popuplayertitle: 'létező vasasztal',
                interactive: true,
                title: '<img src="styles/legend/ltezvasasztal_4.png" /> létező vasasztal'
            });
var format_eltntvastblkMthJnoslersaalapjn_5 = new ol.format.GeoJSON();
var features_eltntvastblkMthJnoslersaalapjn_5 = format_eltntvastblkMthJnoslersaalapjn_5.readFeatures(json_eltntvastblkMthJnoslersaalapjn_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eltntvastblkMthJnoslersaalapjn_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eltntvastblkMthJnoslersaalapjn_5.addFeatures(features_eltntvastblkMthJnoslersaalapjn_5);
var lyr_eltntvastblkMthJnoslersaalapjn_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eltntvastblkMthJnoslersaalapjn_5, 
                style: style_eltntvastblkMthJnoslersaalapjn_5,
                popuplayertitle: 'eltűnt vastáblák Máthé János leírása alapján',
                interactive: true,
                title: '<img src="styles/legend/eltntvastblkMthJnoslersaalapjn_5.png" /> eltűnt vastáblák Máthé János leírása alapján'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_eltntvastbla_1.setVisible(true);lyr_ltezvastbla_2.setVisible(true);lyr_eltntvasasztal_3.setVisible(true);lyr_ltezvasasztal_4.setVisible(true);lyr_eltntvastblkMthJnoslersaalapjn_5.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_eltntvastbla_1,lyr_ltezvastbla_2,lyr_eltntvasasztal_3,lyr_ltezvasasztal_4,lyr_eltntvastblkMthJnoslersaalapjn_5];
lyr_eltntvastbla_1.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_ltezvastbla_2.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', 'foto1': 'vastábla', 'foto2': 'elhelyezkedés', });
lyr_eltntvasasztal_3.set('fieldAliases', {'ID': 'ID', 'Northing': 'Northing', 'Easting': 'Easting', });
lyr_ltezvasasztal_4.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', 'foto1': 'vasasztal', 'foto2': 'elhelyezkedés', });
lyr_eltntvastblkMthJnoslersaalapjn_5.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_eltntvastbla_1.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'Hidden', 'Northing': 'Hidden', });
lyr_ltezvastbla_2.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'Hidden', 'Northing': 'Hidden', 'foto1': 'ExternalResource', 'foto2': 'ExternalResource', });
lyr_eltntvasasztal_3.set('fieldImages', {'ID': 'TextEdit', 'Northing': 'Hidden', 'Easting': 'Hidden', });
lyr_ltezvasasztal_4.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'Hidden', 'Northing': 'Hidden', 'foto1': 'ExternalResource', 'foto2': 'ExternalResource', });
lyr_eltntvastblkMthJnoslersaalapjn_5.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_eltntvastbla_1.set('fieldLabels', {'ID': 'inline label - always visible', });
lyr_ltezvastbla_2.set('fieldLabels', {'ID': 'inline label - always visible', 'foto1': 'inline label - always visible', 'foto2': 'inline label - always visible', });
lyr_eltntvasasztal_3.set('fieldLabels', {'ID': 'inline label - always visible', });
lyr_ltezvasasztal_4.set('fieldLabels', {'ID': 'inline label - always visible', 'foto1': 'inline label - always visible', 'foto2': 'inline label - always visible', });
lyr_eltntvastblkMthJnoslersaalapjn_5.set('fieldLabels', {'ID': 'no label', 'Easting': 'no label', 'Northing': 'no label', });
lyr_eltntvastblkMthJnoslersaalapjn_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});