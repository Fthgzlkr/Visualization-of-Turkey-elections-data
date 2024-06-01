
// JavaScript fonksiyonu, tıklanan butona göre seçim sonuçlarını gösterir
function showSelection(region) {
    // Tüm tabloları gizle
    var tables = document.getElementsByClassName("selectionTable");
    for (var i = 0; i < tables.length; i++) {
        tables[i].style.display = "none";
    }
    // Seçilen bölgeye göre tabloyu göster
   
    document.getElementById(region + "Table").style.display = "block";
    // Seçim sonucunu göster
    document.getElementById('selectionResult').textContent = region.charAt(0).toUpperCase() + region.slice(1) + ' Bölgesi Seçim Sonuçları';
    document.getElementById('selectionResult3').textContent = region.charAt(0).toUpperCase() + region.slice(1) + ' Bölgesi Seçim Anketleri';
    document.getElementById('selectionResult2').textContent = region.charAt(0).toUpperCase() + region.slice(1) + ' Bölgesi İllerin Tabloları için ->';
    // İlgili bölgeye ait btn-iller butonunu göster
    var illerButtons = document.getElementsByClassName("btn-warning");
    for (var j = 0; j < illerButtons.length; j++) {
        illerButtons[j].style.display = "none";
    }
    document.getElementById('btn-iller-' + region).style.display = "block";
    

    var canvases = document.getElementsByClassName("piecharts");
for (var i = 0; i < canvases.length; i++) {
  canvases[i].style.display = "none";
}

// İlgili bölgeye ait canvas'ı göster
var canvasToShow = document.getElementById(region + "Canvas");
if (canvasToShow) {
  canvasToShow.style.display = "block";
  // Burada ilgili canvas'a Chart.js kullanarak grafik oluşturabilirsiniz, eğer gerekiyorsa
}
document.getElementById('indexh1').style.display = 'none';
}

function goToRegionPage(region) {
  window.location.href = "/" + region; // İlgili bölgeye yönlendirme
}


