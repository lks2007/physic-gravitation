var i;

$(".astre").click(function() {
    try {
        $(i).css('border', 'none');
    } catch (error) {
        
    }
    $(this).css('border', '4px solid #0d0a22');

    if($(this).attr('aria-label') === "0"){
        $('form').css({'background':'linear-gradient(#6975f8, #5bd397)'});
        $(".calcul").css({'background':'#35478a'});
    }else{
        $('form').css({'background':'linear-gradient(#dfdfdf, #6975f8)'});
        $(".calcul").css({'background':'#363e55'})
    }

    i = $(this);
})