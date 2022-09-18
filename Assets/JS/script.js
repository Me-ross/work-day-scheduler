//today's day and time
var today = moment();
$('#currentDay').text(today.format("dddd, MMMM Do YYYY"));

var hourLine =  document.querySelector('.time-block');
var currentHour = today.format('H');
console.log(currentHour);

var hr = [];
checkHour();

function checkHour(){
    $('.time-block').each(function(){
        hr = ($(this).attr('id').slice(-2));
        console.log(hr);
        console.log(currentHour);
        if(hr < currentHour){
            $(this).addClass('past');
        } else if ( hr === currentHour){
            $(this).addClass('present');
        }else if ( hr > currentHour) {
            $(this).addClass('future');
        }
    })
}

