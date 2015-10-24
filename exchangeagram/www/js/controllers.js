angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  $http.get(
    'https://hackingedu.chegg.com/hacking-edu/catalog/priced/byEan/9780805371468',
    {
      headers: {
      'authorization' : 'Basic UUNOVUhVekJUQ2huR0tOcktlQXhWa3BFc29kQXVLZWw6UmUydklRR1JQQzky bUtLdw=='
      }
  })
})

  // $http({
  //   method: 'GET',
  //   url: 'https://hackingedu.chegg.com/hacking-edu/catalog/priced/byEan/9780805371468',
  //   headers: {
  //     'authorization': 'Basic UUNOVUhVekJUQ2huR0tOcktlQXhWa3BFc29kQXVLZWw6UmUydklRR1JQQzky bUtLdw=='
  //   }
  // }).then(function successCallback(response) {
  //   console.log(response);
  //   var price = response.body.prices[2].price;
  //   console.log(price);
  //   return price;
  // });


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
