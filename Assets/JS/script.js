//today's day and time
var today = moment();
$('#currentDay').text(today.format("dddd, MMMM Do YYYY"));

retrievetodos();

function retrievetodos (){
//load all todos from storage
$('#hr-08 .description').val(localStorage.getItem('hr-08'));
$('#hr-09 .description').val(localStorage.getItem('hr-09'));
$('#hr-10 .description').val(localStorage.getItem('hr-10'));
$('#hr-11 .description').val(localStorage.getItem('hr-11'));
$('#hr-12 .description').val(localStorage.getItem('hr-12'));
$('#hr-13 .description').val(localStorage.getItem('hr-13'));
$('#hr-14 .description').val(localStorage.getItem('hr-14'));
$('#hr-15 .description').val(localStorage.getItem('hr-15'));
$('#hr-16 .description').val(localStorage.getItem('hr-16'));
$('#hr-17 .description').val(localStorage.getItem('hr-17'));
}

//save hours events to local storage
$('.saveInput').on('click', function () {
    console.log('after click');
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




