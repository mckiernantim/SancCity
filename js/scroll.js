function typeEffect(element, speed) {
	var text = $(element).text();
	$(element).html('');
	
	var i = 0;
	var timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
}

$( document ).ready(function() {
  var speed = 25;
  $('h1').each(function(index, element) {
    var delay = $(element).text().length * speed + speed;
    typeEffect($(element), speed);
  });

  $('p').each(function(index, element) {
    var delay_p = 3;
    speed = 5;
    console.log(delay_p)
    typeEffect($(element), speed);

    setTimeout(function(){
      $('p').css('display', 'inline-block');
      typeEffect($(element), speed);
    }, delay_p);
  })
  
//   setTimeout(function(){
//     $('p').css('display', 'inline-block');
//     typeEffect($('p'), speed);
//   }, delay);
});