var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_heksagon_9024_1 = new ol.format.GeoJSON();
var features_heksagon_9024_1 = format_heksagon_9024_1.readFeatures(json_heksagon_9024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_heksagon_9024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_heksagon_9024_1.addFeatures(features_heksagon_9024_1);
var lyr_heksagon_9024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_heksagon_9024_1, 
                style: style_heksagon_9024_1,
                popuplayertitle: 'heksagon_9024',
                interactive: true,
    title: 'heksagon_9024<br />\
    <img src="styles/legend/heksagon_9024_1_0.png" /> -100 - -60<br />\
    <img src="styles/legend/heksagon_9024_1_1.png" /> -60 - -20<br />\
    <img src="styles/legend/heksagon_9024_1_2.png" /> -20 - 0<br />\
    <img src="styles/legend/heksagon_9024_1_3.png" /> 0 - 20<br />\
    <img src="styles/legend/heksagon_9024_1_4.png" /> 20 - 60<br />\
    <img src="styles/legend/heksagon_9024_1_5.png" /> 60 - 100<br />' });
var format_heksagon_9040_2 = new ol.format.GeoJSON();
var features_heksagon_9040_2 = format_heksagon_9040_2.readFeatures(json_heksagon_9040_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_heksagon_9040_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_heksagon_9040_2.addFeatures(features_heksagon_9040_2);
var lyr_heksagon_9040_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_heksagon_9040_2, 
                style: style_heksagon_9040_2,
                popuplayertitle: 'heksagon_9040',
                interactive: true,
    title: 'heksagon_9040<br />\
    <img src="styles/legend/heksagon_9040_2_0.png" /> -100 - -60<br />\
    <img src="styles/legend/heksagon_9040_2_1.png" /> -60 - -20<br />\
    <img src="styles/legend/heksagon_9040_2_2.png" /> -20 - 0<br />\
    <img src="styles/legend/heksagon_9040_2_3.png" /> 0 - 20<br />\
    <img src="styles/legend/heksagon_9040_2_4.png" /> 20 - 60<br />\
    <img src="styles/legend/heksagon_9040_2_5.png" /> 60 - 100<br />' });
var format_Rzeka_conajraz_3 = new ol.format.GeoJSON();
var features_Rzeka_conajraz_3 = format_Rzeka_conajraz_3.readFeatures(json_Rzeka_conajraz_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rzeka_conajraz_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rzeka_conajraz_3.addFeatures(features_Rzeka_conajraz_3);
var lyr_Rzeka_conajraz_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rzeka_conajraz_3, 
                style: style_Rzeka_conajraz_3,
                popuplayertitle: 'Rzeka_conajraz',
                interactive: true,
                title: '<img src="styles/legend/Rzeka_conajraz_3.png" /> Rzeka_conajraz'
            });
var format_rzeka_zawsze_4 = new ol.format.GeoJSON();
var features_rzeka_zawsze_4 = format_rzeka_zawsze_4.readFeatures(json_rzeka_zawsze_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rzeka_zawsze_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rzeka_zawsze_4.addFeatures(features_rzeka_zawsze_4);
var lyr_rzeka_zawsze_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rzeka_zawsze_4, 
                style: style_rzeka_zawsze_4,
                popuplayertitle: 'rzeka_zawsze',
                interactive: true,
                title: '<img src="styles/legend/rzeka_zawsze_4.png" /> rzeka_zawsze'
            });
var format_VMAP_5 = new ol.format.GeoJSON();
var features_VMAP_5 = format_VMAP_5.readFeatures(json_VMAP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VMAP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VMAP_5.addFeatures(features_VMAP_5);
var lyr_VMAP_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VMAP_5, 
                style: style_VMAP_5,
                popuplayertitle: 'VMAP',
                interactive: true,
                title: '<img src="styles/legend/VMAP_5.png" /> VMAP'
            });
var format_Sentinel_6 = new ol.format.GeoJSON();
var features_Sentinel_6 = format_Sentinel_6.readFeatures(json_Sentinel_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentinel_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentinel_6.addFeatures(features_Sentinel_6);
var lyr_Sentinel_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentinel_6, 
                style: style_Sentinel_6,
                popuplayertitle: 'Sentinel',
                interactive: true,
                title: '<img src="styles/legend/Sentinel_6.png" /> Sentinel'
            });
var format_Mapa_historyczna_7 = new ol.format.GeoJSON();
var features_Mapa_historyczna_7 = format_Mapa_historyczna_7.readFeatures(json_Mapa_historyczna_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapa_historyczna_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapa_historyczna_7.addFeatures(features_Mapa_historyczna_7);
var lyr_Mapa_historyczna_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapa_historyczna_7, 
                style: style_Mapa_historyczna_7,
                popuplayertitle: 'Mapa_historyczna',
                interactive: true,
                title: '<img src="styles/legend/Mapa_historyczna_7.png" /> Mapa_historyczna'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_heksagon_9024_1.setVisible(false);lyr_heksagon_9040_2.setVisible(false);lyr_Rzeka_conajraz_3.setVisible(true);lyr_rzeka_zawsze_4.setVisible(true);lyr_VMAP_5.setVisible(true);lyr_Sentinel_6.setVisible(true);lyr_Mapa_historyczna_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_heksagon_9024_1,lyr_heksagon_9040_2,lyr_Rzeka_conajraz_3,lyr_rzeka_zawsze_4,lyr_VMAP_5,lyr_Sentinel_6,lyr_Mapa_historyczna_7];
lyr_heksagon_9024_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'PERCENTA_2': 'PERCENTA_2', 'roznica': 'roznica', 'diff24_90': 'diff24_90', });
lyr_heksagon_9040_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'PERCENTA_2': 'PERCENTA_2', 'roznica': 'roznica', 'diff24_90': 'diff24_90', });
lyr_Rzeka_conajraz_3.set('fieldAliases', {'FID_Sentin': 'FID_Sentin', 'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'FID_wekt_b': 'FID_wekt_b', 'Id_1': 'Id_1', 'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_12': 'ID_12', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_rzeka_zawsze_4.set('fieldAliases', {'FID_Sentin': 'FID_Sentin', 'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID_1', 'FID_wekt_b': 'FID_wekt_b', 'Id_12': 'Id_12', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_VMAP_5.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'pole': 'pole', });
lyr_Sentinel_6.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'InPoly_FID': 'InPoly_FID', });
lyr_Mapa_historyczna_7.set('fieldAliases', {'Id': 'Id', 'pole': 'pole', 'obwod': 'obwod', 'pole2': 'pole2', 'obwod2': 'obwod2', });
lyr_heksagon_9024_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'roznica': 'TextEdit', 'diff24_90': 'TextEdit', });
lyr_heksagon_9040_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'roznica': 'TextEdit', 'diff24_90': 'TextEdit', });
lyr_Rzeka_conajraz_3.set('fieldImages', {'FID_Sentin': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'FID_wekt_b': 'TextEdit', 'Id_1': 'TextEdit', 'FID_HYDRO_': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_12': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_rzeka_zawsze_4.set('fieldImages', {'FID_Sentin': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'FID_HYDRO_': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'TextEdit', 'FID_wekt_b': 'TextEdit', 'Id_12': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_VMAP_5.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'pole': 'TextEdit', });
lyr_Sentinel_6.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'InPoly_FID': 'TextEdit', });
lyr_Mapa_historyczna_7.set('fieldImages', {'Id': 'Range', 'pole': 'TextEdit', 'obwod': 'TextEdit', 'pole2': 'TextEdit', 'obwod2': 'TextEdit', });
lyr_heksagon_9024_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GRID_ID': 'no label', 'PERCENTAGE': 'no label', 'PERCENTA_1': 'no label', 'PERCENTA_2': 'no label', 'roznica': 'no label', 'diff24_90': 'no label', });
lyr_heksagon_9040_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GRID_ID': 'inline label - always visible', 'PERCENTAGE': 'no label', 'PERCENTA_1': 'no label', 'PERCENTA_2': 'no label', 'roznica': 'no label', 'diff24_90': 'no label', });
lyr_Rzeka_conajraz_3.set('fieldLabels', {'FID_Sentin': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'FID_wekt_b': 'no label', 'Id_1': 'no label', 'FID_HYDRO_': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_12': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_rzeka_zawsze_4.set('fieldLabels', {'FID_Sentin': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'FID_HYDRO_': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_1': 'no label', 'FID_wekt_b': 'no label', 'Id_12': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_VMAP_5.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'pole': 'no label', });
lyr_Sentinel_6.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'InPoly_FID': 'no label', });
lyr_Mapa_historyczna_7.set('fieldLabels', {'Id': 'no label', 'pole': 'no label', 'obwod': 'no label', 'pole2': 'no label', 'obwod2': 'no label', });
lyr_Mapa_historyczna_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});