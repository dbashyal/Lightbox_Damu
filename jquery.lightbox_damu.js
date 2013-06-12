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
	var Lightbox, 
		Document = window.document,
		Defaults = {}
	;
	
	Defaults = (function() {
		function Defaults() {
			// animation
			this.lightEffect = 'fadeIn';

			// callbacks
			this.onLoad = function() {};
			this.onClose: function() {};

			// style
			this.classPrefix: 'lb';
			this.zIndex: 999;
			this.centered: true;
			this.modalCSS: {top: '40px'};
			this.overlayCSS: {background: 'black', opacity: .3};
		}
		return Defaults;
  })();
}(jQuery, window));