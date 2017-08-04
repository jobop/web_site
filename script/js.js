$(function(){
	//--
	setTimeout(function(){
		$('.pageLoad').fadeOut(1500);
		},500)
	//--
	if($('.indexPart1').length>0){
		$('.indexPart1').find('.list2').slick({
				dots: false,
				infinite: true,
				autoplay:true,
				arrows: false,
				speed: 500,
				slidesToShow: 1,
				slidesToScroll: 1,
				fade:true
			});
		}
	//--
	if($('.indexPart6').length>0){
		$('.indexPart6').find('.list').slick({
				dots: false,
				infinite: true,
				autoplay:true,
				arrows: true,
				speed: 500,
				slidesToShow: 7,
				slidesToScroll: 1,
				centerMode: true,
                centerPadding: '0px',
				focusOnSelect: true,
			});
		}
	//--选项卡
	$('.tabContentDiv').find('.tabContent:first').show();
	$('.tab').each(function(i){
		var _this=$(this);
		var tabContentDiv=$('.tabContentDiv').eq(i).find('.tabContent');
		$(this).find('li').each(function(ii){
			$(this).click(
			function(){
				_this.find('li').removeClass('on');
				$(this).addClass('on');
				tabContentDiv.hide();
				tabContentDiv.eq(ii).show();
				}	
				)
			})
		})
	//--
	$('.listHover').find('li').hover(
	  function(){
		  $(this).addClass('on');
		  },
	  function(){
		  $(this).removeClass('on');
		  }
	)
	//--返回顶部
	$('.topA').click(function(){
		$('body,html').stop(true,true).animate({scrollTop:0}, 300);
		})
	//--js下拉选择框
	$('.select').each(function(){
		var _this=$(this);
		_this.find('select').change(function(){
			_this.find('span').html($(this).find("option:selected").text());
			})
		})
	//--
	$('.navA').toggle(
	  function(){
		  $('.nav').show();
		  },
	  function(){
		  $('.nav').hide();
		  }
	)
	//
	})