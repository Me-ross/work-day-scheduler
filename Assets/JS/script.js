//today's day and time
var today = moment();
$('#currentDay').text(today.format("dddd, MMMM Do YYYY"));

// save hours events to local storage
$('.saveInput').on('click', function () {
    console.log('after click');
    // var time = $(this).siblings('.hour').val();
    var time = $(this).parent().attr('id');
    console.log(time);
    var value = $(this).prev('.description').val();
    console.log(value);
    
    localStorage.setItem(time, value);
})

var currentHour = today.format('HH');

var hr;
checkHour();

//Update hour color differentiation
function checkHour(){
    $('.time-block').each(function(){
        hr = ($(this).attr('id').slice(-2));
        // console.log("hr = " + hr);
        // console.log("currenthr = " + currentHour);
        if(hr < currentHour){
            $(this).addClass('past');
        } else if ( hr === currentHour){
            $(this).addClass('present');
        }else if ( hr > currentHour) {
            $(this).addClass('future');
        }
    })
}



