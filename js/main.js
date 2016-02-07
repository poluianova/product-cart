;(function($){
	$(function(){


		$('.ba-slider').slick({
			dots: true,
			infinite: false

		});

		var qtyField = $('.ba-product__qty-field'),
		qtyUp = $('.ba-product__qty-up'),
		qtyDown = $('.ba-product__qty-down');

		qtyUp.on('click', function(event){
			event.preventDefault();
			var oldVal = qtyField.val();

			qtyField.val(++oldVal);
			// ++ means +1
		});

		qtyDown.on('click', function(event){
			event.preventDefault();
			var oldVal = qtyField.val();
			if(oldVal>1){
				qtyField.val(--oldVal);
			// -- means -1
		}
	});

var prodColor = $('[name="product_color"]');

		prodColor.on('change', function(){
			console.log($(this).val());
			if($(this).val()=='black'){
				$('.headphones-black').fadeIn('slow');
				$('.headphones-grey').css('display', 'none');
			}
			else {
				if($(this).val()=='grey'){
					$('.headphones-black').css('display', 'none');
					$('.headphones-grey').fadeIn('slow');
				}
			}
		});

	});
})(jQuery);
