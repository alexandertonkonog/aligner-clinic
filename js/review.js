const reviewPageInit = () => {
    /*stars on them review page*/
    reviewStarsInit();
}

let STAR_IS_SELECTED = false;

const reviewStarsInit = () => {
    $('.checkbox__label').hover(function() {
        if (!STAR_IS_SELECTED) {
            const value = $(this).children('.star-checkbox').val();
            $('.star-checkbox__label').removeClass('star-checkbox__label_active');
            $('.star-checkbox__label').each(function(index) {
                if(index + 1 <= value) {
                    $(this).addClass('star-checkbox__label_active');
                }
            })
        }
    }, function () {
        if (!STAR_IS_SELECTED) {
            $('.star-checkbox__label').removeClass('star-checkbox__label_active');
        }
    })
    $('.checkbox__label').click(function() {
        STAR_IS_SELECTED = true;
        const value = $(this).children('.star-checkbox').val();
        $('.star-checkbox__label').removeClass('star-checkbox__label_active');
        $('.star-checkbox__label').each(function(index) {
            if(index + 1 <= value) {
                $(this).addClass('star-checkbox__label_active');
            }
        })
    })
}


$(document).ready(reviewPageInit)