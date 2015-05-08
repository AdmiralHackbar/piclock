/**
 * Updates the time shown
 */
function updateTime() {
    var time = moment().format('h:mm a');
    $('#time').text(time);

    var date = moment().format('dddd, MMMM Do');
    $('#date').text(date);
}

/**
 * Updates the background image
 */
function updateBackground() {
    // Add a random variable to bust the cache
    var url = 'http://wwc.instacam.com/instacamimg/UTAUS/UTAUS_l.jpg?rnd=' + (new Date().getTime());
    $('body').css('background-image', 'url(' + url + ')' );
    console.log("Updating background");
}

$(document).ready(function() {
    setInterval(updateTime, 1000);
    updateBackground()
    setInterval(updateBackground, 5 * 60 * 1000);
});