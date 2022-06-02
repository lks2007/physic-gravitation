var i;

$(".astre").click(function() {
    try {
        $(i).css('border', 'none');
    } catch (error) {
        
    }
    $(this).css('border', '4px solid #0d0a22');

    if($(this).attr('aria-label') === "0"){
        $('.form').css({'background':'linear-gradient(#6975f8, #5bd397)'});
        $(".calcul").css({'background':'#35478a'});
    }else{
        $('.form').css({'background':'linear-gradient(#dfdfdf, #6975f8)'});
        $(".calcul").css({'background':'#363e55'})
    }

    i = $(this);
})

$(".calcul").click(function() {
    $astre = i.attr('aria-label');
    console.log($astre)
    var $astre_name;

    if($astre === "0"){
        $astre_img = "./assets/terre.webp";
        $astre_name = "Terre";
        $g = 9.81; 
    }else{
        $astre_img = "./assets/lune.png";
        $astre_name = "Lune";
        $g = 1.6;
    }

    $masse = $(".object").val();

    $(".form").children().remove();
    $('.form').css({'background':'#f1f1f1'});
    $(".form").append(`
    <div class="onloader">
        <div class="loader"></div>
    </div>`);

    setTimeout(function(){
        $(".onloader").remove();
        $(".form").append(`
            <h1>Poids de l'objet</h1>
            <h4 class="left">Le poids de l'objet sur la `+$astre_name+` est:</h4>
            <img src="`+$astre_img+`" class="astre-big astre">
            <h4 class="left bottom">P = `+$masse+` x `+$g+` = `+Math.round($masse*$g)+`</h4>
            <h4 class="left top">P = `+Math.round($masse*$g)+` N</h4>
            <i class="fa-solid right fa-arrow-right-long"></i>
        `);
        $('.right').click(function() {
            $(".form").remove()
            $("body").append(`
            <div class="wrap">
                <h1>Représentation</h1>
                <img src="./assets/human.svg" class="human">
                <img src="`+$astre_img+`" class="astre-verybig astre">
                <div class="echelle">
                    <h4 class="left">100 N =</h4>
                    <div class="rotate"></div>
                </div>
            </div>

            <div class="fleche"></div>
            `);
            $(".fleche").height(Math.round($masse*$g)/5)
            $(`<style>.fleche:after{top: `+($(".fleche").height()-35)+`px;}</style>`).appendTo("head")
            $(`<style>.fleche:before{top: `+($(".fleche").height()-15)+`px;}</style>`).appendTo("head")
            $(".rotate").height(100/5)
            $(`<style>.rotate:after{top: `+($(".rotate").height()-35)+`px;}</style>`).appendTo("head")
            $(`<style>.rotate:before{top: `+($(".rotate").height()-15)+`px;}</style>`).appendTo("head")
        })
    }, 05
    00)
})