function toggleTable(city_id) {
  // Canvasları gizle
  var canvases = document.getElementsByClassName("barcharts");
  for (var i = 0; i < canvases.length; i++) {
      canvases[i].style.display = "none";
  }

  // Tabloları gizle
  var tables = document.getElementsByClassName("wikitable");
  for (var i = 0; i < tables.length; i++) {
      tables[i].style.display = "none";
  }

  // Seçilen bölgeye göre tabloyu göster
  var tableToShow = document.getElementById(city_id + "Table");
  if (tableToShow) {
      tableToShow.style.display = "block";
  }

  // Seçilen bölgeye göre canvası göster
  var canvasToShow = document.getElementById(city_id );
  if (canvasToShow) {
      canvasToShow.style.display = "block";
  }

  document.getElementById('selectionDatas').textContent=city_id + ' İli veri Karşılaştırması';
  document.getElementById('surveytables').textContent=city_id + ' İli Anket Tablosu';
  

}
