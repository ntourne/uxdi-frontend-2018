## 1. Plain JavaScript

Create app.js file just before close `</body>`

```
<script src="assets/js/app.js"></script>
```


Add function to open description.

```
<a href="#" onclick="onViewMoreDescription(event)" id="description-view-more-link">View more</a>
```

```
function onViewMoreDescription(e) {
    e.preventDefault();
    e.stopPropagation();

    document.getElementById('description-view-more-link').style.display = 'none';
    document.getElementById('description-view-more').style.display = 'block'; 
}
```


## 2. jQuery

Add jQuery before close `</body>`

```
<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
<script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb"
        crossorigin="anonymous"></script>
<script src="assets/js/holder.min.js"></script>
<script>
    $(function () {
        Holder.addTheme("thumb", { background: "#55595c", foreground: "#eceeef", text: "Thumbnail" });
    });
</script>
```


Add document ready function:

```
$(document).ready(function() {

    // Code here
})
```

Add function to open description:

```
    // Product - View more
    $('#description-view-more-link').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('#description-view-more-link').hide();
        $('#description-view-more').show();

    })
```

Add function to share on facebook:

```
    // Product - Share facebook
    $('#share-facebook').click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        var url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(window.location);
        window.open(url, 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    });
``` 

Add other functions:

```
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
```


Add on app.js

```
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
```



## 3. Web Analytics

Add Google Analytics script in `<head>`

```
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-108360961-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-108360961-1');
    </script>
```

Start tracking events.

```
    // Product - View more
    $('#description-view-more-link').click(function(e) {
        ...
        gtag('event', 'viewMore', {
            'event_category': 'List Products',
            'event_action': 'viewMore'
        });
        ...
    })

    // Product - Share facebook
    $('#share-facebook').click(function(e) {
        ...
        gtag('event', 'share', {
            'event_category': 'Product',
            'event_action': 'Share',
            'event_label': 'Facebook'
        });
        ...
    });


    // Product - Share twitter
    $('#share-twitter').click(function(e) {
        ...
        gtag('event', 'share', {
            'event_category': 'Product',
            'event_action': 'Share',
            'event_label': 'Twitter'
        });
        ...
    })


    // Product - Give as gift
    $('#give-as-gift').click(function(e) {
        ...
        gtag('event', 'giveAsGift', {
            'event_category': 'Product',
            'event_action': 'Give as Gift'
        });
        ...
    })
```

