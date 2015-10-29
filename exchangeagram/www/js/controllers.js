angular.module('exchange.controllers', [])

.controller('DashCtrl', function($scope, $ionicPopup, Books) {

  $scope.books = Books.get(0);
console.log($scope.books);
  $scope.showPopup = function() {
    $scope.data = {};

    var sellPopup = $ionicPopup.show({
      template: '',
      title: "Describe your book's condition",
      scope: $scope,
      buttons: [
      { 
        text: 'Cancel',
        onTap: function(e) {
        }
      },
      {
        text: 'Submit',
        type: 'button-positive',
        onTap: function(e) {
          // todo function
        }
      }]
    })
  }

})


.controller('TermsCtrl', function($scope) {})

.controller('ClasslistCtrl', function($scope) {})

.controller('ClassCtrl', function($scope) {
  
})

.controller('AccountCtrl', function($scope) {
  
});