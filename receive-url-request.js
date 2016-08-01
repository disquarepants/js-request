jQuery( document ).ready(function() {
    var $_GET = {};
    document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
        function decode(s) {
            return decodeURIComponent(s.split("+").join(" "));
        }

        $_GET[decode(arguments[1])] = decode(arguments[2]);
    });
    
    if($_GET["classe"] == "artesanato"){
        // console.log(jQuery('#arte').html());
        console.log($_GET['classe']);
        //e.preventDefault();
            showArtesanato();
            jQuery('.mf-filtro a').removeClass('mf-active');
            jQuery("#arte").addClass('mf-active');
            // jQuery('html, body').animate({
            //     scrollTop: jQuery(".mf-cursos").offset().top
            // }, 1500);
    }
    if($_GET["classe"] == "culinaria"){
        // jQuery('a#arte').removeClass('mf-active');
        // jQuery('a#culi').addClass('mf-active');
        console.log($_GET['classe']);
        //e.preventDefault();
            showCulinaria();
            jQuery('.mf-filtro a').removeClass('mf-active');
            jQuery('#culi').addClass('mf-active');
            // jQuery('html, body').animate({
            //     scrollTop: jQuery(".mf-cursos").offset().top
            // }, 1500);
    }
});