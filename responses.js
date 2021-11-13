var SCLPlayer = {
    isPlayerLoaded : false,
    isPlayerFullLoaded : false,
    needsFirstTrackSkip : true,
    isPaused: true,

    scPlayer : function() {
        widgetContainer = document.getElementById('iframe');
        widget = SC.Widget(widgetContainer);
        return widget;
    },

    loadNextTrack : function() {
        var ifr = document.getElementById('iframe');
        ifr.src = 'http://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/231758952';

        console.log ('Loading Next Track');

        SCLPlayer.scPlayer().bind(SC.Widget.Events.READY, function() {

            console.log ('Player is Ready, next Track');

            SCLPlayer.scPlayer().play();
        });
    }
};

$( '#sc' ).ready(function() {
    SCLPlayer.scPlayer().bind(SC.Widget.Events.READY, function() {
        SCLPlayer.isPlayerLoaded = true;
        //window.location = 'sclplayer://didLoad';

        console.log ('Player is Ready');
        SCLPlayer.scPlayer().play();
    });

    SCLPlayer.scPlayer().bind(SC.Widget.Events.PLAY, function() {
        SCLPlayer.isPaused = false;
        //window.location = 'sclplayer://didPlay';

        console.log ('Player did Play');
    });

    SCLPlayer.scPlayer().bind(SC.Widget.Events.PAUSE, function() {
        SCLPlayer.isPaused = true;
        //window.location = 'sclplayer://didPause';

        console.log ('Player did Pause');
    });

    SCLPlayer.scPlayer().bind(SC.Widget.Events.FINISH, function() {
        SCLPlayer.isPaused = true;
        //window.location = 'sclplayer://didFinish';

        console.log ('Player did Finish');

        SCLPlayer.loadNextTrack();
    });
});