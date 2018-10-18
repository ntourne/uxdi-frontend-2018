function onViewMoreDescription(e) {

    e.preventDefault();
    e.stopPropagation();

    document.getElementById('description-view-more-link').style.display = 'none';
    document.getElementById('description-view-more').style.display = 'block';
    
}