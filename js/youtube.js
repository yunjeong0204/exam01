let tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      // var player;
      function onYouTubeIframeAPIReady() {
        new YT.Player('player', {
          // height: '360',
          // width: '640',
          videoId: 't_P04wRuslg',
          playerVars: {
            autoplay: true,
            loop: true,
            playlist: 't_P04wRuslg',
          },
          events: {
            onReady: function (event) {
              event.target.mute();
            }
          }
        });
      }