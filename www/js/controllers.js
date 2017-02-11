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
  firebase.database().ref('global_post/').once('value').then(function(posts) {
    console.log("get")
    var array = Object.keys(posts.val()).map(function (key) { return posts.val()[key]; });
    console.log(array);
    $scope.chats = array;
  });



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
     var localTime = new Date()
     var newPost = { id: MyInfo.id(), name: MyInfo.name(),
                       face: MyInfo.face(), post: post, date: localTime.toLocaleTimeString()
}
     Posts.add(newPost);
     justSlept = true;
     setTimeout(function(){justSlept = false}, 3000);
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
     var score = Math.abs(acceleration.z);
     $scope.motionScore = "zzZ";
     var threshold = 15;
     if (score > threshold) {
       if (!justSlept){
       stopSleep();
       }
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

.controller('StatisticsCtrl', function($scope, MyData, Leaders) {
  data = MyData.dataCal();
  $scope.dataSHour = data[0];
  $scope.dataHour = data [1];
  $scope.dataMin = data [2];
  $scope.pmoram = data [3];
  leaders = Leaders.all ();
  $scope.sleepStreak = leaders [1].longest;

})

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
