angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ActivityCtrl', function($scope) {})

.controller('SleepCtrl', function($scope, Posts, MyInfo, MyData, $ionicModal, $ionicPopup) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Posts.all();
  $scope.remove = function(chat) {
    Posts.remove(chat);
  };



 $scope.showPopup = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<input type="text" ng-model="data.wifi">',
     title: 'Post',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Post</b>',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.data.wifi) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       },
     ]
   });
   myPopup.then(function(post) {
     var newPost = { id: MyInfo.id(), name: MyInfo.name(),
                       face: MyInfo.face(), post: post, date: new Date()}
     Posts.add(newPost);

     $ionicModal.fromTemplateUrl('sleepInputModel.html', {
       scope: $scope
     }).then(function(modal) {
       $scope.modal = modal;
       modal.show();
       MyData.newStart(new Date());
       watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                       accelerometerError,
                                                     { frequency: 50 });
     });
   });
   $scope.motionScore = "No data"
   function accelerometerSuccess(acceleration) {
     var score =acceleration.x + acceleration.y + acceleration.z;
     $scope.motionScore = score;
     var threshold = 100000;
     if (score > threshold) {
       stopSleep();
     }
    }

    function accelerometerError(e) {
      $scope.motionScore = "error" + e;
        alert('onError!');
    }

  };

  function stopSleep() {
    MyData.newEnd(new Date());
    $scope.modal.hide();
    navigator.accelerometer.clearWatch(watchID);
  }

  $scope.createPost = stopSleep;
})

.controller('StatisticsCtrl', function($scope) {})

.controller('ProfileCtrl', function($scope, User) {

  $scope.profile = User.all();

})

.controller('LeaderCtrl', function($scope, Leaders) {
    $scope.leaders = Leaders.all();
    $scope.currentIndex = 0;

  })


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, in, stead of every page change.
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
