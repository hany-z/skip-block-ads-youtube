function skipAd() {
     //skip 2
     const adsShow = document.getElementsByClassName(
          "video-stream html5-main-video",
     );
     const adsDisplay = document.getElementsByClassName(
          "ytp-ad-player-overlay-layout",
     );
     if (
          adsShow &&
          adsDisplay &&
          adsShow.length > 0 &&
          adsDisplay.length > 0
     ) {
          console.log("skip 2");
          adsShow[0].currentTime = adsShow[0].duration;
          return;
     }

     //skip 3
     const adsShow2 = document.getElementsByClassName(
          "video-stream html5-main-video",
     );
     const adsDisplay2 = document.getElementsByClassName(
          "video-ads ytp-ad-module",
     );
     if (
          adsShow2 &&
          adsDisplay2 &&
          adsShow2.length > 0 &&
          adsDisplay2.length > 0 &&
          adsDisplay2[0].innerHTML.length > 0
     ) {
          console.log("skip 3");
          adsShow2[0].currentTime = adsShow2[0].duration;
          return;
     }
}

console.log("Checking for ads...");
skipAd();

const loop = setInterval(() => {
     console.log("Checking for ads...");
     skipAd();
}, 500);
