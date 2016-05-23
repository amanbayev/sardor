FlowRouter.route('/', {
  action: function(){
    BlazeLayout.render('mainTemplate', {content: 'blankPage'});
  }
});

FlowRouter.route('/login', {
  action: function(){
    BlazeLayout.render('mainTemplate', {content: 'login'});
  }
});

FlowRouter.route('/register', {
  action: function(){
    BlazeLayout.render('mainTemplate', {content: 'register'});
  }
});

var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin'
});
