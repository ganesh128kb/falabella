/* ------------------------- GLOBAL PROPERTIES ------------------------- */
var _body;
var _html;
var _window = $(window);
var _document = $(document);

var _windowWidth = _window.width();
var _windowHeight = _window.height();

var _sectionHeight;
var _sectionWidth;


_document.ready(documentReadyHandler);
_window.load(windowLoadHandler);
_window.resize(windowResizeHandler);

var myScroll;
/* ------------------------- EVENT HANDLERS ------------------------- */
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', function () { setTimeout(listViewScroll('listScrollbar'), 100); }, false);
window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

function documentReadyHandler(){
	
	_sectionHeight = screen.height;
	_sectionWidth = screen.width;
	
	/* define section module & section */
	var _layoutController = new layoutController();	
	
	/* define section module & section */
	var _phonegapController = new phonegapController();
	
	listViewScroll('listScrollbar');
}
function windowLoadHandler(){}
function windowResizeHandler(){}

function listViewScroll(_listScroll) {
	myScroll = new iScroll(_listScroll);
}