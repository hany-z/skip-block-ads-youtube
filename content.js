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

setInterval(() => {
     // console.log("Checking for ads...");
     skipAd();
}, 500);
