


function updateTime() {
    var time = moment().format('h:mm a');
    $('#time').text(time);

    var date = moment().format('dddd, MMMM Do');
    $('#date').text(date);
}

$(document).ready(function(){
    setInterval(updateTime, 1);
});
