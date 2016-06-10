import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';

export const Companies = new Mongo.Collection('Companies');

Companies.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Companies.deny({
  insert: function(){
    return false;
  },
  update: function(){
    return false;
  },
  remove: function(){
    return false;
  }
});

if (Meteor.isServer) {
  Meteor.publish('Companies', function CompaniesPublication() {
    return Companies.find({});
  });

  Meteor.methods({
    "addCompany": function (CompaniesJSON) {
      var userObject = {
        username: CompaniesJSON.email,
        email: CompaniesJSON.email,
        password: CompaniesJSON.password,
        profile: {
          firstName: 'Новый',
          lastName: 'Клиент',
          company: CompaniesJSON.companyName
        }
      };
      Accounts.createUser(userObject);
      CompaniesJSON.createdAt = new Date();
      CompaniesJSON.createdBy = Meteor.userId();
      var cCompanies = Companies.insert(CompaniesJSON);
      return cCompanies;
    }
  });
}
