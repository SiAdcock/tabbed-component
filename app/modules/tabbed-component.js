var APP = APP || {};

APP.tabbedComponent = (function() {
  'use strict';

  var sections = {
    travel: {
      url: 'http://content.guardianapis.com/search?format=json&section=travel&show-fields=trailText&page-size=5&api-key=9wur7sdh84azzazdt3ye54k4&callback=APP.tabbedComponent.render'
    },
    'uk-news': {
      url: 'http://content.guardianapis.com/search?format=json&section=uk-news&show-fields=trailText&page-size=5&api-key=9wur7sdh84azzazdt3ye54k4&callback=APP.tabbedComponent.render'
    },
    football: {
      url: 'http://content.guardianapis.com/search?format=json&section=football&show-fields=trailText&page-size=5&api-key=9wur7sdh84azzazdt3ye54k4&callback=APP.tabbedComponent.render'
    }
  };
  var loadData = function(url, sectionName) {
    var scriptNode = document.createElement('script');

    scriptNode.src = url;
    document.getElementsByTagName('head')[0].appendChild(scriptNode);
    scriptNode.parentNode.removeChild(scriptNode);
  };
  var bindEvents = function() {
    document.getElementById('travel').addEventListener('click', function() {
      var url = sections.travel.url;

      loadData(url, 'travel');
    });
    document.getElementById('uk-news').addEventListener('click', function() {
      var url = sections['uk-news'].url;

      loadData(url, 'uk-news');
    });
    document.getElementById('football').addEventListener('click', function() {
      var url = sections.football.url;

      loadData(url, 'football');
    });
  };

  return {
    init: function() {
      bindEvents();
    },
    render: function(body) {
      var results = body.response.results;
      var outputHTML = results.reduce(function(currentHTML, result) {
        var newHTML = currentHTML + '<br>' + result.webTitle;

        return newHTML;
      }, '');

      document.getElementById('tab-content').innerHTML = outputHTML;
    }
  };
}());
