define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/emptyTranscript.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!-- template for Empty video transcript -->  \n\n<div class=\"panel\">\n	<h2><i class=\"fi-skull icon-style\" ></i></h2>\n<H2>Sorry, No content available !.</H2>\n\n\n</div>\n";
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


  buffer += "<div id=\"videopage\">\n<header>\n	<h5><b>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b></h5>\n</header>\nMy video\n\n<video src=\"";
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
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!-- template - Play video page -->  \n\n\n<div id=\"videopage\">\n<header>\n	<h5><b><span title=\"Video Title-[";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "]\"style=\"\"> ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></b></h5>\n</header>\n\n\n\n\n   \n\n\n   <div class=\"mydiv\">\n      <div class=\"flex-video widescreen vimeo\" > \n        <video src=\"";
  if (stack1 = helpers.videoURL96) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.videoURL96); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"pandoraVideo\" poster=\"";
  if (stack1 = helpers.iconURL) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.iconURL); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" controls></video>\n	<!-- <iframe src=\"";
  if (stack1 = helpers.videoURL96) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.videoURL96); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"pandoraVideo\" poster=\"";
  if (stack1 = helpers.iconURL) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.iconURL); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" controls width=\"400\" height=\"225\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen>\n\n\n	</iframe> --> \n   </div></div>\n\n   \n\n\n</div>\n<br>\n    <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/info\"><span class=\"alert radius label\">\n	<b>[ Video Info ]</b></span></a>&nbsp;&nbsp;&nbsp;\n		    <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/transcripts\"><span class=\"alert radius label\"><b>[ Transcripts ]</b></span></a>\n        <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/descriptions\"><span class=\"alert radius label\"><b>[ Descriptions ]</b></span></a>\n		</br></br>\n\n\n\n";
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
    + "\" width=\"300px\"/>\n	</a></br></br>\n	<a class=\" alert radius label\" href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/videoplay\"><b><pre>   Play   </pre></b></a>\n</br><br>\n	<a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/transcripts\"><span class=\"alert radius label\"><b>[Transcripts]</b></span></a>\n	<a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/descriptions\"><span class=\"alert radius label\"><b>[Descriptions]</b></span></a>\n</div>\n\n\n\n\n<!-- template for Video info page  with Project,Topic,Location,Date,Language,Director,Summary show not available if detail not found -->  \n <div class=\"large-10 small-8 columns\">	\n	<div id= \"data\">\n		<div class=\"panel radius\">\n		<a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/videoplay\">\n		<header><h3><b>Title:";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b></h3></header></a></br></br>\n          \n\n\n		<b>Project:</b> \n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.project), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</br></br>\n\n		<b>Topic:</b> \n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.topic), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</br></br>\n\n		<b>Location:</b> \n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.location), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</br></br>\n\n		<b>Date:</b> \n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.date), {hash:{},inverse:self.program(11, program11, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</br></br>\n\n		<b>Language:</b> \n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.language), {hash:{},inverse:self.program(11, program11, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</br></br>\n\n		<b>Director:</b>\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.director), {hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</br></br>\n\n		<b>Summary:</b>\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.summary), {hash:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</br></br>\n\n		<b>Link:</b> ";
  if (stack1 = helpers.shareURL) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.shareURL); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n	</div>				\n	</div>\n\n</div>\n\n</div>\n\n</div>";
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
    + "\"  width=\"100px\"/></a></br></br>\n\n		</div>\n\n		<div class=\"large-10 small-8 columns\">\n            \n			<h3><a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/videoplay\" style=\"color: #000000\"> ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3></a>\n\n\n\n		    Name: <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/videoplay\" style=\"color:orange\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></br></br>\n\n\n		    <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/info\" ><span class=\"alert radius label\" ><b>[ Video Info ]</b></span></a>&nbsp;&nbsp;&nbsp;\n		    <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/transcripts\"><span class=\"alert radius label\"><b>[ Transcripts ]</b></span></a>&nbsp;&nbsp;&nbsp;\n		    <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/descriptions\"><span class=\"alert radius label\"><b>[ Descriptions ]</b></span></a>\n			<hr>\n			\n		</div>\n</div>\n\n</div>\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/videoList.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <a href=\"#list/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.prev) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.prev); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"alert radius label\">Prev</span></a>\n    ";
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
    + "\"><span class=\"alert radius label\">Next</span></a>\n    ";
  return buffer;
  }

  buffer += "<!-- template for List of videos page with pagination -->  \n\n<div class=\"paginationInfo\">\n\n<div class=\"Titlelist\">\n\n   <H3><b>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b></H3>\n\n</div>\n\n\n<div id=\"down-arrow\">\n    <a href=\"#Top\"><i class=\"fi-arrow-down icon-style\" ></i></a>\n    <h2><a id=\"Down\"></a></h2>\n</div>\n    \n\n<span class=\"tiny secondary round label\">Total Videos: (";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ") ||\n\nDisplaying Videos : ";
  if (stack1 = helpers.start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.start); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.end); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></br>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prev), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <span class=\"radius label\">Page:";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.page); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n\n	\n<div id=\"data\">\n    <div class=\"videosList\">\n\n    </div>\n    \n</div>\n\n\n\n<div id=\"top-arrow\">\n    <h2><a id=\"Top\"></a></h2>\n    <a href=\"#Down\"><i class=\"fi-arrow-up icon-style\"></i></a>\n</div>\n\n\n\n<div class=\"paginationInfo\">\n\n<span class=\"secondary radius label\">Total Videos: (";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ") ||\n\nDisplaying Videos : ";
  if (stack1 = helpers.start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.start); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.end); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></br>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prev), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <span class=\"radius label\">Page:";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.page); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n";
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
    + "\"  width=\"100px\"/ ></a>\n	</div></br>\n     \n\n	<div class=\"large-10 small-8 columns\">\n			<div id=\"data\">\n\n\n\n\n\n\n\n\n\n		<h3><a href=\"#list/";
  if (stack1 = helpers.idUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.idUrl); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"color: #000000\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3></a>\n		\n		Name: <a href=\"#list/";
  if (stack1 = helpers.idUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.idUrl); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"color: orange\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n		<a href=\"#list/";
  if (stack1 = helpers.idUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.idUrl); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"color: #000000\">(Videos: ";
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.items); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</a></br></br>\n		<hr>\n	</div>\n	</div>\n </div>\n\n\n   \n\n\n\n\n";
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
    + "\"><span class=\"alert radius label\">Prev</span></a>\n    ";
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
    + "\"><span class=\"alert radius label\">Next</span></a>\n    ";
  return buffer;
  }

  buffer += "<!-- template -Search Video page with Pagination -->  \n\n<div class=\"searchedFor\">\n    <span class=\"secondary radius label\">Results for \"";
  if (stack1 = helpers.queryString) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.queryString); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"</span>\n    <div id=\"down-arrow\">\n        <a href=\"#Top\"><i class=\"fi-arrow-down icon-style\" ></i></a>\n        <h2><a id=\"Down\"></a></h2>\n    </div>\n</div>\n\n\n<div class=\"paginationInfo\">\n    <span class=\"secondary radius label\">Total results: ";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    Displaying results ";
  if (stack1 = helpers.start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.start); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.end); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " </span></br>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prev), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    &nbsp;&nbsp;<span class=\"radius label\">";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.page); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>&nbsp;&nbsp;\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</br>\n</div>\n<div id=\"data\">\n<div class=\"videosList\">\n\n</div>\n</div>\n\n\n<div id=\"top-arrow\">\n    <h2><a id=\"Top\"></a></h2>\n    <a href=\"#Down\"><i class=\"fi-arrow-up icon-style\"></i></a>\n</div>\n\n\n\n<div class=\"searchedFor\">\n    <span class=\"secondary radius label\">Results for \"";
  if (stack1 = helpers.queryString) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.queryString); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"</span>\n    \n</div>\n<div class=\"paginationInfo\">\n    <span class=\"secondary radius label\">Total results: ";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    Displaying results ";
  if (stack1 = helpers.start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.start); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.end); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " </span></br>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prev), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    &nbsp;&nbsp;<span class=\"radius label\">";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.page); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>&nbsp;&nbsp;\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</br>\n</div>\n";
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
    + "\"><span class=\"alert radius label\">Prev</span></a>\n    ";
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
    + "\"><span class=\"alert radius label\">Next</span></a>\n    ";
  return buffer;
  }

  buffer += "<div class=\"paginationInfo\">\n\n\n<div class=\"TitleTrans\">\n\n   <H3><b>Title: ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b></H3>\n\n</div>\n\n\n<div id=\"down-arrow\">\n    <a href=\"#Top\"><i class=\"fi-arrow-down icon-style\" ></i></a>\n    <h2><a id=\"Down\"></a></h2>\n</div>\n    \n\n\n<span class=\"secondary radius label\">Total ";
  if (stack1 = helpers.typ) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.typ); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ": (";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</span>\n</br>\n\n <span class=\"secondary radius label\">Displaying ";
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
    + "</span></br>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prev), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <span class=\"radius label\">Page: ";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.page); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n      \n\n       \n\n\n	\n<div id=\"data\">\n    <div class=\"videosTranscript\">\n        <center>\n            <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/info\" class=\"alert radius label\">\n                <b>[ Video Info ]</b>\n            </a>\n            <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/";
  if (stack1 = helpers.otherTyp) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.otherTyp); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"alert radius label\">\n                <b>[ Video ";
  if (stack1 = helpers.otherTyp) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.otherTyp); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " ]</b>\n            </a>\n\n        </center>\n        \n    </div>\n        <center>\n            <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/info\" class=\"alert radius label\">\n                <b>[ Video Info ]</b>\n            </a>\n            <a href=\"#video/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/layers/";
  if (stack1 = helpers.otherTyp) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.otherTyp); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"alert radius label\">\n                <b>[ Video ";
  if (stack1 = helpers.otherTyp) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.otherTyp); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " ]</b>\n            </a>\n        </center>\n</div>\n\n\n<div id=\"top-arrow\">\n    <h2><a id=\"Top\"></a></h2>\n    <a href=\"#Down\"><i class=\"fi-arrow-up icon-style\"></i></a>\n</div>\n\n\n<div class=\"paginationInfo\">\n\n\n\n\n\n<span class=\"secondary radius label\">Total ";
  if (stack1 = helpers.typ) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.typ); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ": (";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</span>\n</br>\n\n <span class=\"secondary radius label\">Displaying ";
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
    + "</span></br>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prev), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <span class=\"radius label\">Page: ";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.page); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n\n\n\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/videoTranscript.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \n							";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.value); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return " \n							Not available  \n				";
  }

  buffer += "<!-- template  for transcript page  -->  \n\n<div class=\"row\">\n	\n		<div class=\"large-2 small-4 columns\" id=\"video-icons\">\n        	<center>\n        		<span class=\"secondary radius label\"><b>Title:</b> ";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " <br /></span>\n\n				<a href=\"#video/";
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
    + "\" alt=\"videoTranscript\" />\n				</a></br></br>\n				<a class=\" alert radius label\" href=\"#video/";
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
    + "\">&nbsp;&nbsp;&nbsp;Play&nbsp;&nbsp;&nbsp;</a>\n		</center>\n		</div>\n		\n\n		<div class=\"large-10 small-8 columns\">\n			<div id=\"data\">\n				<div class=\"panel radius\">\n				<b>User:</b> ";
  if (stack1 = helpers.user) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.user); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " <br />\n				<b>Duration:</b> ";
  if (stack1 = helpers.duration) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.duration); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " <br />\n				<b>In:</b> ";
  if (stack1 = helpers['in']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['in']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " <br />\n				<b>Out:</b> ";
  if (stack1 = helpers.out) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.out); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " <br />\n				\n\n                   <b>Value:</b> \n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.value), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</br></br><hr>\n\n				</div>\n			</div>\n		</div>\n</div>\n\n";
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