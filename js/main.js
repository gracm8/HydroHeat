var mmenu,hasPromo=!1,scrollStart=0;function inputErrorRemove(e){e.removeClass("error"),e.find("p.error").remove()}function inputError(e,t){e.addClass("error"),e.find("p.error").remove(),e.append('<p class="error">'+t+"</p>")}function alertModal(e,t){$.modalwindow({target:"#alertModal"}),$("#alertModal .modal-header").html("<h3>"+e+"</h3>"),$("#alertModal .modal-body").html("<p>"+t+"</p>")}function validEmail(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.toLowerCase())}function validDate(e){if(!/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(e))return!1;var t=e.split("/");e=Date.parse(t[2]+"-"+t[1]+"-"+t[0]);return!isNaN(e)}$(".promo-banner").length>0&&(hasPromo=!0,scrollStart=$(".promo-banner").outerHeight()),$(window).scroll(function(){$(".sidebar").removeClass("open"),$(document).scrollTop()>scrollStart?$("body").addClass("scrolling"):$("body").removeClass("scrolling")}),$(document).on("ready",function(){$("tbody:not(:has(*))").html("").siblings("thead").hide(),$(document).on("click",".notice .close",function(e){e.preventDefault(),$(this).parents(".notice").fadeOut()}),$(document).on("click",".accordion .item",function(e){$(this).parents(".accordion").find(".item").removeClass("open"),$(this).addClass("open")}),$(document).on("click",".message-popup",function(){$(this).slideUp(120,function(){$(this).slideUp()})}),$(document).on("input",".autocomplete.selected",function(e){return e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),$(this).parents(".autocomplete").find('input[type="hidden"]').val(""),$(this).parents(".autocomplete").find("input.autocomplete").removeClass("selected"),$(this).parents(".autocomplete").find("input.autocomplete").val(""),$(".result",$(this).parent()).remove(),$(".autocomplete .results .section").hide(),!1}),$(document).on("input","input.autocomplete",function(){$(this).val().length?$.post("/api/autocomplete",{value:$(this).val(),model:$(this).data("class"),forInput:$(this).attr("name"),api_token:$('meta[name="api-key"]').attr("content")},function(e){var t=e.forInput,o=$('input.autocomplete[name="'+t+'"]');if(e.results.length){var n=$(o).parent().find(".section");for(var a in $(".result",n).remove(),n.fadeIn(),e.results)n.append('<div class="result" data-value="'+e.results[a].value+'"><span class="title">'+e.results[a].showAs+"</span>"+(e.results[a].extra?'<span class="sub-title">'+e.results[a].extra+"</span></div>":""))}else $(o).parent().find(".section > .result").remove(),$(o).parent().find(".section").hide()}):($(this).siblings("input").val(""),$(".autocomplete .results .section").hide())}),$(document).on("click",".autocomplete .results .result",function(){$(this).parents(".autocomplete").find('input[type="hidden"]').val($(this).data("value")),$(this).parents(".autocomplete").find("input.autocomplete").addClass("selected"),$(this).parents(".autocomplete").find("input.autocomplete").val($(".title",this).html()),$(".result",$(this).parent()).remove(),$(".autocomplete .results .section").hide()}),$("section.faqs .questions .question h3").on("click",function(){var e=$(this).parent(".question");e.hasClass("active")?e.removeClass("active"):($(".question").removeClass("active"),e.addClass("active"))}),$(".respToggle").on("click",function(e){e.preventDefault();var t=$(this).data("panel"),o=$('.respToggleContent[data-panel="'+t+'"]').html();return $("body").addClass("slideWindow"),$("#slideWindow .content").html(o),$("#slideWindow .content .owl-stage").css("transform","inherit"),$("#slideWindow .content div").removeClass(function(e,t){return(t.match(/\owl-\S+/g)||[]).join(" ")}),!1}),$("#slideWindow").on("click",".closePanel, .closeOverlay",function(){$("body").removeClass("slideWindow")}),$("section.points .owl-carousel").owlCarousel({loop:!0,margin:0,dots:!1,nav:!1,items:1,autoplayTimeout:2e3,animateOut:"fadeOut"}),setInterval(function(){var e=$("section.points .point.active");e.is(":last-child")?$("section.points .point:first-child").addClass("active"):e.next(".point").addClass("active"),e.removeClass("active")},3500),$("#menu").mmenu({navbar:{add:!0,title:"Back"},navbars:[{content:['<a href="/" class="logo"><img src="/img/grad/th.png"></a>\n                <span class="close-nav"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" fill="none" x="0px" y="0px"><path d="M20.9286 2.36426C20.7334 2.16899 20.4168 2.16899 20.2215 2.36426L12 10.5858L3.77847 2.36426C3.58321 2.169 3.26663 2.169 3.07137 2.36426L2.36426 3.07136C2.169 3.26663 2.169 3.58321 2.36426 3.77847L10.5858 12L2.36426 20.2215C2.169 20.4168 2.169 20.7334 2.36426 20.9286L3.07137 21.6357C3.26663 21.831 3.58321 21.831 3.77847 21.6357L12 13.4142L20.2215 21.6357C20.4168 21.831 20.7334 21.831 20.9286 21.6357L21.6357 20.9286C21.831 20.7334 21.831 20.4168 21.6357 20.2215L13.4142 12L21.6357 3.77847C21.831 3.58321 21.831 3.26662 21.6357 3.07136L20.9286 2.36426Z" fill="#182550"/></svg></span>\n                ']}],extensions:["position-right","multiline","border-full"]},{offCanvas:{moveBackground:!1,pageSelector:".outerwrapper"}}),$(".navlink,.close-nav").on("click",function(e){e.preventDefault(),$(".mm-wrapper__blocker").trigger("mousedown"),$("#mm-blocker").trigger("mousedown")})}),$(".toggleElement").on("click",function(e){e.preventDefault();var t=$(this).attr("href").replace("#","");$("."+t).toggle()});
