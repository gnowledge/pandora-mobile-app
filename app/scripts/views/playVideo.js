define([
    'backbone',
    'marionette',
    "settings",
    "templates"
],

//Play video transcripts with in & out timing.
function(Backbone, Marionette, settings, templates) {
    var PlayVideoView = Marionette.ItemView.extend({
        template: templates[settings.templatesBase + "playVideo.html"],
        events: {
        	//'click #makeVideoBig': 'makeVideoBig',
            'change .selectVideoResolution': 'selectVideoResolution'
        },
        ui: {
        	'pandoraVideo': '.pandoraVideo',
            'selectVideoResolution': '.selectVideoResolution'
        },
        initialize: function(params) {
            this.timing = params.timing;
            return true;
        },
        templateHelpers: function() {
            if (this.timing) {
                return {
                    'inPoint': this.timing.split("-")[0],
                    'outPoint': this.timing.split("-")[1]
                }
            } else {
                return {}
            }
        },
        onRender: function() {
            if (this.timing) {
                var inSeconds = this.timing.split("-")[0];
                var videoPlayer = this.ui.pandoraVideo.get(0);
                this.ui.pandoraVideo.on("load", function() {
                    videoPlayer.currentTime = inSeconds;
                    videoPlayer.play();
                    $(this).off("load");
                });
            }
        },
        'selectVideoResolution': function() {
            var $video = this.ui.pandoraVideo;
            var videoPlayer = this.ui.pandoraVideo.get(0);
            var videoURL = this.ui.selectVideoResolution.val();
            console.log("setting url to " + videoURL);
            var currentTime = videoPlayer.currentTime;
            videoPlayer.setAttribute("src", videoURL);
            videoPlayer.load();
            //videoPlayer.play();
            $video.on("loadstart", function() {
                videoPlayer.play();
                $video.off("loadstart");
                $video.on("loadedmetadata", function() {
                    console.log("loaded meta data");
                    videoPlayer.currentTime = currentTime;
                    $video.off("loadedmetadata");
                });
            });
            //videoPlayer.currentTime = currentTime;
            //videoPlayer.load();



        }
    });

    return PlayVideoView;
});