angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('MyInfo', function() {
  var info = {
    id: 8,
    name: "Max Ma",
    face: 'img/ben.png'
  }
  return {
    id: function() {
      return info.id;
    },
    name: function() {
      return info.name;
    },
    face: function() {
      return info.face;
    }
  }
})



.factory('MyData', function() {
  var sleeps = [{
    start: new Date(2017, 1, 1, 1, 1),
    end: new Date(2017, 1, 2, 1, 1)
  },{
    start: new Date(2017, 1, 1, 1, 1),
    end: new Date(2017, 1, 2, 1, 1)
  },{
    start: new Date(2017, 1, 2, 23, 30),
    end: new Date(2017, 1, 3, 6, 50)
  },{
    start: new Date(2017, 1, 3, 22, 30),
    end: new Date(2017, 1, 4, 7, 20)
  },{
    start: new Date(2017, 1, 5, 22, 50),
    end: new Date(2017, 1, 6, 6, 45)
  }]
  return {
    dataCal: function (){
      var sleepDatas = []
      sleepDatas.length = 4;
      var stTotal = 0;
      var count = 0;
      var timeDiff;
      for (sleep in sleeps){
        timeDiff = end - start;
        stTotal += timeDiff*1000/60;
        count ++;
      }
      stTotal /= (60*count);
      sleepDatas [0] = stTotal;
      var hourTotal = 0;
      var minTotal = 0;
      for (sleep in sleeps){
        var hour = getHours (start);
        if (hour < 24) {hour += 24;}
        var min = getMinutes (start);
        hourTotal += hour;
        minTotal += min;
      }
      sleepDatas [1] = Math.floor (hourTotal/count);
      minTotal += (hourTotal/count - sleepDatas [1])*60;
      hourModifier = Math.floor (minTotal/60);
      sleepDatas [1] += hourModifier;
      minTotal %= 60;
      sleepDatas [2] = minTotal;
      if (sleepDatas [1] >= 24){
        sleepDatas [1] %= 24;
        sleepDatas [3] = "a.m.";
      }
      else{
        sleepDatas [3] = "p.m.";
      }
      return sleepDatas;
    },

    all: function() {
      return sleeps;
    },
    newStart: function(date) {
      sleeps.unshift({start: date, end: null})
    },
    newEnd: function(date) {
      lastObj = sleeps.shift()
      lastObj.end = date
      sleeps.unshift(lastObj)
      console.log(sleeps)
    }
  }
})

.factory('Posts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var posts = [{
    id: 0,
    name: 'Ben Sparrow',
    post: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    post: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    post: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    post: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    post: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return posts;
    },
    add: function(post) {
      posts.push(post)
    },
    remove: function(chat) {
      posts.splice(posts.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === parseInt(chatId)) {
          return posts[i];
        }
      }
      return null;
    }
  };
})


.factory('Leaders', function() {
  var leaders = [{
    id : 0,
    name: 'Max Ma',
    current : 10,
    Longest : 233,
    face: 'img/max.png'
  }, {
    id : 1,
    name: 'Mike Chen',
    current : 1,
    longest : 29,
    face: 'img/mike.png'
  }, {
    id : 2,
    name: 'Toffer Huang',
    current : 0,
    longest : 199,
    face: 'img/toffer.png'
  }, {
    id : 3,
    name: 'Yue Yin',
    current : 8,
    longest : 10,
    face: 'img/yue.png'
  }];

  return {
    all: function() {
      return leaders;
    },
    get: function(leaderID) {
      for (var i = 0; i < leaders.length; i++) {
        if (chats[i].id === parseInt(leaderID)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Leaders', function() {
  var leaders = [{
    id : 0,
    name: 'Max Ma',
    current : 10,
    Longest : 233,
    face: 'img/max.png'
  }, {
    id : 1,
    name: 'Mike Chen',
    current : 1,
    longest : 29,
    face: 'img/mike.png'
  }, {
    id : 2,
    name: 'Toffer Huang',
    current : 0,
    longest : 199,
    face: 'img/toffer.png'
  }, {
    id : 3,
    name: 'Yue Yin',
    current : 8,
    longest : 10,
    face: 'img/yue.png'
  }];

  return {
    // all: function() {
    //   return leaders;
    // },
    // items.sort(function (a, b) {
    //   return a.value - b.value;
    // }



    get: function(leaderID) {
      for (var i = 0; i < leaders.length; i++) {
        if (leaders[i].id === parseInt(leaderID)) {
          return leaders[i];
        }
      }
      return null;
    },

    all: function(){

      length = leaders.length;

      var idAndDays = {};

      for (var i = 0; i< length; i++){

        if (!(leaders[i].current in idAndDays)){


          idAndDays[leaders[i].current]=[leaders[i].id];
        }
        else{
          idAndDays[leaders[i].current].push(leaders[i].id);
        }
      }


      var keys = [];
      var justIds = [];
      for (var key in idAndDays){
        keys.push(parseInt(key));
      }
      keys.sort(function(a,b){return b-a});
      var ks = [];
      for (var a=0; a<keys.length;a++){

        justIds.push(idAndDays[keys[a].toString()]);
      }

      var TopLeaders = [];
      for (var index = 0;index<10; index++){
        for (var x = 0; x < leaders.length; x++) {
          if (leaders[x].id === parseInt(justIds[index])) {
            TopLeaders.push(leaders[x]);
          }
        }
    }

    return TopLeaders;
  }};
})

.factory('User', function() {
  var user = [{
    id : 0,
    name: 'Mike Chen',
    current : 1,
    Longest : 29,
    face: 'img/mike.png',
    achivements: ["First Timer", "Sleep, Sleep, and Sleep", "No Coffee Needed"]}
  ];

  return {
    all: function() {
      return user;
    },

    get: function(userID) {
      for (var i = 0; i < user.length; i++) {
        if (user[i].id === parseInt(userID)) {
          return user[i];
        }
      }
      return null;
      }

  };
});
