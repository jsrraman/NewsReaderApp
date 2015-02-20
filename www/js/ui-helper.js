// pageinit event for first page
// triggers only once
// In Android $(document).on fires twice, so use $(document).one
$(document).one("pageinit", "#newsListPage", function () {

    //// Set up string for adding <li/>
    //var li = "";
    //
    //// Container for $li to be added
    //$.each(headlinesList, function (index, newsItem) {
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

    constructNavigationHeader();
    //showNewsCards(newsList);
});

//use pagebeforeshow
//DONT USE PAGEINIT!
//the reason is you want this to happen every single time
//pageinit will happen only once
$(document).on("pagebeforeshow", "#details-page", function () {

    ////get from data - you put this here when the "a" wa clicked in the previous page
    //var info = $(this).data("info");
    ////string to put HTML in
    //var info_view = "";
    ////use for..in to iterate through object
    //for (var key in info) {
    //    //Im using grid layout here.
    //    //use any kind of layout you want.
    //    //key is the key of the property in the object
    //    //if obj = {name: 'k'}
    //    //key = name, value = k
    //    info_view += '<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar field" style="font-weight : bold; text-align: left;">' + key + '</div></div><div class="ui-block-b"><div class="ui-bar value" style="width : 75%">' + info[key] + '</div></div></div>';
    //}
    ////add this to html
    //$(this).find("[data-role=content]").html(info_view);
});


function constructNavigationHeader() {

    // Append the individual list items to the list which makes up as header
    for (var i = 0; i < navigationHeaderItems.length; i++) {
        $("<li/>")
            .text(navigationHeaderItems[i])
            .appendTo($(".hscroll-list"));
    }

    // Show news cards based on the list item clicked
    $(".hscroll-list li").on("click", function(event){

        var headerItem = $(this).text();

        if (headerItem == "Headlines")
            showNewsCards(headlinesList);
        else if(headerItem == "News")
            showNewsCards(newsList);
    });
}

// function to create the cards
function showNewsCards(newsList) {

    // If newsList point it to the default news list
    if (!newsList) {
        newsList = headlinesList;
    }

    // declaring some variables
    var uiBlockA = $('#uiBlockA'), // cache the selector of the element, increases performance
        uiBlockB = $('#uiBlockB'), // cache the selector of the element, increases performance
        uiBlockC = $('#uiBlockC'), // cache the selector of the element, increases performance
        i,
        j = 1,
        tag;

    // Clear the current grid
    uiBlockA.empty();
    uiBlockB.empty();
    uiBlockC.empty();

    // Populate the values from headlinesList
    $.each(newsList, function (index, newsItem) {
        // Construct the tag that goes into each card
        tag = '<div class="card" id="card' + index + '">' +
        '<div class="card-image"><img src="' + newsItem.thumbnailUrl + '" />' + '</div>' +
        '<p>' +  newsItem.summary + '</p>' +
        '</div>';

        // You will need to create cards in a special order.
        // The first 1/3 of the cards are placed in block A.
        // The second 1/3 of the cards are placed in block B.
        // The last 1/3 of the cards are placed in block C.
        //
        // This will make sure that the cards will fill white spots
        // when the screen is changing orientation and/or size.
        //
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