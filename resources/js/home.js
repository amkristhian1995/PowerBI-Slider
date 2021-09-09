var ItemsSeccion01 =[]
$(function() {
	ItemsSeccion01 = [
		{ ID:1,Target:"No",Url: { Url: '<iframe width="[width]" height="[height]" src="https://app.powerbi.com/reportEmbed?reportId=5250eb53-3991-44b5-935d-c789f6558578&autoAuth=true&ctid=17259a6e-d175-41db-af77-1ba9eb89ac5e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWNlbnRyYWwtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>' } },
		{ ID:2,Target:"No",Url: { Url: '<iframe width="[width]" height="[height]" src="https://app.powerbi.com/reportEmbed?reportId=e80a0ad8-2c58-4c16-a5c5-4d765accb098&autoAuth=true&ctid=17259a6e-d175-41db-af77-1ba9eb89ac5e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWNlbnRyYWwtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>' } },
		{ ID:3,Target:"No",Url: { Url: '<iframe width="[width]" height="[height]" src="https://app.powerbi.com/reportEmbed?reportId=ba861137-f79a-4012-bcf6-116354e7267a&groupId=cd0d3127-bcc4-460e-9268-de776dff8b76&autoAuth=true&ctid=17259a6e-d175-41db-af77-1ba9eb89ac5e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWNlbnRyYWwtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>' } },
	];
	constructSection01(ItemsSeccion01);
})
function constructSection01(l) {
	l.forEach(function(e,i){
		$(".seccion-banner").append(
    		'<a>'+
	    		'<div data-id="'+e.ID+'">'+
					e.Url.Url.replace('[width]',window.innerWidth).replace('[height]',window.innerHeight)+
				'</div>'+
			'</a>'
    	);
	});
	$('.seccion-banner').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 10000,
		centerMode:true,
		dots: true,
		focusOnSelect: true,
		infinite: true,
		//rtl: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	$('.seccion-banner').on('beforeChange', function(event, { slideCount: count }, currentSlide, nextSlide) {
		var actual = (nextSlide - 1 >= 0 ? nextSlide - 1 : count - 1);
		var slide = $('[data-slick-index="'+actual+'"]').children('div');
		var ID = parseInt(slide.attr('data-id'));
		var e = ItemsSeccion01.find(x => x.ID == 1)
		slide.html(e.Url.Url.replace('[width]',window.innerWidth).replace('[height]',window.innerHeight));
	});
	AsignarTamanio('.section-01',window.innerHeight,false,0);
}

function AsignarTamanio(e,h,t,m) {
	$(e).height(h+m);
	if(t){
		var head_height=$(e).children('.head').height();
		var head_padding=2*parseInt($(e).children('.head').css('padding-top').replace("px",""));
		$(e).children('.content').css({
			'height':h+m-head_height-head_padding+'px',
			'max-height':h+m-head_height-head_padding+'px',
			'min-height':h+m-head_height-head_padding+'px',
		});
	}
}