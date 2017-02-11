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
  }]
  return {
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
});
