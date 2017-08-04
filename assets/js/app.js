var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "7eba6ec7fa744abdaa9fa6fb1287479e",
  'q': "crime",
  'page': 10
});

$.get(url, (data) => {

});

