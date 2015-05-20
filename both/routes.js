Router.configure({
  layoutTemplate: 'ApplicationLayout',
  autoRender: false,
  autoStart: false
});

Router.route('/', function() {
  this.render('billRaw');
});

Router.route('/history', function() {
  this.render('historyRaw');
});

Router.route('/overview', function() {
  this.render('overviewRaw');
});
