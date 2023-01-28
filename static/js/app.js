$(document).ready(function () {
	$(".selecty").selecty();

	var owl_carousel = false;

	$("*").each(function () {
		if ($(this).hasClass("owl-carousel")) {
			owl_carousel = true;
		}
	});
	if (owl_carousel) {
		var owl = $("#owl-demo");
		owl.owlCarousel({
			loop: true,
			items: 4,
			nav: true,
			dots: false,
			margin: 10,
			autoplay: true,
			autoplaySpeed: 4000,
			autoplayTimeout: 7000,
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1,
				},
				// breakpoint from 480 up
				480: {
					items: 1,
				},
				640: {
					items: 3,
				},
				// breakpoint from 768 up
				768: {
					items: 3,
				},
				980: {
					items: 4,
				},
			},
		});

		var owl = $("#owl-demo1");
		owl.owlCarousel({
			loop: true,
			items: 4,
			nav: true,
			dots: false,
			// navText:["<i class='fa fa-arrow-right'></div>","<i class='fa-arrow-right'></i>"],
			margin: 30,
			autoplay: true,
			autoplaySpeed: 4000,
			autoplayTimeout: 7000,
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1,
				},
				// breakpoint from 480 up
				480: {
					items: 1,
				},
				640: {
					items: 3,
				},
				// breakpoint from 768 up
				768: {
					items: 3,
				},
				980: {
					items: 4,
				},
			},
		});

		var owl = $("#owl-demo2");
		owl.owlCarousel({
			loop: true,
			items: 1,
			// navText:["<i class='fa fa-arrow-right'></div>","<i class='fa-arrow-right'></i>"],
			margin: 0,
			dots: true,
			autoplay: true,
			autoplaySpeed: 4000,
			autoplayTimeout: 7000,
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1,
				},
				// breakpoint from 480 up
				480: {
					items: 1,
				},
				640: {
					items: 1,
				},
				// breakpoint from 768 up
				768: {
					items: 1,
				},
				980: {
					items: 1,
				},
			},
		});
	}

	// Variables declarations

	var $wrapper = $(".main-wrapper");
	var $pageWrapper = $(".page-wrapper");
	var $slimScrolls = $(".slimscroll");

	// Sidebar

	var Sidemenu = function () {
		this.$menuItem = $("#sidebar-menu a");
	};

	function init() {
		var $this = Sidemenu;
		$("#sidebar-menu a").on("click", function (e) {
			if ($(this).parent().hasClass("submenu")) {
				e.preventDefault();
			}
			if (!$(this).hasClass("subdrop")) {
				$("ul", $(this).parents("ul:first")).slideUp(350);
				$("a", $(this).parents("ul:first")).removeClass("subdrop");
				$(this).next("ul").slideDown(350);
				$(this).addClass("subdrop");
			} else if ($(this).hasClass("subdrop")) {
				$(this).removeClass("subdrop");
				$(this).next("ul").slideUp(350);
			}
		});
		$("#sidebar-menu ul li.submenu a.active")
			.parents("li:last")
			.children("a:first")
			.addClass("active")
			.trigger("click");
	}

	// Sidebar Initiate
	init();

	// Mobile menu sidebar overlay

	$("body").append('<div class="sidebar-overlay"></div>');
	$(document).on("click", "#mobile_btn", function () {
		$wrapper.toggleClass("slide-nav");
		$(".sidebar-overlay").toggleClass("opened");
		$("html").addClass("menu-opened");
		$("#task_window").removeClass("opened");
		return false;
	});

	$(".sidebar-overlay").on("click", function () {
		$("html").removeClass("menu-opened");
		$(this).removeClass("opened");
		$wrapper.removeClass("slide-nav");
		$(".sidebar-overlay").removeClass("opened");
		$("#task_window").removeClass("opened");
	});

	// Chat sidebar overlay

	$(document).on("click", "#task_chat", function () {
		$(".sidebar-overlay").toggleClass("opened");
		$("#task_window").addClass("opened");
		return false;
	});

	// Select 2

	if ($(".select").length > 0) {
		$(".select").select2({
			minimumResultsForSearch: -1,
			width: "100%",
		});
	}

	// Modal Popup hide show

	if ($(".modal").length > 0) {
		var modalUniqueClass = ".modal";
		$(".modal").on("show.bs.modal", function (e) {
			var $element = $(this);
			var $uniques = $(modalUniqueClass + ":visible").not($(this));
			if ($uniques.length) {
				$uniques.modal("hide");
				$uniques.one("hidden.bs.modal", function (e) {
					$element.modal("show");
				});
				return false;
			}
		});
	}

	// Floating Label

	if ($(".floating").length > 0) {
		$(".floating")
			.on("focus blur", function (e) {
				$(this)
					.parents(".form-focus")
					.toggleClass(
						"focused",
						e.type === "focus" || this.value.length > 0
					);
			})
			.trigger("blur");
	}

	// Sidebar Slimscroll

	if ($slimScrolls.length > 0) {
		$slimScrolls.slimScroll({
			height: "auto",
			width: "100%",
			position: "right",
			size: "7px",
			color: "#ccc",
			wheelStep: 10,
			touchScrollStep: 100,
		});
		var wHeight = $(window).height() - 60;
		$slimScrolls.height(wHeight);
		$(".sidebar .slimScrollDiv").height(wHeight);
		$(window).resize(function () {
			var rHeight = $(window).height() - 60;
			$slimScrolls.height(rHeight);
			$(".sidebar .slimScrollDiv").height(rHeight);
		});
	}

	// Page Content Height

	var pHeight = $(window).height();
	$pageWrapper.css("min-height", pHeight);
	$(window).resize(function () {
		var prHeight = $(window).height();
		$pageWrapper.css("min-height", prHeight);
	});

	// Date Time Picker

	if ($(".datetimepicker").length > 0) {
		$(".datetimepicker").datetimepicker({
			format: "MM/DD/YYYY",
			icons: {
				up: "fa fa-angle-up",
				down: "fa fa-angle-down",
				next: "fa fa-angle-right",
				previous: "fa fa-angle-left",
			},
		});
	}

	// Datatable

	if ($(".datatable").length > 0) {
		$(".datatable").DataTable({
			bFilter: true,
			"iDisplayLength": 100
		});
	}

	// Tooltip

	if ($('[data-toggle="tooltip"]').length > 0) {
		$('[data-toggle="tooltip"]').tooltip();
	}

	// Email Inbox

	if ($(".clickable-row").length > 0) {
		$(".clickable-row").click(function () {
			window.location = $(this).data("href");
		});
	}

	// Check all email

	$(document).on("click", "#check_all", function () {
		$(".checkmail").click();
		return false;
	});
	if ($(".checkmail").length > 0) {
		$(".checkmail").each(function () {
			$(this).on("click", function () {
				if ($(this).closest("tr").hasClass("checked")) {
					$(this).closest("tr").removeClass("checked");
				} else {
					$(this).closest("tr").addClass("checked");
				}
			});
		});
	}

	// Mail important

	$(document).on("click", ".mail-important", function () {
		$(this).find("i.fa").toggleClass("fa-star").toggleClass("fa-star-o");
	});

	// SuDDernote

	if ($(".summernote").length > 0) {
		$(".summernote").summernote({
			height: 200, // set editor height
			minHeight: null, // set minimum height of editor
			maxHeight: null, // set maximum height of editor
			focus: false, // set focus to editable area after initializing summernote
		});
	}

	// Task Complete

	$(document).on("click", "#task_complete", function () {
		$(this).toggleClass("task-completed");
		return false;
	});

	// Multiselect

	if ($("#customleave_select").length > 0) {
		$("#customleave_select").multiselect();
	}
	if ($("#edit_customleave_select").length > 0) {
		$("#edit_customleave_select").multiselect();
	}

	// Leave Settings button show

	$(document).on("click", ".leave-edit-btn", function () {
		$(this)
			.removeClass("leave-edit-btn")
			.addClass("btn btn-white leave-cancel-btn")
			.text("Cancel");
		$(this)
			.closest("div.leave-right")
			.append(
				'<button class="btn btn-primary leave-save-btn" type="submit">Save</button>'
			);
		$(this).parent().parent().find("input").prop("disabled", false);
		return false;
	});
	$(document).on("click", ".leave-cancel-btn", function () {
		$(this)
			.removeClass("btn btn-white leave-cancel-btn")
			.addClass("leave-edit-btn")
			.text("Edit");
		$(this).closest("div.leave-right").find(".leave-save-btn").remove();
		$(this).parent().parent().find("input").prop("disabled", true);
		return false;
	});

	$(document).on("change", ".leave-box .onoffswitch-checkbox", function () {
		var id = $(this).attr("id").split("_")[1];
		if ($(this).prop("checked") == true) {
			$("#leave_" + id + " .leave-edit-btn").prop("disabled", false);
			$("#leave_" + id + " .leave-action .btn").prop("disabled", false);
		} else {
			$("#leave_" + id + " .leave-action .btn").prop("disabled", true);
			$("#leave_" + id + " .leave-cancel-btn")
				.parent()
				.parent()
				.find("input")
				.prop("disabled", true);
			$("#leave_" + id + " .leave-cancel-btn")
				.closest("div.leave-right")
				.find(".leave-save-btn")
				.remove();
			$("#leave_" + id + " .leave-cancel-btn")
				.removeClass("btn btn-white leave-cancel-btn")
				.addClass("leave-edit-btn")
				.text("Edit");
			$("#leave_" + id + " .leave-edit-btn").prop("disabled", true);
		}
	});

	$(".leave-box .onoffswitch-checkbox").each(function () {
		var id = $(this).attr("id").split("_")[1];
		if ($(this).prop("checked") == true) {
			$("#leave_" + id + " .leave-edit-btn").prop("disabled", false);
			$("#leave_" + id + " .leave-action .btn").prop("disabled", false);
		} else {
			$("#leave_" + id + " .leave-action .btn").prop("disabled", true);
			$("#leave_" + id + " .leave-cancel-btn")
				.parent()
				.parent()
				.find("input")
				.prop("disabled", true);
			$("#leave_" + id + " .leave-cancel-btn")
				.closest("div.leave-right")
				.find(".leave-save-btn")
				.remove();
			$("#leave_" + id + " .leave-cancel-btn")
				.removeClass("btn btn-white leave-cancel-btn")
				.addClass("leave-edit-btn")
				.text("Edit");
			$("#leave_" + id + " .leave-edit-btn").prop("disabled", true);
		}
	});

	// Placeholder Hide

	if (
		$(".otp-input, .zipcode-input input, .noborder-input input").length > 0
	) {
		$(".otp-input, .zipcode-input input, .noborder-input input")
			.focus(function () {
				$(this)
					.data("placeholder", $(this).attr("placeholder"))
					.attr("placeholder", "");
			})
			.blur(function () {
				$(this).attr("placeholder", $(this).data("placeholder"));
			});
	}

	// OTP Input

	if ($(".otp-input").length > 0) {
		$(".otp-input").keyup(function (e) {
			if (
				(e.which >= 48 && e.which <= 57) ||
				(e.which >= 96 && e.which <= 105)
			) {
				$(e.target).next(".otp-input").focus();
			} else if (e.which == 8) {
				$(e.target).prev(".otp-input").focus();
			}
		});
	}

	// Small Sidebar

	$(document).on("click", "#toggle_btn", function () {
		if ($("body").hasClass("mini-sidebar")) {
			$("body").removeClass("mini-sidebar");
			$(".subdrop + ul").slideDown();
		} else {
			$("body").addClass("mini-sidebar");
			$(".subdrop + ul").slideUp();
		}
		return false;
	});
	$(document).on("mouseover", function (e) {
		e.stopPropagation();
		if (
			$("body").hasClass("mini-sidebar") &&
			$("#toggle_btn").is(":visible")
		) {
			var targ = $(e.target).closest(".sidebar").length;
			if (targ) {
				$("body").addClass("expand-menu");
				$(".subdrop + ul").slideDown();
			} else {
				$("body").removeClass("expand-menu");
				$(".subdrop + ul").slideUp();
			}
			return false;
		}
	});

	$(document).on("click", ".top-nav-search .responsive-search", function () {
		$(".top-nav-search").toggleClass("active");
	});

	$(document).on("click", "#file_sidebar_toggle", function () {
		$(".file-wrap").toggleClass("file-sidebar-toggle");
	});

	$(document).on("click", ".file-side-close", function () {
		$(".file-wrap").removeClass("file-sidebar-toggle");
	});

	if ($(".kanban-wrap").length > 0) {
		$(".kanban-wrap").sortable({
			connectWith: ".kanban-wrap",
			handle: ".kanban-box",
			placeholder: "drag-placeholder",
		});
	}
});

// Loader

$(window).on("load", function () {
	$("#loader").delay(100).fadeOut("slow");
	$("#loader-wrapper").delay(500).fadeOut("slow");
});



//selecty
!function () { "use strict"; var e = { addClass: function (e, t) { var i = e.className, n = i + ("" !== i ? " " : "") + t; e.className = n }, removeClass: function (e, t) { var i = " " + e.className + " ", n = (i = i.replace(/(\s+)/gi, " ")).replace(" " + t + " ", " "); n = n.replace(/(^\s+)|(\s+$)/g, ""), e.className = n }, hasClass: function (e, t) { var i = e.className.split(/\s+/), n = 0; for (n in i) if (i[n] == t) return !0; return !1 }, addEvent: function (e, t, i) { e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent ? e.attachEvent("on" + t, i) : e["on" + t] = i }, removeEvent: function (e, t, i) { e.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent ? e.detachEvent("on" + t, i) : delete e["on" + t] }, removeElement: function (e) { e && e.parentNode && e.parentNode.removeChild(e) }, setUid: function (e) { do { e += Math.floor(1e6 * Math.random()) } while (document.getElementById(e)); return e }, clone: function (t) { if ("object" != typeof t) return t; if (null === t) return t; var i = {}; for (var n in t) i[n] = e.clone(t[n]); return i }, extend: function () { var e = arguments; if (!(e.length < 1)) { for (var t = this.clone(e[0]), i = 1; i < e.length; i++)for (var n in e[i]) t[n] = e[i][n]; return t } }, eventHandler: function (e) { var t = e || window.event; return { ev: t, target: t.target || t.srcElement } }, stopPropagation: function (e) { e.stopPropagation ? e.stopPropagation() : window.event && (window.event.cancelBubble = !0) }, getOffset: function (e) { var t = e.getBoundingClientRect(); return { top: t.top + window.pageYOffset - document.documentElement.clientTop, left: t.left + window.pageXOffset - document.documentElement.clientLeft } } }, t = function (i, n) { return this instanceof t ? (this.settings = e.extend({}, this.defaults, n), this.el = i, this.multiple = !1, this.selected = [], this.shown = !1, this.disabled = !1, this.ul = null, this.optionLi = [], this.items = null, this.options = null, this.template = '<div class="selecty"><a class="selecty-selected"></a><ul class="selecty-options"></ul></div>', void this.init(i)) : new t(i, n) }; t.prototype = { defaults: { separator: ", " }, init: function (e) { return "string" == typeof e && "#" === e[0] && (e = document.getElementById(e.substr(1)), this.el = e), e ? e.length < 1 ? void console.error("No options inside <select>") : (null !== this.el.getAttributeNode("multiple") && (this.multiple = !0), void ("SELECT" === e.nodeName && this.build())) : void console.error("Need select element!") }, build: function () { if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { this.el.classList.add("selecty-select"); var t = document.createElement("div"); return t.classList.add("selecty-arrow"), t.style.top = e.getOffset(this.el).top + this.el.offsetHeight / 2 + "px", t.style.right = e.getOffset(this.el).left + "px", void this.el.parentNode.insertBefore(t, t.nextSibling) } this.el.style.display = "none", this.options = this.el.querySelectorAll("option"), this.items = this.el.querySelectorAll("option, optgroup"), null !== this.el.getAttributeNode("disabled") && (this.disabled = !0); var i = document.createElement("div"); i.innerHTML = this.template; var n = i.querySelector(".selecty"); this.disabled && e.addClass(n, "disabled"), this.btn = i.querySelector(".selecty-selected"), this.ul = i.querySelector(".selecty-options"); for (var s = -1, l = !1, o = 0; o < this.items.length; o++) { s++; var r = document.createElement("li"); "OPTGROUP" === this.items[o].nodeName ? (s--, l = !0, r.innerHTML = this.items[o].getAttribute("label"), e.addClass(r, "optgroup")) : (r.innerHTML = this.items[o].innerHTML, r.setAttribute("data-value", this.items[o].value), r.setAttribute("data-index", s), l && e.addClass(r, "optgroup-option"), null !== this.items[o].getAttributeNode("selected") && (this.selected.push(s), e.addClass(r, "selected")), null !== this.items[o].getAttributeNode("disabled") && e.addClass(r, "disabled")), this.ul.appendChild(r) } this.optionLi = this.ul.querySelectorAll("li[data-index]"), this.updateSelected(), this.el.parentNode.insertBefore(i.firstChild, this.el.nextSibling), this.events() }, events: function () { if (!this.disabled) { var t = this; e.addEvent(t.btn, "click", function (n) { var s = t.otherActived(); null !== s && e.removeClass(s, "active"), e.stopPropagation(n), t.show(), e.addEvent(document, "click", i) }), e.addEvent(document, "keydown", function (e) { 27 == e.which && t.hide() }); var i = function (n) { var s = e.eventHandler(n).target, l = parseInt(s.getAttribute("data-index")); if (!e.hasClass(s, "optgroup")) if ("LI" === s.nodeName && null !== l) { if (e.hasClass(s, "disabled")) return; t.multiple ? (e.hasClass(s, "selected") ? t.selected.splice(t.selected.indexOf(l), 1) : t.selected.push(l), t.updateSelected()) : (t.selected = [], t.selected.push(l), t.updateSelected(), t.hide(), e.removeEvent(document, "click", i)) } else t.hide(), e.removeEvent(document, "click", i) } } }, show: function () { e.addClass(this.ul, "active"), this.shown = !0 }, hide: function () { e.removeClass(this.ul, "active"), e.removeEvent(document.body, "click", function (e) { }), this.shown = !1 }, otherActived: function () { for (var t = document.body.querySelectorAll(".selecty-options"), i = 0; i < t.length; i++)if (e.hasClass(t[i], "active")) return t[i]; return null }, updateSelected: function () { this.clearSelected(), this.btn.innerHTML = "", this.selected.sort(function (e, t) { return e - t }); for (var t = 0; t < this.selected.length; t++) { var i = this.selected[t]; if (this.options[i].setAttribute("selected", "selected"), e.addClass(this.optionLi[i], "selected"), this.multiple) { var n = this.settings.separator; "" === this.btn.innerHTML && (n = ""), this.btn.innerHTML += n + this.options[i].innerHTML } else this.btn.innerHTML = this.options[i].innerHTML } "" === this.btn.innerHTML && (this.btn.innerHTML = this.options[0].innerHTML) }, clearSelected: function () { for (var t = 0; t < this.options.length; t++)this.options[t].removeAttribute("selected"), e.removeClass(this.optionLi[t], "selected") } }, "undefined" != typeof module && module && module.exports ? module.exports = t : "function" == typeof define && define.amd ? define([], function () { return t }) : window.selecty = t; var i = window.jQuery; void 0 !== i && (i.fn.selecty = function () { var e = Array.prototype.slice.call(arguments); return i(this).each(function () { e[0] && "object" != typeof e[0] ? "string" == typeof e[0] && t.prototype[e[0]].apply(new t(this), e.slice(1)) : new t(this, e[0] || {}) }) }) }();
//selecty

