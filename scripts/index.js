

$(document).ready(function(){
    $('.menu a').click(function(){
        if($(this).hasClass('on') == true){
            $(this).removeClass('on');
            $('nav').stop().animate({'left' : 0});
            $('.container').stop().animate({'padding-left' : '258px'})
        }else{
            $(this).addClass('on');
            $('nav').stop().animate({'left' : '-258px'});
            $('.container').stop().animate({'padding-left' : 0})
        }
    });
	// 체크박스 체크시 텍스트 활성화
	$("#lastNoneData").click(function(){
		if(this.checked){
			$("#monthChk").attr("disabled", false);
		}else{
            $("#monthChk").attr("disabled", true);
        }
	});

    $('.mnTit>li>a').click(function(){
        if($(this).hasClass('on') == true){
            $(this).removeClass('on');
            $(this).next('ul').stop().slideUp();
        }else{
            $('.mnTit>li>a').removeClass('on')
            $('nav .subMn').slideUp();
            $(this).addClass('on');
            $(this).next('ul').stop().slideDown();
        }
    });
        // datepicker         
        $("#datePickerSt").datepicker({
            monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            dateFormat: "yy-mm-dd",
            changeMonth: true,
		    changeYear: true,
            lang:'kr',
            maxDate:0,
            //종료일 이후는 선택불가
            onClose: function( selectedDate ) {
                $("#datePickerEn").datepicker( "option", "minDate", selectedDate );
            }
        });

        
        $("#datePickerEn").datepicker({
            monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            dateFormat: "yy-mm-dd",
            changeMonth: true,
		    changeYear: true,
            lang:'kr',
            maxDate:0,
            //시작일 이전은 선택불가
            onClose: function( selectedDate ) {
                $("#datePickerSt").datepicker( "option", "maxDate", selectedDate );
            }       
        });
        
  
    function menuOnFun(){
        if($('.container').hasClass('allCarList')){
            $('nav .mnTit:first-child > li > a').addClass('on');
            $('nav .mnTit:first-child > li >  ul li:first-child > a').addClass('on')
            $('nav .mnTit:first-child > li >  ul').show();
        }
    }
    menuOnFun();
    function locationFun(){
        var navTit = $('.mnTit > li >a.on').text();
        var nowOnTxt = $('nav .subMn a.on i').text();
        $('.container .cntTit .parent').text(navTit);
        $('.container .cntTit>h3').text(nowOnTxt);
        $('.container .cntTit .location>li.now').text(nowOnTxt);
    }
    locationFun()
    


    //table Body Function
    function tableBodyHeight(){
        var windowHT = $(window).height();
        var hedaerHT = $('header').outerHeight();
        var contentTitleHT = $('.container .cntTit').outerHeight();
        var searchBoxHT = $('.searchForm').outerHeight();
        var topTxtHT =$('.tableForm .topTxt').outerHeight();
        var theadHT = $('.cellHeader').outerHeight();
        var pageHT = $('.pageNum').outerHeight();
        var footerHT =$('footer').outerHeight();
        var cellbodyHeight = windowHT - hedaerHT - contentTitleHT -searchBoxHT - topTxtHT - theadHT - pageHT -footerHT
        $('.hasTopTHtable .cellBody').css('height' , cellbodyHeight);

        var bodyTableDataHT = $('.cellBody>table').height();
        if(cellbodyHeight < bodyTableDataHT){
            $('.cellHeader').css('padding-right' , '17px');
        }else{
            $('.cellHeader').css('padding-right' , 0);
        }

    }
    tableBodyHeight();
    $(window).resize(function(){
        tableBodyHeight();
    });
    function cellColgroup(){
        var cellSize = $('.cellHeader colgroup')[0].outerHTML;
        $('.hasTopTHtable .cellBody table').append(cellSize)
    }
    cellColgroup();
});
