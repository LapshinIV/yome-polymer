Template.overviewRaw.onCreated(function () {
  var allBills = Bills.find().fetch();
  var friendsOwe = [];

  _.each( allBills, function(bill) {
    if (bill.payer.userId === Meteor.userId()) {
      // this bill I paid
      _.each( bill.shares, function(share) {
        if ( share.userId !== Meteor.userId() ) {
          // not me
          var friendOwe = _.findWhere( friendsOwe, {userId: share.userId} );
          if (!friendOwe) {
            friendOwe = {
              userId: share.userId,
              owe: 0
            };
            friendsOwe.push(friendOwe);
          }
          friendOwe.owe += share.sum;
        }
      } );
    } else {
      var myShare = _.findWhere( bill.shares, { userId: Meteor.userId() } );
      if (myShare) {
        // this bill someone else paid, I chipped in
        var friendOwe = _.findWhere( friendsOwe, {userId: bill.payer.userId} );
        if (!friendOwe) {
          friendOwe = {
            userId: bill.payer.userId,
            owe: 0
          };
          friendsOwe.push(friendOwe);
        }
        friendOwe.owe -= myShare.sum;
      } else {
        // this bill has nothing to do with me
      }
    }

    this.friendsOwe = friendsOwe;
  });
});

Template.overviewRaw.helpers({
  friends: function() {
    return Meteor.users.find({_id: {$ne: Meteor.userId()}});
  },
  owe: function() {
    var owe = _.findWhere( friendsOwe, { userId: this._id } );
    return owe ? owe.owe : 0;
  }
});
