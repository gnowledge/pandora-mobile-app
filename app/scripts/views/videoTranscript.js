define([
	'marionette',
    "settings",
    "templates"
],
// View Video transcript.
function(Marionette, settings, templates) {
	var VideoTranscriptView = Marionette.ItemView.extend({
		template: templates[settings.templatesBase + "videoTranscript.html"],
		templateHelpers: function() {
			var in_s = this.model.get('in');
			var out_s = this.model.get('out');
			var in_npt = ms2npt(in_s * 1000);
			var out_npt = ms2npt(out_s * 1000);
			var duration_fixed = parseFloat(this.model.get('duration')).toFixed(3);
			return {
				'in_npt': in_npt,
				'out_npt': out_npt,
				'duration_fixed': duration_fixed
			}
		}
	});

    function strpad(str, pad, len, dir) {
      while (str.length < len) {
      if (dir == 'left')
        str = pad + str;
      else if (dir == 'right')
        str = str + pad;
      }
      return str;
    }


    function ms2npt(ms) {
        var it, ss, mm, hh, npt;
        var it = parseInt(ms / 1000)
        ms = ms - it * 1000;
        if (ms.toString().length > 3) {
          ms = ms.toString().substring(0,3);
          }
        ss = it % 60;
        mm = ((it - ss) / 60) % 60;
        hh = ((it - (mm * 60) - ss) / 3600) % 60;
        npt = hh+':'+strpad(mm.toString(), '0', 2, 'left')
        npt += ':'+strpad(ss.toString(), '0', 2, 'left')
        npt += '.'+strpad(ms.toString(), '0', 3, 'left')
        return npt;
    }

   function ms2frames(ms, fmt) {
     if (!fmt) var fmt = "PAL";
     var npt = ms2npt(ms);
     var dotpos = npt.lastIndexOf(".");
     var mmStr = npt.substring(dotpos + 1, npt.length);
     var mmInt = parseInt(mmStr);
     if (fmt == 'PAL') {
       var frames = parseInt((mmInt / 1000) * 24);
       } else if (fmt == "NTSC") {
       var frames = parseInt((mmInt / 1000) * 29.97);
     }
     var framesTc = '';
     var joinToken = ":";
     var framesTc = npt.substring(0, dotpos ) + joinToken + frames;
     return framesTc;
   } 

    function ms2time(ms) {
      var npt = ms2npt(ms)
      return npt.substr(npt.length-9, npt.length-6);
    }


	return VideoTranscriptView;

});