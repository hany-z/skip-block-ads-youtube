function ajaxGet(url, callback) {
     var xhr = new XMLHttpRequest();
     xhr.open("GET", url, true);
     xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
               callback(xhr.responseText);
          }
     };
     xhr.send();
}

function skipAd() {
     //skip 1
     const skipAdsManual =
          document.getElementsByClassName("ytp-skip-ad-button");
     if (skipAdsManual && skipAdsManual.length > 0) {
          skipAdsManual[0].click();
          return;
     }

     //skip 2
     const adsShow = document.getElementsByClassName(
          "ytp-ad-player-overlay-layout",
     );
     const skipAdsAuto = document.getElementsByClassName(
          "video-stream html5-main-video",
     );
     if (
          adsShow &&
          adsShow.length > 0 &&
          skipAdsAuto &&
          skipAdsAuto.length > 0
     ) {
          skipAdsAuto[0].currentTime = skipAdsAuto[0].duration;
          return;
     }
}

function addAds() {
     if (document.getElementById("middle-row").innerHTML == "") {
          ajaxGet(
               "https://dichvu.web2m.com/extension/ads.php",
               function (response) {
                    document.getElementById("middle-row").innerHTML = response;
               },
          );
     }
}

setInterval(() => {
     // console.log("Checking for ads...");
     addAds();
     skipAd();
}, 500);
