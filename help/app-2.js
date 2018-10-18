$(document).ready(function() {

    // Product - View more
    $('#description-view-more-link').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('#description-view-more-link').hide();
        $('#description-view-more').show();
    });


    // Product - Share facebook
    $('#share-facebook').click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        var url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(window.location);
        window.open(url, 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    });
    
})