var curQuote = '';
var curAuthor = '';

$("#tweetOut").on('click', function() {
  window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(curQuote + curAuthor));
              });


$("#getQuote").on('click',function(){
        $.ajaxSetup ({cache:false});
        $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=", function(data) {
          curQuote = data[0].content;
          curAuthor = data[0].title;
          $(".quote").html("\"" + data[0].content + "\"");
          $(".name").html("Said by " + data[0].title);
  });
});