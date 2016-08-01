jQuery(document).ready(function() {
    jQuery("a#artetopo").click(function() {
        var params = {class:".mf-active"};
        var href = jQuery('#artetopo').attr('href');
        window.location.href = href+'?classe=artesanato'; //causes the browser to refresh and load the requested url

    });
});
jQuery(document).ready(function() {
    jQuery("a#culitopo").click(function() {
        var params = {class:".mf-active"};
        var href = jQuery('#culitopo').attr('href');
        window.location.href = href+'?classe=culinaria'; //causes the browser to refresh and load the requested url

    });
});