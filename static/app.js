/**
 * Updates the time shown
 */
function updateTime() {
    var time = moment().format('h:mm a');
    $('#time').text(time);

    var date = moment().format('ddd, MMM Do');
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



function loadNews() {

    $('#news-wrapper').html('')
    // Load news
    $.get("http://www.npr.org/rss/rss.php?id=1001", function (data) {
        $(data).find("item").each(function () { // or "item" or whatever suits your feed
            var el = $(this);
            var newsItemWrapper = $('<div class="news-item-wrapper"></div>').text(el.find("title").text())
            $('#news-wrapper').append(newsItemWrapper);
            //console.log("------------------------");
            //console.log("title      : " + el.find("title").text());
            //console.log("author     : " + el.find("author").text());
            //console.log("description: " + el.find("description").text());
        });
    });
}

$(document).ready(function() {
    setInterval(updateTime, 1000);
    updateBackground()
    setInterval(updateBackground, 5 * 60 * 1000);
    $('#time-wrapper').click(function(){

        // Toggle which view is being shown
        $('#time-wrapper').hide(0);
        $('#news-wrapper').show(0);

        loadNews();
    });

    $('#news-wrapper').click(function(){
        // Toggle which view is being shown
        $('#time-wrapper').show(0);
        $('#news-wrapper').hide(0);
    });
});