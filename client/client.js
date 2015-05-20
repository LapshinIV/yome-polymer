polymerReady = new ReactiveVar(false);

$(window).on('polymer-ready', function() {
  polymerReady.set(true);
});

Meteor.startup(function() {

  Tracker.autorun(function() {
    $("body").append("<div fit layout vertical iron-router></div>");
    if (polymerReady.get()) {
      Router.insert({el: "[iron-router]"});
      Router.start();
    }
  });
});
