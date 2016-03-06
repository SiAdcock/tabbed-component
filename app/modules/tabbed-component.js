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
  var template = Hogan.compile('<ul>{{#results}}<li><h2><a href="{{webUrl}}">{{webTitle}}</a></h2><span>{{fields.trailText}}</span></li>{{/results}}</ul>');
  var showLoadingSpinner = function() {
    document.getElementById('tab-content').innerHTML = 'Loading content';
  };
  var loadData = function(sectionName) {
    var scriptNode = document.createElement('script');

    showLoadingSpinner();
    scriptNode.src = sections[sectionName].url;
    document.getElementsByTagName('head')[0].appendChild(scriptNode);
    scriptNode.parentNode.removeChild(scriptNode);
  };
  var bindEvents = function() {
    document.getElementById('travel').addEventListener('click', function() {
      loadData('travel');
    });
    document.getElementById('uk-news').addEventListener('click', function() {
      loadData('uk-news');
    });
    document.getElementById('football').addEventListener('click', function() {
      loadData('football');
    });
  };

  return {
    init: function() {
      bindEvents();
      loadData('travel');
    },
    render: function(body) {
      var results = body.response.results;
      var outputHTML = template.render({ results: results });

      outputHTML = '<ul>' + outputHTML + '</ul>';
      document.getElementById('tab-content').innerHTML = outputHTML;
    }
  };
}());
