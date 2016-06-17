(function(window){
	
	/* ---------------------------------- PROPERTIES ---------------------------------- */	
	var _this;
	var _listClick;	
	var _listContainer;
	
	var _listView;
	var _headerText;
	var _headTxtChange;
	
	var _slideIcon;
	var _arrowPrv;
	var _arrowTxt;
	
	var _screenHeight;
	var _screenWidth;
	var _slideView;
	var _leftPanel;
	var _mainContainer;
	var _swipe;
	/* ---------------------------------- CONSTRUCTOR ---------------------------------- */
	function layoutController(){
		_this = this;
		_listClick = $(".listInnerbar li");
		_listContainer = $(".container");		
		_listView = $(".listView");
		_headerText = $(".header h1");
		_slideIcon = $(".slideIcon");
		
		_arrowPrv = $(".arrowPrv");
		_arrowTxt = $(".arrowPrv span");
		_arrowPrv.css('display','none')
		
		_screenHeight = $(".fullscreen");
		_screenWidth = Math.round(_sectionWidth/2.5);		
		_screenHeight.css('height',_sectionHeight);
		
		_leftPanel = $(".leftPanal");
		_slideView = $$(".slideIcon");
		_mainContainer = $(".mainPanal");
		_swipe = $$(".mainPanal");
		
		_slideView.tap(slideOpenHandler);
		_swipe.swipeLeft(swipeLeftHandler);
		_swipe.swipeRight(swipeRightHandler);
			
		_listClick.click(listingHandler);
		_arrowPrv.live('click',prevHandler);	
	}
	
	function slideOpenHandler(){(_leftPanel.hasClass('activePage'))?openSlide():closeSlide()}	
	function swipeLeftHandler(){closeSlide();}
	function swipeRightHandler(){openSlide();}
	
	function openSlide(){		
		_leftPanel.css({'-webkit-transform':'translate3d(0px, 0px, 0px)'});
		_mainContainer.css({'-webkit-transform':'translate3d('+_screenWidth+'px, 0px, 0px)'});
		_leftPanel.removeClass('activePage');
	}
	function closeSlide(){
		_leftPanel.css({'-webkit-transform':'translate3d(0px, 0px, 0px)'});
		_mainContainer.css({'-webkit-transform':'translate3d(0px, 0px, 0px)'});	
		_leftPanel.addClass('activePage');	
	}
	function listingHandler(){						
		_listContainer.css('display','none');
		_listView.css('display','none');
		
		_slideIcon.css('display','none');
		_arrowPrv.css('display','block');
		
		_headTxtChange = $(this).attr('data-title');
				
		_headerText.html('');
		_arrowTxt.html('');
		_headerText.html(_headTxtChange);
		_arrowTxt.html(_headTxtChange)
		
		var _index = _listClick.index(this);						
		_listContainer.eq(_index).css('display','block');	
	}
	function prevHandler(){
		_listView.css('display','block');
		_listContainer.css('display','block');
		_headerText.html("Phonegap API's");
		_slideIcon.css('display','block');
		_arrowPrv.css('display','none');
		
	}
	/* ---------------------------------- END ---------------------------------- */
	window.layoutController = layoutController;
	
}(window));