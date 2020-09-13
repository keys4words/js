$(function(){
    var searchField = $('#query');
    var icon = $('#search-btn');

    //focus event handler
    $(searchField).on('focus', function(){
        $(this).animate({
            width:'100%'
        }, 400);
        $(icon).animate({
            right: '10px'
        }, 400);
    });

    //blur event handler
    $(searchField).on('blur', function(){
        if(searchField.val() == ''){
            $(searchField).animate({
                width:'45%'
            }, 400, function(){});
            $(icon).animate({
                right:'360px'
            }, 400, function(){})
        }
    });

    $('#search-form').submit(function (e) {
        e.preventDefault();

    });
});

function search() {
    $('.results').html('');
    $('.buttons').html('');

    q = $('#query').val();
    var key = 'AIzaSyBOPLV3xVyeL6crpV9acLEyRSs7McPeAxU';
    $.get(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&key="+key+"&type=video&q=" + q + "&order=viewCount",
            function(data){
                var nextPageToken = data.nextPageToken;
                var prevPageToken = data.prevPageToken;
                console.log(data);
            }
    );

}