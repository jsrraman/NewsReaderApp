// Construct the news list page's UI elements during its initialization
// In Android $(document).on fires twice, so use $(document).one
$(document).one("pageinit", "#newsListPage", function () {
    // Construct the news header items
    constructNavigationHeader();

    // Show headlines news cards as default news
    showNewsCards(headlinesList, "Headlines");
});

// Construct the news detail page before it is displayed
$(document).on("pagebeforeshow", "#newsDetailPage", function (event, data) {

    // Get the passed data from the url parameters
    var parameters = $(this).data("url").split("?")[1];
    var parameterValueArray = parameters.split("&");

    var thumbnailUrl = parameterValueArray[0].replace("thumbnailUrl=", "");
    var detail = parameterValueArray[1].replace("detail=", "");

    // Decode the URI component to get the proper string
    detail = decodeURIComponent(detail);

    //string to put HTML in
    var htmlData = "";

    htmlData += '<div class="global-image"><img src="' + thumbnailUrl + '" />' + '</div>';
    htmlData += '<p>' +  detail + '</p>';

    // Add the html data to the content area
    $("#newsDetailContent").append(htmlData);
});


function constructNavigationHeader() {

    // Append the individual list items to the list which makes up as header
    for (var i = 0; i < navigationHeaderItems.length; i++) {
        $("<li/>")
            .text(navigationHeaderItems[i])
            .addClass("hscroll-list-li" + i)
            .appendTo($(".hscroll-list"));
    }

    // Show news cards based on the list item clicked
    $(".hscroll-list li").on("click", function(event){

        // Get the clicked element's class name
        var className = $(this).attr("class");

        // Apply the animation
        // Note add "." before classname for jQuery to recognize this element as class selector
        animateFlashElement("." + className);

        var headerItem = $(this).text();

        if (headerItem == "Headlines")
            showNewsCards(headlinesList, headerItem);
        else if(headerItem == "News")
            showNewsCards(newsList, headerItem);
        else if(headerItem == "Business")
            showNewsCards(businessList, headerItem);
        else if(headerItem == "Technology")
            showNewsCards(technologyList, headerItem);
        else if(headerItem == "Science")
            showNewsCards(headlinesList, headerItem);
        else if(headerItem == "Sports")
            showNewsCards(newsList, headerItem);
        else if(headerItem == "Entertainment")
            showNewsCards(businessList, headerItem);
    });
}

// function to create the cards
function showNewsCards(newsList, titleText) {

    // If newsList point it to the default news list
    if (!newsList) {
        newsList = headlinesList;
    }

    // Reflect the header title with the current selected news list
    // html() is equivalent to innerHTML but guaranteed to work across browsers
    $("#newsListHeader > h1").html(titleText);

    // declaring some variables
    var uiBlockA = $('#uiBlockA'), // cache the selector of the element, increases performance
        uiBlockB = $('#uiBlockB'),
        uiBlockC = $('#uiBlockC'),
        tag;

    // Clear the current grid
    uiBlockA.empty();
    uiBlockB.empty();
    uiBlockC.empty();

    // Populate the values from headlinesList
    $.each(newsList, function (index, newsItem) {

        // Construct the content that goes into each card
        var cardId = "card" + index;

        // Set the top level card display style as hidden deliberately
        tag = '<div class="card" id="' + cardId + '" style="display:none;">' +
        '<div class="card-image"><img src="' + newsItem.thumbnailUrl + '" />' + '</div>' +
        '<p>' +  newsItem.summary + '</p>' +
        '</div>';

        // The cards are in 33%, 33% and 33% layout, so we will need to create cards in the following order
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
            uiBlockC.append(tag)
        }

        // We have added the card to the corresponding UI block, now fade in it slowly
        //$("#" + cardId).show('slow'); // Another animation effect, commenting out for future reference
        $("#" + cardId).fadeIn('slow');

        setTransitionDetailsForCards(cardId, newsItem);
    });
}

function setTransitionDetailsForCards(id, newsItem) {

    var id = $("#" + id); // cache the selector of the element, increases performance

    id.off('click').on('click', function () {
        $.mobile.changePage('news-detail.html', {
            transition: "flip",
            data: {"thumbnailUrl": newsItem.thumbnailUrl, "detail": encodeURIComponent(newsItem.detail)}
        });
    });
}

// Animation related helper methods

// Change the background of the given div element
function animateChangeBkgd(divElem) {
    $(divElem).stop().css("background-color", "#FFFF9C")
        .animate({backgroundColor: "#FFFFFF"}, 100);
}

// Flash the given div element
function animateFlashElement(divElem) {
    $(divElem).fadeIn(100).fadeOut(100).fadeIn(100);
}