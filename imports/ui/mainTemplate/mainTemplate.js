import {Meteor} from 'meteor/meteor';

import './mainTemplate.html';

Template.mainTemplate.helpers({
  getUserName: function(){
    if (Meteor.user()) {
      return Meteor.user().profile.firstName+ ' '+Meteor.user().profile.lastName;
    } else {
      return 'Не выполнен вход';
    }
  }
});

Template.mainTemplate.events({
  "click #logoutTopMenuBtn": function(e, t){
     e.preventDefault();
     Meteor.logout();
     FlowRouter.go('/login');
  }
});
