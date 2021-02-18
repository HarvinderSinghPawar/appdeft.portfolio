$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000'); 
        }
        else if (value == "additional_filter") {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').toggle('3000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('1000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

// Header Navbar
$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > 86){
      $("#banner").addClass("shrink");
    }
    else
    {
        $("#banner").removeClass("shrink");
    }
});