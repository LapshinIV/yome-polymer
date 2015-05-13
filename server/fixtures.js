Meteor.startup(function() {
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      username: 'dmitry',
      email: 'dmitry@yome.com',
      password: 'yome2016',
      profile: {
        name: 'Dmitry K'
      }
    });

    Accounts.createUser({
      username: 'alex',
      email: 'alex@yome.com',
      password: 'yome2016',
      profile: {
        name: 'Alex E'
      }
    });

    Accounts.createUser({
      username: 'ivan',
      email: 'ivan@yome.com',
      password: 'yome2016',
      profile: {
        name: 'Ivan L'
      }
    });

    Accounts.createUser({
      username: 'natalia',
      email: 'natalia@yome.com',
      password: 'yome2016',
      profile: {
        name: 'Natalia S'
      }
    });
  }
});
