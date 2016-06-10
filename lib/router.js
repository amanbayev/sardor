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

// client related routes

var clientRoutes = FlowRouter.group({
  prefix: '/client',
  name: 'client'
});

clientRoutes.route('/profile', {
  action: function(){
    BlazeLayout.render('mainTemplate', {content: 'profile'});
  }
});

clientRoutes.route('/catalog', {
  action: function(){
    BlazeLayout.render('mainTemplate', {content: 'catalog'});
  }
});

clientRoutes.route('/advertisement', {
  action: function(){
    BlazeLayout.render('mainTemplate', {content: 'advertisement'});
  }
});

clientRoutes.route('/notifications', {
  action: function(){
    BlazeLayout.render('mainTemplate', {content: 'notifications'});
  }
});
