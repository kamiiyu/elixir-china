(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++){if(t in this&&this[t]===e)return t}return-1};(function(n){var r;n.fn.pagination=function(e){return this.each(function(){return(new r(n(this),e)).render()})};return r=function(){function r(t,r){var i;this.el=t;this.change=e(this.change,this);this.clicked=e(this.clicked,this);this.isValidPage=e(this.isValidPage,this);this.render=e(this.render,this);this.pages=e(this.pages,this);this.buildLink=e(this.buildLink,this);this.buildLi=e(this.buildLi,this);this.buildLinks=e(this.buildLinks,this);i={current_page:1,total_pages:1,next:"&gt;",prev:"&lt;",first:false,last:false,display_max:8,ignore_single_page:true,no_turbolink:false};this.settings=n.extend(i,r);if(n(document).on){n(this.el).on("click","a",this.clicked)}else{n("a",this.el).live("click",this.clicked)}this.el.data("paginationView",this)}r.prototype.buildLinks=function(){var e,t,n,r,i,s;e=this.settings.current_page;t=[];if(this.settings.first){t.push(this.buildLi(1,this.settings.first))}if(this.settings.prev){t.push(this.buildLi(e-1,this.settings.prev))}s=this.pages();for(r=0,i=s.length;r<i;r++){n=s[r];t.push(this.buildLi(n,n))}if(this.settings.next){t.push(this.buildLi(e+1,this.settings.next))}if(this.settings.last){t.push(this.buildLi(this.settings.total_pages,this.settings.last))}return t};r.prototype.buildLi=function(e,t){if(t==null){t=e}return"<li>"+this.buildLink(e,t)+"</li>"};r.prototype.buildLink=function(e,t){var n;if(t==null){t=e}if(this.settings.no_turbolink){n=" data-no-turbolink='1'"}else{n=""}return"<a href='#' data-page='"+e+"'"+n+">"+t+"</a>"};r.prototype.pages=function(){var e,r,i,s,o,u,a,f,l,c,h,p,d,v,m;u=this.settings.total_pages;r=this.settings.current_page;o=[];i=this.settings.display_max;if(u>10){o.push(1);if(r>i-1){o.push("..")}if(r===u){for(s=a=p=u-i;p<=u?a<=u:a>=u;s=p<=u?++a:--a){o.push(s)}}if(u-r<i-1){for(s=f=d=u-i;d<=u?f<=u:f>=u;s=d<=u?++f:--f){o.push(s)}}else if(r>i-1){e=i/2;for(s=l=v=r-e,m=r+e;v<=m?l<=m:l>=m;s=v<=m?++l:--l){o.push(s)}}else if(r<=i-1){for(s=c=2;2<=i?c<=i:c>=i;s=2<=i?++c:--c){o.push(s)}}o=n.grep(o,function(e,t){return n.inArray(e,o)===t});if(t.call(o,u)<0){if(!(u-r<i-1)){o.push("..")}o.push(u)}}else{for(s=h=1;1<=u?h<=u:h>=u;s=1<=u?++h:--h){o.push(s)}}return o};r.prototype.render=function(){var e,t,r,i,s;this.el.html("");if(this.settings.total_pages===1&&this.settings.ignore_single_page){return}e=["<div class='jquery-bootstrap-pagination'>"];e.push("<ul class='pagination'>");s=this.buildLinks();for(r=0,i=s.length;r<i;r++){t=s[r];e.push(t)}e.push("</ul>");e.push("</div>");this.el.html(e.join("\n"));n("[data-page="+this.settings.current_page+"]",this.el).closest("li").addClass("active");n("[data-page='..']",this.el).closest("li").addClass("disabled");n("[data-page='0']",this.el).closest("li").addClass("disabled");n("[data-page='"+(this.settings.total_pages+1)+"']",this.el).closest("li").addClass("disabled");if(this.settings.current_page===1&&this.settings.first){n("li:first",this.el).removeClass("active").addClass("disabled")}if(this.settings.current_page===this.settings.total_pages&&this.settings.last){return n("li:last",this.el).removeClass("active").addClass("disabled")}};r.prototype.isValidPage=function(e){return e>0&&e!==this.settings.current_page&&e<=this.settings.total_pages};r.prototype.clicked=function(e){var t;t=parseInt(n(e.target).attr("data-page"));if(!this.isValidPage(t)){return}if(this.settings.callback!=null){this.settings.callback(e,t)}return this.change(t)};r.prototype.change=function(e){e=parseInt(e);if(!this.isValidPage(e)){return}this.settings.current_page=e;return this.render()};return r}()})(jQuery)}).call(this)