import { Meteor } from 'meteor/meteor';
import '../imports/collections/items.js';



Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  sendVerificationLink() {
    let userId = Meteor.userId();
    if ( userId ) {
        console.log(userId);
      return Accounts.sendVerificationEmail( userId );
    }
  }
});