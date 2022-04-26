$(document).ready(function() {

    // Generating custom select
    $.fn.niceSelect = function(settings) {
        let thisSelect = $(this);

        $(this).css({
            'display':'none',
        });

        let cssClass = settings.cssClass ? settings.cssClass : 'style-default';
        let customSelectedText = settings.selectedText;
        let customIcon = settings.customIcon ? settings.customIcon : '<i class="cs-arrow-down"></i>';

        let thisOptions = thisSelect.find('option');

        let niceSelect = $('<div class="custom-nice-select '+cssClass+'"><div class="selected closed"><span></span> '+customIcon+'</div><div class="options-list"></div></div>');

        thisOptions.each(function() {
            let optionText = $(this).html();
            let optionValue = $(this).attr('value');

            if ($(this).is(':selected')) {
                let selectedText = customSelectedText ? customSelectedText : $(this).html();
                niceSelect.find('.selected span').html(selectedText);
                niceSelect.find('.options-list').append('<div data-value="'+optionValue+'" class="option option-selected">'+optionText+'</div>');
            } else {
                niceSelect.find('.options-list').append('<div data-value="'+optionValue+'" class="option">'+optionText+'</div>');
            }
        })

        niceSelect.insertAfter(thisSelect);
    }

    // Triggering native select action
    $(document).on('click','.custom-nice-select .option', function() {
        let thisValue = $(this).data('value');
        let thisNativeSelect = $(this).parent().parent().prev('select');
        thisNativeSelect.val(thisValue).trigger('change');
    })

    // Toggling the dropdown on select click
    $(document).on('click', '.custom-nice-select .selected', function() {
        let thisOptions = $(this).next('.options-list');
        if($(this).hasClass('closed')) {
            thisOptions.slideDown('fast');
            $(this).toggleClass('closed');
        } else {
            thisOptions.slideUp('fast');
            $(this).toggleClass('closed');
        }
    })

    // Closing the dropdown on outside click
    $(document).on('click', function (e) {
        if ($(e.target).closest('.custom-nice-select .selected').length === 0) {
            $('.custom-nice-select .selected').addClass('closed');
            let customSelects = $('.custom-nice-select .selected').next('.options-list');
            customSelects.slideUp('fast');
        }
    });

})
