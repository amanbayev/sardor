import { Meteor } from 'meteor/meteor';

import '../imports/api/Companies.js';

Meteor.startup(() => {
  // code to run on server at startup
  if (Meteor.users.find().count() === 0) {
    var options = {
      username: 'admin',
      password: 'qweasd',
      email: 'alisher1990@mail.ru',
      profile: {
        firstName: 'Admin',
        lastName: 'Super',
        company: 'Shopogol'
      }
    };
    var cUser = Accounts.createUser(options);
    Roles.addUsersToRoles(cUser, 'admin');
  }

  Meteor.publish("allUsers", function(){
    return Meteor.users.find();
  });
});
