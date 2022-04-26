$(document).ready(function() {
  
    // The following will initialise nice select on all native select fields with class .orderby  
  
    $('select.orderby').each(function() {
        $(this).niceSelect({
            cssClass: 'custom-nice-select-style', // Class name for custom styling
            selectedText: 'Sort By', // If anything used, it will be fixed label, otherwise updating with selected option text
            customIcon: '<i class="fal fa-sort-alpha-down"></i>', // Fontawesome icon, custom image, whatever, default is an arrow
        });
    });
  
})
