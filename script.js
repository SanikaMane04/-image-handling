$(document).ready(function() {
    $('.item').fadeIn(1000);

    $('.filter').on('click', function() {
        var filterValue = $(this).data('filter');

        if (filterValue === 'all') {
            $('.item').fadeIn(1000);
        } else {
            $('.item').each(function() {
                if ($(this).hasClass(filterValue)) {
                    $(this).fadeIn(1000);
                } else {
                    $(this).fadeOut(1000);
                }
            });
        }
    });
});
