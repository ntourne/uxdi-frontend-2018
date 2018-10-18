$(document).ready(function() {

    // Product - View more
    $('#description-view-more-link').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('#description-view-more-link').hide();
        $('#description-view-more').show();

        gtag('event', 'viewMore', {
            'event_category': 'List Products',
            'event_action': 'viewMore'
        });

    })

    // Product - Share facebook
    $('#share-facebook').click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        gtag('event', 'share', {
            'event_category': 'Product',
            'event_action': 'Share',
            'event_label': 'Facebook'
        });

        var url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(window.location);
        window.open(url, 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    });
    

    // Product - Share twitter
    $('#share-twitter').click(function(e) {

        e.preventDefault();
        e.stopPropagation();

        gtag('event', 'share', {
            'event_category': 'Product',
            'event_action': 'Share',
            'event_label': 'Twitter'
        });

        var url = 'https://twitter.com/intent/tweet?text=' + encodeURI('Fake Coupon Site') + '&url=' + encodeURI(window.location);
        window.open(url, 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;

    })


    // Product - Give as gift
    $('#give-as-gift').click(function(e) {

        e.preventDefault();
        e.stopPropagation();

        gtag('event', 'giveAsGift', {
            'event_category': 'Product',
            'event_action': 'Give as Gift'
        });

        alert('This feature is still not available. Thanks');

        return false;
    })

});