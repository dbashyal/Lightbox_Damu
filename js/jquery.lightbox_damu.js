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
				$('body').append('<div class="lightbox_html_container" style="background: #000;padding: 10px;display: none;"/>');
				$('.lightbox_html_container').prepend('<span class="close" style="display: block;text-align: center;border: 1px solid #dedede;padding: 0;line-height: 1.5;font-size: 15px;font-weight: bold;width: 20px;cursor: pointer;position: absolute;top: -5px;right: -5px;background: #fff;">X</span>');
			}
		};
		
		Lightbox.prototype.overlay = function() {
			if($('.damu_overlay').length < 1){
                var $overlay = $('<div class="damu_overlay '+this.options.classPrefix+'_overlay" style="display: none;"/>');
                $overlay.css(this.options.overlayCSS);
                $('body').append($overlay);
			}
		};

		Lightbox.prototype.enable = function() {
			this.options.el.click(function(){
				var $html = $(this).html();
				$('.lightbox_damu_wrapper').html($html);
			});
		};
		
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
		zIndex: 999,
		centered: true,
		modalCSS: {top: '40px'},
		overlayCSS: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: .3,
            background: '#000',
            position: 'absolute',
            width: '100%',
            zIndex: (this.zIndex + 2)
        }
	}
}(jQuery, window));