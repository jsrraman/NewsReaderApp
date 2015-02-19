var newsList = [{
    "id": 0,
    "thumbnailUrl": "http://farm6.staticflickr.com/5323/9902848784_cbd10ba3ca_c.jpg",
    "summary": "The truth about NASA’s moon exploration",
    "detail": "About 46 years ago, NASA detected two lifeforms on the Moon. These lifeforms were able to use sophisticated technology, as NASA could easily verify from their audio and video transmissions that we intercepted. I’ve actually seen the video, and the beings seemed humanoid to me, but quite frankly, I think it’s hard to say for sure because of the bulky protective shielding they were wearing at all times"
}, {
    "id": 1,
    "title": "The truth about NASA’s moon exploration",
    "thumbnailUrl": "http://farm6.staticflickr.com/5323/9902848784_cbd10ba3ca_c.jpg",
    "summary": "The truth about NASA’s moon exploration",
    "detail": "About 46 years ago, NASA detected two lifeforms on the Moon. These lifeforms were able to use sophisticated technology, as NASA could easily verify from their audio and video transmissions that we intercepted. I’ve actually seen the video, and the beings seemed humanoid to me, but quite frankly, I think it’s hard to say for sure because of the bulky protective shielding they were wearing at all times"
},{
    "id": 2,
    "title": "The truth about NASA’s moon exploration",
    "thumbnailUrl": "http://farm6.staticflickr.com/5323/9902848784_cbd10ba3ca_c.jpg",
    "summary": "The truth about NASA’s moon exploration",
    "detail": "About 46 years ago, NASA detected two lifeforms on the Moon. These lifeforms were able to use sophisticated technology, as NASA could easily verify from their audio and video transmissions that we intercepted. I’ve actually seen the video, and the beings seemed humanoid to me, but quite frankly, I think it’s hard to say for sure because of the bulky protective shielding they were wearing at all times"
}];

// pageinit event for first page
// triggers only once
// In Android $(document).on fires twice, so use $(document).one
$(document).on("pageinit", "#newsListPage", function () {

    //// Set up string for adding <li/>
    //var li = "";
    //
    //// Container for $li to be added
    //$.each(newsList, function (index, newsItem) {
    //    //add the <li> to "li" variable
    //    //note the use of += in the variable
    //    //meaning I'm adding to the existing data. not replacing it.
    //    //store index value in array as id of the <a> tag
    //    //li += '<li><a href="#" id="' + index + '" class="news-item">' + newsItem.summary + '</a></li>';
    //    li += '<li>' + newsItem.summary + '</li>';
    //});
    //
    //// Append list to ul
    //$("#news-list-view").append(li).promise().done(function () {
    //    // Wait for append to finish - thats why you use a promise()
    //    // done() will run after append is done
    //    // add the click event for the redirection to happen to #details-page
    //    $(this).on("click", ".info-go", function (e) {
    //        e.preventDefault();
    //
    //        //store the information in the next page's data
    //        $("#details-page").data("info", info[this.id]);
    //        //change the page # to second page.
    //        //Now the URL in the address bar will read index.html#details-page
    //        //where #details-page is the "id" of the second page
    //        //we're gonna redirect to that now using changePage() method
    //        $.mobile.changePage("#details-page");
    //    });
    //
    //    //refresh list to enhance its styling.
    //    $(this).listview("refresh");
    //});

    createCards();
});

//use pagebeforeshow
//DONT USE PAGEINIT!
//the reason is you want this to happen every single time
//pageinit will happen only once
$(document).on("pagebeforeshow", "#details-page", function () {

    //get from data - you put this here when the "a" wa clicked in the previous page
    var info = $(this).data("info");
    //string to put HTML in
    var info_view = "";
    //use for..in to iterate through object
    for (var key in info) {
        //Im using grid layout here.
        //use any kind of layout you want.
        //key is the key of the property in the object
        //if obj = {name: 'k'}
        //key = name, value = k
        info_view += '<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar field" style="font-weight : bold; text-align: left;">' + key + '</div></div><div class="ui-block-b"><div class="ui-bar value" style="width : 75%">' + info[key] + '</div></div></div>';
    }
    //add this to html
    $(this).find("[data-role=content]").html(info_view);
});


// function to create the cards
function createCards() {

    // declaring some variables
    var uiBlockA = $('#uiBlockA'), // cache the selector of the element, increases performance
        uiBlockB = $('#uiBlockB'), // cache the selector of the element, increases performance
        uiBlockC = $('#uiBlockC'), // cache the selector of the element, increases performance
        i,
        j = 1,
        tag;

    //// the cards, in this example in an array
    //    imagename = ["Image1", "Image2", "Image3"],
    //    imagesource = ["http://farm6.staticflickr.com/5323/9902848784_cbd10ba3ca_c.jpg",
    //                    "http://farm6.staticflickr.com/5323/9902848784_cbd10ba3ca_c.jpg",
    //                    "http://farm6.staticflickr.com/5323/9902848784_cbd10ba3ca_c.jpg"],
    //    title = ["Title", "Title", "Title"],
    //    text = ["The truth about NASA’s moon exploration", "Lorem ipsum part 2...", "Lorem ipsum part 3..."];
    //

    // Clear the current grid
    uiBlockA.empty();
    uiBlockB.empty();
    uiBlockC.empty();

    //// the loop to get the values from the arrays
    //for (i = 0; i < 3; i = i + 1) {
    //    tag = '<div class="card" id="card' + i + '">' +
    //    '<div class="card-image"><img alt="' + imagename[i] + '" src="' + imagesource[i] + '" />' + '</div>' +
    //    '<p>' +  text[i] + '</p>' +
    //    '</div>';
    //
    //    /*	You will need to create cards in a special order.
    //     The first 1/3 of the cards are placed in block A.
    //     The second 1/3 of the cards are placed in block B.
    //     The last 1/3 of the cards are placed in block C.
    //
    //     This will make sure that the cards will fill white spots
    //     when the screen is changing orientation and/or size.
    //
    //     When you create new block for every card you would get
    //     an interface that is lined like a table.
    //     */
    //    //if (i < (result.rows.length / 3)) {
    //    //    exampleBlockA.append(tag);
    //    //} else if (i < ((result.rows.length / 3) * 2)) {
    //    //    exampleBlockB.append(tag);
    //    //} else if (i <= ((result.rows.length / 3) * 3)) {
    //    //    exampleBlockC.append(tag);
    //    //}
    //
    //    uiBlockA.append(tag);
    //
    //    // add a press effect to the card
    //    pressEffectCard('card' + i);
    //}

    // Populate the values from newsList
    $.each(newsList, function (index, newsItem) {
        // Construct the tag that goes into each card
        tag = '<div class="card" id="card' + index + '">' +
        '<div class="card-image"><img src="' + newsItem.thumbnailUrl + '" />' + '</div>' +
        '<p>' +  newsItem.summary + '</p>' +
        '</div>';

        uiBlockA.append(tag);
        //uiBlockB.append(tag);
        //uiBlockC.append(tag);

        if (index % 3 == 0) {
            uiBlockA.append(tag);
        } else if (index % 3 == 1) {
            uiBlockB.append(tag);
        } else if (index % 3 == 2) {
            uiBlockC.append(tag);
        }
    });
}

// press effect card ui
function pressEffectCard(x) {
    var id = $("#" + x); // cache the selector of the element, increases performance
    id.off('touchstart').on('touchstart', function () {
        id.addClass("holoPressEffectDiv");
    });
    id.off('touchend').on('touchend', function () {
        id.removeClass("holoPressEffectDiv");
    });
    id.off('touchmove').on('touchmove', function () {
        id.removeClass("holoPressEffectDiv"); // to remove the press effect when there is a scroll detected in stead of a tap
    });
}