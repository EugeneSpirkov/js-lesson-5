'use strict'
$(function () {

	$('.menu').on('click', 'li:not(.menu-item-active)', function() {
		$(this).addClass('menu-item-active').siblings().removeClass('menu-item-active');
		$('.tab-content').eq($(this).index()).addClass('active').siblings().removeClass('active');
	})
	
});