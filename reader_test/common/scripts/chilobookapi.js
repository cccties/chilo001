/**********************************************************************************************
 * CHiLOBook用 Javascript API (chiloAPI : String, chiloData : JSON )
 *
 * chiloAPI = 'downloadbook'	ePub file download
 * chiloAPI = 'setmyfavorite';	お気に入り登録
 * chiloAPI = "testlog"			テスト回答記録
 * chiloAPI = "showTestResults"	テスト採点
 **********************************************************************************************/
 
var localhostApiDomain = "http://localhost:8080/";

function chiloWebFunc(url){
	/**********************************************************************************************
	 * CHiLO API パラメータ chiloWeb urlStrにurlを設定
	 **********************************************************************************************/
	var localhostApiDomain = "http://localhost:8080/";
	var chiloAPI = "chiloWeb";
	var chiloData = {
		urlStr: url
	};
	callTestLogAPI(localhostApiDomain,chiloAPI,chiloData);
}
/**********************************************************************************************
 * CHiLOBook API Jquery ajax使用
 **********************************************************************************************/
function callCHiLOjsonp(chiloAPI, chiloData) {
	$.ajax({
              url:localhostApiDomain + chiloAPI,
              type:'GET',
              data:JSON.stringify(chiloData),
              dataType: 'jsonp',
              jsonp : "callbackChange",
              timeout:10000
            });
}//end testLog
/**********************************************************************************************
 * CHiLOBook API jsonp callback 使用
 **********************************************************************************************/
function callbackChange(msg){
	alert("callbackChange: "+ msg);
}

/**********************************************************************************************
 * CHiLOBook API location href 使用
 **********************************************************************************************/
function callCHiLOhref(chiloAPI, chiloData) {
	var urlPath = localhostApiDomain + chiloAPI + "?" + JSON.stringify(chiloData);
	window.location.href = urlPath;
}//end callCHiLO
/**********************************************************************************************
 * changeView API Jquery ajax使用
 **********************************************************************************************/
function callTestLogAPI(localhostApiDomain,chiloAPI,chiloData) {
	jQuery.ajax({
              url:localhostApiDomain + chiloAPI,
              type:'GET',
              data:JSON.stringify(chiloData),
              dataType: 'jsonp',
              jsonp : "callbackChange",
              timeout:10000
            });
}//end testLog

/**********************************************************************************************
 * changeView API location href 使用
 **********************************************************************************************/
function callTestLogAPI2(localhostApiDomain,chiloAPI,chiloData) {
	var urlPath = localhostApiDomain + chiloAPI + "?" + JSON.stringify(chiloData);
	window.location.href = urlPath;
}//end testLog
