$(document).ready(function() {
    $('.question').click(function() {
        $(this).find('.answer').slideToggle();
        $('.answer').not($(this).find('.answer')).slideUp(); 
    });

    $('.category-btn').click(function() {
        var category = $(this).data('category');
        $('.category').hide(); 
        $('#' + category).show(); 
    });
});
