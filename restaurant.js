$(window).on("scroll touchmove", function() 
{
	if ($(document).scrollTop() >= $("#home").position().top && $(document).scrollTop() < $("#order").position().top  ) 
	{
		$('body').css('background-image', 'url(https://images.unsplash.com/photo-1560706834-afe1ba5d6737?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80)')
    };
	if ($(document).scrollTop() >= $("#order").position().top && $(document).scrollTop() < $("#menu").position().top)
	{
		$('body').css('background-image', 'url(https://images.unsplash.com/photo-1583496930194-2fcf05f913e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1150&q=80)')
    };
   if ($(document).scrollTop() >= $("#menu").position().top && $(document).scrollTop() < $("#booking").position().top ) 
   {
		$('body').css('background-image', 'url(https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)')
   };
   if ($(document).scrollTop() >= $("#booking").position().top) 
   {
		$('body').css('background-image', 'url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80)')
   };
  
});
window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.top = "0";
          } else {
            document.getElementById("navbar").style.top = "-50px";
          }
        }