$(document).ready(function() {
  
    $('select.orderby').each(function() {
        $(this).niceSelect({
            cssClass: 'custom-nice-select-style', // Class name without dot
            selectedText: 'Sort By', // If anything used, it will be fixed and label won't change, otherwise updating with selected option text
            customIcon: '<i class="fal fa-sort-alpha-down"></i>', // Fontawesome icon, custom image, whatever, default is an arrow
        });
    });
  
})
