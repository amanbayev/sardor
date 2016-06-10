import {Meteor} from 'meteor/meteor';
import './register.html';

import { Companies } from '../../../api/Companies.js';

Template.register.onRendered(function(){
  Meteor.subscribe("Companies");
  console.log('Subscribed to Companies');
});

Template.register.events({
  "click #registerBtn": function(e, t){
    e.preventDefault();
    var newCompanyJSON = {};
    newCompanyJSON.companyName = t.find('#companyName').value;
    newCompanyJSON.tradeMark = t.find('#tradeMark').value;
    newCompanyJSON.opf = t.$('#selectFormRegister').find('option:selected').attr('id');
    newCompanyJSON.address = t.find('#addressRegister').value;
    newCompanyJSON.phone = t.find('#phoneRegister').value;
    newCompanyJSON.email = t.find('#emailRegister').value;
    newCompanyJSON.password = t.find('#registerPassword').value;
    // console.log(newCompanyJSON);
    Meteor.call("addCompany", newCompanyJSON, function(error, result){
      if(error){
        console.log("error", error);
        toastr.error('Ошибка регистрации', error.reason);
      }
      if(result){
         toastr.success('Регистрация прошла успешно!', 'Данные для входа в учетную запись высланы на указанную почту.');
      }
    });
  }
});
