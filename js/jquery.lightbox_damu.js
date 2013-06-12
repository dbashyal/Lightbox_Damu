/*
* LightBox_Damu
* By: Damu
* Version : 1.0
*
* Licensed under General Public Licence
* You may obtain a copy of the License at:
*
* http://www.gnu.org/licenses/gpl.html
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
;
(function ($, window, undefined) {
	var Lightbox;
	
	Lightbox = (function() {
		function Lightbox(options) {
		  this.options = options;
		  this.init();
		  this.enable();
		}

		Lightbox.prototype.init = function() {
            this.container();
            this.overlay();
		}

		Lightbox.prototype.container = function() {
			if($('.lightbox_html_container').length < 1){
				$('body').append('<div class="lightbox_html_container" style="background: #fff;padding: 10px;display: none;"><div class="lightbox_damu_wrapper"/></div>');
				$('.lightbox_html_container').prepend('<span class="close" style="display: block;text-align: center;border: 1px solid #dedede;padding: 0;line-height: 1.5;font-size: 15px;font-weight: bold;width: 20px;cursor: pointer;position: absolute;top: -5px;right: -5px;background: #fff;">X</span>');
                $('.lightbox_html_container').css(this.options.modalCSS);
			}
		};
		
		Lightbox.prototype.center = function() {
            var $container = $('.lightbox_html_container');
            var width = $container.width();
            var height = $container.height();
            var sWidth = $(window).width();
            var sHeight = $(window).height();

            if(width < sWidth){
                $container.css({left: ((sWidth - width)/2)});
            }

            if(height < sHeight){
                $container.css({top: ((sHeight - height)/2)});
            }
		};

		Lightbox.prototype.overlay = function() {
			if($('.damu_overlay').length < 1){
                var $overlay = $('<div class="damu_overlay '+this.options.classPrefix+'_overlay" style="display: none;"/>');
                $overlay.css(this.options.overlayCSS);
                $('body').append($overlay);
			}
		};

        Lightbox.prototype.open = function() {
            $('.damu_overlay').show();
            $('.lightbox_html_container').show();
            this.center();
            this.close();
        }

        Lightbox.prototype.close = function() {
              $('.lightbox_html_container .close, .damu_overlay').click(function(){
                  $('.damu_overlay').hide();
                  $('.lightbox_html_container').hide();
              });
        }

		Lightbox.prototype.enable = function() {
			this.options.el.click(function(){
				var $html = $(this).html();
				$('.lightbox_damu_wrapper').html('<div class="lightup_damu">'+$html+'</div>');
                Lightbox.prototype.open();
			});
		};

        $(window).resize(Lightbox.prototype.center).scroll(Lightbox.prototype.center);

		return Lightbox;
	})();
	
	$.fn.lightbox_damu = function(options) {
		return this.each(function() {
			var opts = $.extend({}, $.fn.lightbox_damu.Defaults, options);
			opts.el = $(this);
			return lightbox = new Lightbox(opts);
		});
	};

	$.fn.lightbox_damu.Defaults = {
		// animation
		lightEffect: 'fadeIn',

		// callbacks
		onLoad: function() {},
		onClose: function() {},

		// style
		classPrefix: 'lb',
		centered: true,
		overlayCSS: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: .3,
            background: '#000',
            position: 'absolute',
            height: '100%',
            width: '100%',
            zIndex: 1001
        },
		modalCSS: {
            position: 'absolute',
            zIndex: 1002
        }
	}
}(jQuery, window));