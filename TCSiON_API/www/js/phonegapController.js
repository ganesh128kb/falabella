(function(window){
	
	/* ---------------------------------- PROPERTIES ---------------------------------- */
	var _this;
	var _batteryLevel;
	var _batteryLow;
	var _batteryCritical;
	
	var _batteryTxt;
	/* ---------------------------------- CONSTRUCTOR ---------------------------------- */
	function phonegapController(){
		_this = this;
		_batteryLevel = $(".batteryLevel");
		_batteryLow = $(".batteryLow");
		_batteryCritical = $(".batteryCritical");
		
		_batteryTxt = $(".batteryStatus p");	
		_batteryLevel.click(onBatteryLevel);
		_batteryLow.click(onBatteryLow);
		_batteryCritical.click(onBatteryCritical);	
	}	
	function onBatteryLevel(){
		window.addEventListener("batterystatus", onBatteryStatus, false);		
		function onBatteryStatus(info){
			_batteryTxt.html('');
			_batteryTxt.html(info.level+"%");
		}
	}
	
	function onBatteryLow(){
		window.addEventListener("batterylow", onBatteryStatus, false);		
		function onBatteryStatus(info){
			_batteryTxt.html('');
			_batteryTxt.html(info.level+"%");
		}
	}
	
	function onBatteryCritical(){
		window.addEventListener("batterycritical", onBatteryStatus, false);		
		function onBatteryStatus(info){
			_batteryTxt.html('');
			_batteryTxt.html(info.level+"%");
		}
	}
	/* ---------------------------------- END ---------------------------------- */
	window.phonegapController = phonegapController;
	
}(window));