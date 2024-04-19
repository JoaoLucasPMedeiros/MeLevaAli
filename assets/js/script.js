

require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Directions",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/layers/RouteLayer",
    "esri/widgets/Expand"
  ],(esriConfig, Map, MapView, Directions, SimpleMarkerSymbol, RouteLayer,Expand)=> {

// CHAVE API
  esriConfig.apiKey = "AAPK11ccd0a041794e50b10499a61b9681baeqJuNvvUQ4HaI7_DSlBC7PfmZIy3lktcM9gbKSukpwTk3ykwwOHEqJbzq2Rfytj9";


  const routeLayer = new RouteLayer({
    url: "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World/"
  });

  const map = new Map({
    basemap: "arcgis-navigation",
    layers: [routeLayer]
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-48.2622, -18.9113],
    zoom: 12,
    constraints: {
      snapToZoom: false
    }
  });

  const directions = new Directions({
    view: view,
    layer:routeLayer
  });

  

 view.ui.add(new Expand(
{
  view:view,
  content:directions,
  expanded:true,
}),
 "top-right",
);



});
uai
