import {Meteor} from 'meteor/meteor';
import './login.html';

Template.login.events({
  "submit #loginForm": function(e, t){
     e.preventDefault();
     var login = t.find('#loginEmailField').value;
     var pw = t.find('#loginPasswordField').value;
     Meteor.loginWithPassword(login,pw, function(err){
      if (err) {
        toastr.error(err.reason);
      } else {
        toastr.success('Добро пожаловать, '+Meteor.user().profile.lastName+' '+Meteor.user().profile.firstName+'!');
      }
     });
  }
});
