define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/emptyTranscript.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!-- template for Empty video transcript -->  \n<center>\n\n	<h2><i class=\"fi-skull icon-style\" ></i></h2>\n<H2>Sorry, No content available !</H2>\n\n\n</center>";
  });

this["JST"]["app/scripts/templates/home.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!-- template for Home Page -->  \n\n\n\n\n\n\n<div class=\"homeContainer\">\n\n	\n	Test Template - You are home.\n</div>\n\n";
  });

this["JST"]["app/scripts/templates/layerVideo.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"videopage\">\n<header>\n	<h5>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h5>\n</header>\nMy video\n\n<video src=\"";
  if (stack1 = helpers.videoURL96) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.videoURL96); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"pandoraVideo\" poster=\"";
  if (stack1 = helpers.iconURL) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.iconURL); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" controls></video>\n</br>\n<button id=\"makeVideoBig\">Make video big</button>\n<a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers\"><button >Transcript</button></a>\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/loading.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!-- template for Loading page -->  \n\n<div class=\"loading\"><progress value=\"60\" max=\"100\">\n</progress></br>Loading...</div>\n\n";
  });

this["JST"]["app/scripts/templates/playVideo.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \n        <video src=\"";
  if (stack1 = helpers.videoURL96) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.videoURL96); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"pandoraVideo\" poster=\"";
  if (stack1 = helpers.iconURL) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.iconURL); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" controls></video>\n      ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n        <div>No Video for this item</div>\n      ";
  }

  buffer += "<!-- template - Play video page -->  \n\n\n<div id=\"videopage\">\n<header>\n	<h5><span title=\"Video Title-[";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "]\" class=\"headings\"> ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></h5>\n</header>\n\n\n\n\n   \n\n\n   <div class=\"mydiv\">\n      <div class=\"flex-video widescreen vimeo\" >\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.duration), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	<!-- <iframe src=\"";
  if (stack1 = helpers.videoURL96) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.videoURL96); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"pandoraVideo\" poster=\"";
  if (stack1 = helpers.iconURL) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.iconURL); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" controls width=\"400\" height=\"225\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen>\n\n\n	</iframe> --> \n      </div>\n   <!--\n   <select class=\"selectVideoResolution\">\n     <option value=\"";
  if (stack1 = helpers.videoURL96) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.videoURL96); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">Low Resolution</option>\n     <option value=\"";
  if (stack1 = helpers.videoURL240) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.videoURL240); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">Medium Resolution</option>    \n   </select>\n  -->\n  </div>\n\n<div align=\"left\">\n  <form class=\"selectVideoResolution\">\n<input type=\"radio\" name=\"LR\" checked=\"checked\" class=\"selectResolutionRadio\" value=\"";
  if (stack1 = helpers.videoURL96) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.videoURL96); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" >Low Resolution<br>\n<input type=\"radio\" name=\"LR\" class=\"selectResolutionRadio\" value=\"";
  if (stack1 = helpers.videoURL240) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.videoURL240); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">Medium Resolution<br>\n</form> \n</div>\n   \n\n\n</div>\n<br>\n\n	<div class=\"large-4 small-4 columns\">\n    	<a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/info\"><span class=\"radius label\"> Video Info </span></a>\n    </div>\n\n    <div class=\"large-4 small-4 columns\">\n		<a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/transcripts\"><span class=\"radius label\"> Transcripts </span></a>\n	</div>\n\n	<div class=\"large-4 small-4 columns\">\n    	<a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/descriptions\"><span class=\"radius label\"> Descriptions </span></a>\n    </div>\n\n\n</br></br>\n\n\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/signin.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!-- template for Sign Page -->  \n\n  <div id=\"signinDiv\">\n      <form id=\"signinForm\">\n        <label for=\"txt_User\">User Name:</label>\n        <input id=\"txt_User\" type=\"text\"  width=15px/>\n\n\n        <label for=\"txt_Password\">Password:</label>\n        <input id=\"txt_Password\" type=\"password\" />\n        <input class=\"button\" value=\"Ok\" type=\"submit\" />\n        <button id=\"signinReset\" type=\"reset\" class=\"button\"  value=\"reset\">Reset</button>     \n      </form>\n    \n  </div>\n   \n";
  });

this["JST"]["app/scripts/templates/videoInfo.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \n					";
  if (stack1 = helpers.project) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.project); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n										";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return " \n							Not available  \n				";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \n							";
  if (stack1 = helpers.topic) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.topic); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "	\n						";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return " \n							Not available  \n					";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \n					";
  if (stack1 = helpers.location) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.location); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "		\n						";
  return buffer;
  }

function program11(depth0,data) {
  
  
  return " \n								Not available  \n					";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "                           \n						";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.date); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "	\n						";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \n						";
  if (stack1 = helpers.language) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.language); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "		\n						";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \n						";
  if (stack1 = helpers.director) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.director); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "		\n								";
  return buffer;
  }

function program19(depth0,data) {
  
  
  return " \n									Not available  \n						";
  }

function program21(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \n							";
  if (stack1 = helpers.summary) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.summary); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n							";
  return buffer;
  }

function program23(depth0,data) {
  
  
  return "\n								Not available  \n					";
  }

  buffer += "<!-- template for Video Information Page(in detail ) -->  \n\n<div id=\"pad\">\n\n<div class=\"row\">\n<div class=\"large-2 small-4 columns\" id=\"video-icons\">\n	<a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/videoplay\">\n	<img src=\"";
  if (stack1 = helpers.iconURL) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.iconURL); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"300px\"/>\n	</a><br /><br />\n\n	<div><a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/videoplay\"><i class=\"fi-play-video icon-style\"></i></a></div>	\n\n	<div><a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/transcripts\"><span class=\"radius label\"> Transcripts </span></a></div>\n	\n	<div><a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/descriptions\"><span class=\"radius label\"> Descriptions </span></a></div>\n</div>\n\n\n\n\n<!-- template for Video info page  with Project,Topic,Location,Date,Language,Director,Summary show not available if detail not found -->  \n <div class=\"large-10 small-8 columns\">	\n	<div id= \"data\">\n		<div class=\"panel radius\">\n		<a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/videoplay\" class=\"main-links\">\n		<span class=\"sub-headings\">Title : </span>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></br></br>\n          \n\n\n		<span class=\"sub-headings\">Project :</span> \n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.project), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</br></br>\n\n		<span class=\"sub-headings\">Topic :</span> \n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.topic), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</br></br>\n\n		<span class=\"sub-headings\">Location :</span> \n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.location), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</br></br>\n\n		<span class=\"sub-headings\">Date :</span> \n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.date), {hash:{},inverse:self.program(11, program11, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</br></br>\n\n		<span class=\"sub-headings\">Language :</span> \n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.language), {hash:{},inverse:self.program(11, program11, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</br></br>\n\n		<span class=\"sub-headings\">Director :</span>\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.director), {hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</br></br>\n\n		<span class=\"sub-headings\">Summary :</span>\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.summary), {hash:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</br></br>\n\n		<span class=\"sub-headings\">Link : </span><a target=\"_blank\" href=\"";
  if (stack1 = helpers.shareURL) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.shareURL); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.shareURL) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.shareURL); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n	</div>				\n	</div>\n\n</div>\n\n</div>\n\n</div>\n\n</br>";
  return buffer;
  });

this["JST"]["app/scripts/templates/videoItem.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!--template for video information page  -->\n\n<div id=\"pad\">\n\n<div class=\"videoItem\">\n\n\n	<div class=\"row\">\n		<div class=\"large-2 small-4 columns\">\n			<a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/videoplay\"><img src=\"";
  if (stack1 = helpers.iconURL) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.iconURL); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" /></a></br></br>\n\n		</div>\n\n		<div class=\"large-10 small-8 columns\">\n            \n			<h3><a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/videoplay\" class=\"main-links\"> ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3></a>\n\n    			\n			\n		</div>\n\n    	<div class=\"videoButtons\">\n			<a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/info\"><span class=\"radius label\"> Video Info </span></a>\n			    \n	\n			<a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/transcripts\"><span class=\"radius label\"> Transcripts </span></a>\n	\n\n			<a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/descriptions\"><span class=\"radius label\"> Descriptions </span></a>\n		</div>\n\n\n\n</div>\n\n</div>\n<hr />\n<br />\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/videoList.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a href=\"#list/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.prev) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.prev); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"radius label\">Prev</span></a>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <a href=\"#list/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.next) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.next); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"radius label\">Next</span></a>\n        ";
  return buffer;
  }

  buffer += "<!-- template for List of videos page with pagination -->  \n\n<div class=\"paginationInfo\">\n\n<div class=\"Titlelist headings\">\n\n   ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n\n</div>\n\n\n\n    \n<br/>\n\n<!-- <span class=\"secondary label round\"><b>Total Videos : ";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "&nbsp;&nbsp;&nbsp;\n\nDisplaying Videos : ";
  if (stack1 = helpers.start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.start); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.end); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b></span></br></br>\n --></div>\n<br /><hr />\n\n	\n<div id=\"data\">\n    <div class=\"videosList\">\n\n    </div>\n    \n</div>\n\n\n\n\n<div class=\"paginationInfo\">\n<!-- <span class=\"secondary label round\"><b>Total Videos : ";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "&nbsp;&nbsp;&nbsp;\n\nDisplaying Videos : ";
  if (stack1 = helpers.start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.start); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.end); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b></span></br></br>\n -->\n</div>\n</br>\n\n<nav id=\"footer\">\n    <ul>\n\n    <li>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prev), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </li>\n\n    <li>\n        <span class=\"label round\">Page : ";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.page); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </li>\n\n    <li>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </li>\n    </ul>\n    <ul><li><span class=\"secondary label round\">Total Videos : ";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "&nbsp;&nbsp;&nbsp;\n\nDisplaying Videos : ";
  if (stack1 = helpers.start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.start); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.end); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li></ul>\n</nav>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/videoListItem.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!-- template for List of videos page   -->  \n\n\n\n    \n\n <div class=\"row\">\n\n	\n\n	<div class=\"large-2 small-4 columns\" id=\"video-icons\">\n\n		<a href=\"#list/";
  if (stack1 = helpers.idUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.idUrl); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">    \n		\n		\n		   <img src=\"";
  if (stack1 = helpers.iconURL) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.iconURL); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"  width=\"100px\"/ ></a>\n	</div></br>\n     \n\n	<div class=\"large-10 small-8 columns\">\n			<div id=\"data\">\n\n\n\n\n\n\n\n\n\n		<a href=\"#list/";
  if (stack1 = helpers.idUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.idUrl); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"main-links headings\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n		</br></br><!--\n		<span class=\"sub-headings\"> Name: </span> <a href=\"#list/";
  if (stack1 = helpers.idUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.idUrl); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"sub-links content-headings\"><b>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b></a>-->\n		<div class=\"main-links sub-headings\">(Videos: ";
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.items); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</div></br></br>\n		<hr>\n	</div>\n	</div>\n </div>\n\n</br>\n   \n\n\n\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/videoSearchResults.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <a href=\"#search/";
  if (stack1 = helpers.queryString) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.queryString); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.prev) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.prev); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"radius label\">Prev</span></a>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <a href=\"#search/";
  if (stack1 = helpers.queryString) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.queryString); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.next) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.next); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"radius label\">Next</span></a>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a href=\"#search/";
  if (stack1 = helpers.queryString) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.queryString); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.prev) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.prev); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"radius label\">Prev</span></a>\n            ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a href=\"#search/";
  if (stack1 = helpers.queryString) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.queryString); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.next) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.next); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"radius label\">Next</span></a>\n            ";
  return buffer;
  }

  buffer += "<!-- template -Search Video page with Pagination -->  \n\n<div class=\"searchedFor\">\n    <span class=\"headings\">Results for : </span> \"<span class=\"sub-links\">";
  if (stack1 = helpers.queryString) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.queryString); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\"\n    \n</div>\n</br>\n\n<!-- <div class=\"paginationInfo\">\n   <span class=\"secondary label round\"><b>Total results:";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " &nbsp;&nbsp;&nbsp; Displaying results:  ";
  if (stack1 = helpers.start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.start); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.end); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b></span> <br /><br />\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prev), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    &nbsp;&nbsp;<span class=\"sub-headings\"><b>Page : ";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.page); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b></span>&nbsp;&nbsp;\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br />\n --></div>\n\n<hr />\n\n<div id=\"data\">\n<div class=\"videosList\">\n\n</div>\n</div>\n\n\n<!-- <div class=\"searchedFor\">\n    <span class=\"sub-headings\"><b>Results for : </span> \"<span class=\"sub-links\">";
  if (stack1 = helpers.queryString) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.queryString); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"</b></span>\n    \n</div>\n</br>\n<div class=\"paginationInfo\">\n    <span class=\"secondary label round\"><b>Total results:";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " &nbsp;&nbsp;&nbsp; Displaying results:  ";
  if (stack1 = helpers.start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.start); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.end); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b></span> <br /><br />\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prev), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    &nbsp;&nbsp;<span class=\"sub-headings\"><b>Page : ";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.page); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b></span>&nbsp;&nbsp;\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br />\n</div> -->\n</br>\n\n<nav id = \"footer\">\n    <ul>\n        <li>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prev), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </li>\n\n        <li><span class=\"round label\">Page : ";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.page); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n        \n        <li>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </li>\n    </ul>\n\n    <ul>\n        <li><span class=\"secondary label round\">Total results:";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " &nbsp;&nbsp;&nbsp; Displaying results:  ";
  if (stack1 = helpers.start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.start); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.end); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> </li>\n    </ul>\n</nav>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/videoTrans.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/";
  if (stack1 = helpers.typ) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.typ); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.prev) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.prev); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"radius label\">Prev</span></a>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/";
  if (stack1 = helpers.typ) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.typ); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.next) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.next); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"radius label\">Next</span></a>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/";
  if (stack1 = helpers.typ) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.typ); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.prev) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.prev); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"radius label\">Prev</span></a>\n            ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/";
  if (stack1 = helpers.typ) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.typ); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.next) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.next); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"radius label\">Next</span></a>\n            ";
  return buffer;
  }

  buffer += "<div class=\"paginationInfo\">\n\n\n<div class=\"TitleTrans headings\">\n\n   Title: ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n\n</div>\n\n\n\n</br>\n<!-- <span class=\"secondary label round\"><b>Total ";
  if (stack1 = helpers.typ) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.typ); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ": ";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " &nbsp;&nbsp;&nbsp; Displaying ";
  if (stack1 = helpers.typ) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.typ); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ": ";
  if (stack1 = helpers.start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.start); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.end); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b></span><br /><br />\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prev), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <span class=\"sub-headings\"><b>Page : ";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.page); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b></span>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n --></div>\n<br />\n\n       \n\n\n	\n<div id=\"data\">\n    <div class=\"videosTranscript\">\n        <center>\n            <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/info\"><span class=\"radius label\">\n                 Video Info </span>\n            </a>\n            <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/";
  if (stack1 = helpers.otherTyp) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.otherTyp); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"radius label\">\n                 Video ";
  if (stack1 = helpers.otherTyp) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.otherTyp); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " </span>\n            </a>\n\n        </center>\n        <br />    \n    </div>\n\n        <center>\n            <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/info\"><span class=\"radius label\">\n                 Video Info </span>\n            </a>\n            <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/";
  if (stack1 = helpers.otherTyp) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.otherTyp); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"radius label\">\n                 Video ";
  if (stack1 = helpers.otherTyp) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.otherTyp); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " </span>\n            </a>\n\n        </center>\n\n        </center>\n</div>\n\n\n\n\n<br />\n<div class=\"paginationInfo\">\n\n\n\n\n\n<!-- <span class=\"secondary label round\"><b>Total ";
  if (stack1 = helpers.typ) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.typ); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ": ";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " &nbsp;&nbsp;&nbsp; Displaying ";
  if (stack1 = helpers.typ) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.typ); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ": ";
  if (stack1 = helpers.start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.start); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.end); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b></span><br /><br />\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prev), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <span class=\"sub-headings\"><b>Page : ";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.page); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b></span>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n -->\n</br>\n\n<nav id= \"footer\">\n    <ul>\n        <li>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prev), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </li>\n        \n        <li><span class=\"round label\">Page : ";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.page); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n        \n        <li>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </li>\n    </ul>\n    <ul><li><span class=\"secondary label round\">Total ";
  if (stack1 = helpers.typ) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.typ); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ": ";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " &nbsp;&nbsp;&nbsp; Displaying ";
  if (stack1 = helpers.typ) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.typ); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ": ";
  if (stack1 = helpers.start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.start); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.end); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li></ul>\n</nav>\n\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/videoTranscript.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!-- template  for transcript page  -->  \n\n<div class=\"row\">\n	\n		<div class=\"large-2 small-4 columns\" id=\"video-icons\">\n        	<center>\n        		<!-- <span class=\"sub-headings\"><b>Title: ";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " </b></span></br></br> -->\n\n				<a href=\"#video/";
  if (stack1 = helpers.videoId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.videoId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/videoplay/";
  if (stack1 = helpers['in']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['in']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.out) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.out); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">	\n				<img src=\"";
  if (stack1 = helpers.inIcon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.inIcon); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"videoTranscript\" />\n				</a> </br>\n				<a href=\"#video/";
  if (stack1 = helpers.videoId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.videoId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/videoplay/";
  if (stack1 = helpers['in']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['in']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.out) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.out); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><i class=\"fi-play-video icon-style\"></i></a> \n			</center>\n		</div>\n		\n\n		<div class=\"large-10 small-8 columns\">\n			<div id=\"data\">\n				<div class=\"panel radius\">\n					<div class=\"transValue\">";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.value); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n					<div class=\"transMeta\">\n						In: ";
  if (stack1 = helpers.in_npt) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.in_npt); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " <br />\n						Out: ";
  if (stack1 = helpers.out_npt) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.out_npt); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " <br />\n						Duration: ";
  if (stack1 = helpers.duration_fixed) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.duration_fixed); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "s <br />\n						Contributed by: ";
  if (stack1 = helpers.user) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.user); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "	\n					</div>	\n				</div>\n			</div>\n		</div>\n</div>\n\n</br>";
  return buffer;
  });

this["JST"]["app/scripts/templates/videosInfo.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h3>Title: ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n<img src=\"";
  if (stack1 = helpers.iconURL) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.iconURL); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n<h4>Location: ";
  if (stack1 = helpers.location) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.location); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n<p>Summary: ";
  if (stack1 = helpers.summary) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.summary); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " </p>\n\n<video src=\"";
  if (stack1 = helpers.videosURL96) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.videosURL96); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"pandoraVideos\" poster=\"";
  if (stack1 = helpers.iconURL) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.iconURL); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" controls></video>\n\n<button id=\"makeVideosBig\">Make video big</button>\n";
  return buffer;
  });

return this["JST"];

});