
import $ from 'jquery';
import Slider from '../../static/script/Slider.js';	
import XMLData from '../../data/config.xml';
/**
 * 初始化Slider Bar
 * 
 * @memberof FormSliderCommpent
 */
function sliderInit(){
	var slider1 = new Slider();
	slider1.Init();
	slider1.SliderCallBack = function (c) {
		
	}

	console.log(slider1)
	///屏幕大小发生改变时触发
	$(window).resize(function () {
		slider1.HanderIn();
		slider1.HanderOut();
	});
}

/**
 * 选择国家和语言
 * 
 * @memberof FormSliderCommpent
 */
function selectOption(){
	//国旗国家隐藏出现
	$('.country_left').click(function (event) {
		if ($(".countryContainer").is(":hidden")) {
			$(".countryContainer").show()
		} else {
			$(".countryContainer").hide()
		}
		event.stopPropagation();
	});


	$(".country_right").click(function (event) {
		if ($(".countryContainer1").is(":hidden")) {
			$(".countryContainer1").show()
		} else {
			$(".countryContainer1").hide()
		}
		event.stopPropagation();
	});


	$("*").click(function (event) {

		if (!$(this).hasClass("countryContainer") && !$(this).hasClass("country_left")) {

			$(".countryContainer").hide();
		}
		if (!$(this).hasClass("countryContainer1") && !$(this).hasClass("country_right")) {

			$(".countryContainer1").hide();
		}
	});
};

console.log(XMLData);
function countryList(){
	var _countryList=[];
	XMLData.configList.items[0].item.forEach(function(element) {
		if(element.$.visited==='true'){
			_countryList.push(element);
		}
	}, this);
	console.log(_countryList);
	return _countryList;
}

function languageList(){
	var _languageList=[];
	XMLData.configList.languages[0].language.forEach(function(element) {
		if(element.$.state==='1'){
			_languageList.push(element);
		}
	}, this);
	return _languageList;
}

export {selectOption,sliderInit,countryList,languageList}
    

