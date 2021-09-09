var page=location.href.toLocaleLowerCase().split("/").pop().split(".")[0];
var ticking=false;
var header__height=0;
var window__scrolltop=0;
var left__menu__position=0;
/****************************************************************
				MASTER PAGE
****************************************************************/
var array_left_menu=[
	{ Title:"Inicio",Url:{Url:"Home.html"} },
	{ Title:"Covid",Url:{Url:"Covid.html"} },
	{ Title:"Noticias",Url:{Url:"Noticia.html"} },
	{ Title:"PAITON",Url:{Url:"PAITON.html"} },
	{ Title:"Credinka TV",Url:{Url:"CredinkaTv.html"} },
	{ Title:"Normativas",Url:{Url:"DocumentoNormativo.html"} },
	{ Title:"Directorio Telefónico",Url:{Url:"DirectorioTelefonico.html"} },
	{ Title:"Capacitación",Url:{Url:"Capacitacion.html"} },
	{ Title:"Convocatorias Interna",Url:{Url:"ConvocatoriaInterna.html"} },
	{ Title:"Convocatorias Externas",Url:{Url:"ConvocatoriaExterna.html"} },
];
$(window).resize(function() {
	calculate__height__left__menu();
});
$(function(){
	_construct__header();
	_construct__footer();
	_construct__left__menu(array_left_menu);
	$(window).on("scroll", function(e) {
		console.log("scroll");
		if (!ticking) {
			window.requestAnimationFrame(function() {
				calculate__height__left__menu();
				ticking = false;
			});
		}
		ticking = true;
	});
})
function calculate__height__left__menu() {
	header__height=$("header").height();
	window__scrolltop=$(window).scrollTop();
	var h0=$(window).height();
	var h1=ReplaceNullOrUndefined($("#s4-ribbonrow").height(),0);
	if(header__height>=window__scrolltop)
		left__menu__position=header__height+h1-window__scrolltop;
	else
		left__menu__position=h1;
	$(".left__menu").css({
		'height':(h0+h1-left__menu__position)+'px',
		'max-height':(h0+h1-left__menu__position)+'px',
		'min-height':(h0+h1-left__menu__position)+'px',
		'top':left__menu__position+'px',
	});
};
function LeftMenuClick() {
	$(".left__menu").toggleClass("active");
}
function _construct__left__menu(l) {
	calculate__height__left__menu();
	$('.left__menu > ul').html('');
	l.forEach(function(e,i){
    	$('.left__menu > ul').append(
    		'<li class="px-4 py-2 '+(e.Url.Url.toLocaleLowerCase().split(".")[0]==page?'active':'')+'">'+
        		'<a class="d-block p-2" href="'+e.Url.Url+'"><i class="fa fa-caret-right mr-2"></i>'+e.Title+'</a>'+
        	'</li>'
    	);
    })
}
function _construct__header() {
	// FECHA ACTUAL
	var toDay=new Date();
	var nameDay=DaySpanish(moment(toDay).format("dddd"));
	var day=moment(toDay).format("DD");
	var nameMonth=MonthSpanish(moment(toDay).format("MM"));
	var year=moment(toDay).format("YYYY");
	var today=nameDay+" "+day+" de "+nameMonth+" del "+year;
	$("#master-fecha-actual").html(today);
	// USUARIO LOGEADO
	$("header").html(
		'<div class="contenedor-header py-4">'+
			'<div class="container-fluid">'+
				'<div class="row px-4">'+
					'<div class="col-10 col-md-2 mb-2" id="master-logo">'+
						'<a href="Home.html"><img src="../BBL_RESOURCES/logo.png"></a>'+
					'</div>'+
					'<div class="col-2 col-md-1 mb-2" id="master-menu-icono">'+
						'<a id="master-menu-icon" onclick="LeftMenuClick()"><i class="fa fa-bars"></i></a>'+
					'</div>'+
					'<div class="col-12 col-md-3 mb-2" id="master-buscador">'+
						'<div class="input-group">'+
							'<div class="input-group-prepend">'+
								'<span class="input-group-text"><i class="fa fa-search"></i></span>'+
							'</div>'+
							'<input type="text" class="form-control" placeholder="Búsqueda" />'+
						'</div>'+
					'</div>'+
					'<div class="col-6 col-md-2 mb-2 justify-content-start" id="master-fecha-actual">'+today+'</div>'+
					'<div class="col-6 col-md-4 mb-2 d-flex align-items-center justify-content-end" id="master-usuario"></div>'+
				'</div>'+
			'</div>'+
		'</div>'
	);
	$("#master-usuario").html(
		'<div class="text-right">'+
			'<div><b>Juan Perez Soto</b></div>'+
			'<div>Asesor Financiero</div>'+
		'</div>'
	);
}
function _construct__footer() {
	$("footer").html(
		'<div class="container-fluid px-4">'+
			'<div class="row">'+
				'<div class="col-12 text-center">Todos los derechos reservados 2020</div>'+
			'</div>'+
		'</div>'
	);
}
function DaySpanish(d) {
	switch(d) {
		case "Monday":
			return "Lunes";
		case "Tuesday":
			return "Martes";
		case "Wednesday":
			return "Miercoles";
		case "Thursday":
			return "Jueves";
		case "Friday":
			return "Viernes";
		case "Saturday":
			return "Sábado";
		case "Sunday":
			return "Domingo";
		default:
			return "";
	}
}
function MonthSpanish(m) {
	switch(m) {
		case "01":
			return "Enero";
		case "02":
			return "Febrero";
		case "03":
			return "Marzo";
		case "04":
			return "Abril";
		case "05":
			return "Mayo";
		case "06":
			return "Junio";
		case "07":
			return "Julio";
		case "08":
			return "Agosto";
		case "09":
			return "Septiempre";
		case "10":
			return "Octubre";
		case "11":
			return "Noviembre";
		case "12":
			return "Diciembre";
		default:
			return "";
	}
}
function ReplaceNullOrUndefined(v1,v2) {
	if(v1==null||v1==undefined)
		return v2
	else
		return v1
}
function FormatDate_DDMMYYY(d) {
	if(d!=""&&d!=null&&d!=undefined) {
		d=d.split("T")[0];
		d=d.split("-");
		return d[2]+"/"+d[1]+"/"+d[0];
	} else {
		return "-";
	}
}