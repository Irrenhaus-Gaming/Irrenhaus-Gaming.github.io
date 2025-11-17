/*
	Helios by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		settings = {

			// Carousels
				carousels: {
					speed: 4,
					fadeIn: true,
					fadeDelay: 250
				},

		};

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '961px',   '1280px' ],
			narrow:    [ '841px',   '960px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			speed: 350,
			noOpenerFade: true,
			alignment: 'center'
		});

	// Scrolly.
		$('.scrolly').scrolly();

	// Nav.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	// Carousels.
		$('.carousel').each(function() {
			var $t       = $(this),
				$reel    = $t.children('.reel'),
				$items   = $reel.children('article');

			var autoSpeedPxPerMs    = (settings && settings.carousels && settings.carousels.autoSpeed) ? settings.carousels.autoSpeed : 0.02;
			var hoverMultiplier     = (settings && settings.carousels && settings.carousels.hoverMultiplier) ? settings.carousels.hoverMultiplier : 4;
			var forwardMultiplier   = (settings && settings.carousels && settings.carousels.forwardMultiplier) ? settings.carousels.forwardMultiplier : 8;
			var backwardMultiplier  = (settings && settings.carousels && settings.carousels.backwardMultiplier) ? settings.carousels.backwardMultiplier : 8;
			var fadeInEnabled       = settings && settings.carousels && settings.carousels.fadeIn;
			var fadeDelay           = (settings && settings.carousels && settings.carousels.fadeDelay) ? settings.carousels.fadeDelay : 25;

			var itemWidth = $items.outerWidth(true) || 240;

			var $clones = $items.clone();
			$reel.append($clones);

			var originalReelWidth = null;
			var pos = 0;

			if (fadeInEnabled) {
				$items.addClass('loading');

				$t.scrollex({
					mode: 'middle',
					top: '-20vh',
					bottom: '-20vh',
					enter: function() {
						var timerId,
							limit = $items.length - Math.ceil($window.width() / itemWidth);

						timerId = window.setInterval(function() {
							var x = $items.filter('.loading'), xf = x.first();

							if (x.length <= limit) {
								window.clearInterval(timerId);
								$items.removeClass('loading');
								return;
							}

							xf.removeClass('loading');

						}, fadeDelay);
					}
				});
			}

			var $forward = $t.find('.forward');
			if (!$forward || $forward.length === 0) $forward = $('<span class="forward"></span>').appendTo($t).hide();
			var $backward = $t.find('.backward');
			if (!$backward || $backward.length === 0) $backward = $('<span class="backward"></span>').appendTo($t).hide();

			var baseVelocity = -autoSpeedPxPerMs;
			var velocity = baseVelocity;

			var rafId = null;
			var lastTime = null;

			function step(ts) {
				if (lastTime === null) lastTime = ts;
				var dt = ts - lastTime;
				lastTime = ts;

				if (!browser.mobile && originalReelWidth) {
					pos += velocity * dt;

					if (pos <= -originalReelWidth) pos += originalReelWidth;
					if (pos > 0) pos -= originalReelWidth;

					$reel.css('transform', 'translate(' + Math.round(pos) + 'px, 0)');
				}

				rafId = window.requestAnimationFrame(step);
			}

			// === NEW: pause when hovering carousel (unless hovering arrows) ===
			$t.on('mouseenter', function(e) {
				// if mouse enters carousel but not onto an arrow, pause
				if (!$(e.target).closest('.forward, .backward').length) {
					velocity = 0;
				}
			}).on('mouseleave', function() {
				// restore auto-scroll when leaving carousel entirely
				velocity = baseVelocity;
			});

			// arrows still force directional speed while hovered
			$forward
				.appendTo($t)
				.hide()
				.on('mouseenter', function() {
					// keep same (leftward) direction, faster
					velocity = baseVelocity * forwardMultiplier;
				})
				.on('mouseleave', function() {
					// if still inside carousel, return to paused state; otherwise restore auto
					velocity = $t.is(':hover') ? 0 : baseVelocity;
				});

			$backward
				.appendTo($t)
				.hide()
				.on('mouseenter', function() {
					// invert direction (rightward)
					velocity = Math.abs(baseVelocity) * backwardMultiplier;
				})
				.on('mouseleave', function() {
					velocity = $t.is(':hover') ? 0 : baseVelocity;
				});

			$window.on('load', function() {
				var fullWidth = $reel[0].scrollWidth;
				originalReelWidth = Math.round(fullWidth / 2) || fullWidth;

				if (browser.mobile) {
					$reel
						.css('overflow-y', 'hidden')
						.css('overflow-x', 'scroll')
						.scrollLeft(0);
					$forward.hide();
					$backward.hide();
					if (rafId) { window.cancelAnimationFrame(rafId); rafId = null; lastTime = null; }
				} else {
					$reel
						.css('overflow', 'visible')
						.scrollLeft(0);
					$forward.show();
					$backward.show();

					if (pos <= -originalReelWidth || pos > 0) pos = 0;

					if (!rafId) {
						lastTime = null;
						rafId = window.requestAnimationFrame(step);
					}
				}

				$window.on('resize', function() {
					var fw = $reel[0].scrollWidth;
					originalReelWidth = Math.round(fw / 2) || fw;
					if (pos <= -originalReelWidth) pos = 0;
				}).trigger('resize');

			});

		});

})(jQuery);