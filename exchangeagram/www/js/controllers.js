angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  var rest = require('restler');

  var query = "SELECT * FROM userDB";

rest.post('https://api-us.clusterpoint.com/v4/' + config.account_id + '/' + config.database + '/_query', {
  username: config.username,
  password: config.password,
  data: JSON.stringify(records)
}).on('complete', function(data) {
  console.log(data);
});

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
