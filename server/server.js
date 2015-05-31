Meteor.startup(function() {
  Inject.rawModHtml('addUnresolved', function(html) {
    return html.replace('<body>', '<body unresolved class="fullbleed layout vertical">');
  });
});
