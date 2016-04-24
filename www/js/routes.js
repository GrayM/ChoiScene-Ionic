angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.choice'
      2) Using $state.go programatically:
        $state.go('tabsController.choice');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab5/business
      /page1/tab7/business
      /page1/tab6/business
  */
  .state('tabsController.choice', {
    url: '/business',
    views: {
      'tab5': {
        templateUrl: 'templates/choice.html',
        controller: 'choiceCtrl'
      },
      'tab7': {
        templateUrl: 'templates/choice.html',
        controller: 'choiceCtrl'
      },
      'tab6': {
        templateUrl: 'templates/choice.html',
        controller: 'choiceCtrl'
      }
    }
  })

  .state('choice2', {
    url: '/woodrows',
    templateUrl: 'templates/choice2.html',
    controller: 'choice2Ctrl'
  })

  .state('tabsController.login', {
    url: '/Login',
    views: {
      'tab6': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.choiScene'
      2) Using $state.go programatically:
        $state.go('tabsController.choiScene');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab5/choiScene
      /page1/tab7/choiScene
      /page1/tab6/choiScene
  */
  .state('tabsController.choiScene', {
    url: '/choiScene',
    views: {
      'tab5': {
        templateUrl: 'templates/choiScene.html',
        controller: 'choiSceneCtrl'
      },
      'tab7': {
        templateUrl: 'templates/choiScene.html',
        controller: 'choiSceneCtrl'
      },
      'tab6': {
        templateUrl: 'templates/choiScene.html',
        controller: 'choiSceneCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.hotScene'
      2) Using $state.go programatically:
        $state.go('tabsController.hotScene');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab5/hotScene
      /page1/tab6/hotScene
  */
  .state('tabsController.hotScene', {
    url: '/hotScene',
    views: {
      'tab5': {
        templateUrl: 'templates/hotScene.html',
        controller: 'hotSceneCtrl'
      },
      'tab6': {
        templateUrl: 'templates/hotScene.html',
        controller: 'hotSceneCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.chillScene'
      2) Using $state.go programatically:
        $state.go('tabsController.chillScene');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab5/chillScene
      /page1/tab6/chillScene
  */
  .state('tabsController.chillScene', {
    url: '/chillScene',
    views: {
      'tab5': {
        templateUrl: 'templates/chillScene.html',
        controller: 'chillSceneCtrl'
      },
      'tab6': {
        templateUrl: 'templates/chillScene.html',
        controller: 'chillSceneCtrl'
      }
    }
  })

  .state('signup', {
    url: '/Signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.home'
      2) Using $state.go programatically:
        $state.go('tabsController.home');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab5/Home
      /page1/tab6/Home
  */
  .state('tabsController.home', {
    url: '/Home',
    views: {
      'tab5': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      },
      'tab6': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.yourScene'
      2) Using $state.go programatically:
        $state.go('tabsController.yourScene');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab5/yourScene
      /page1/tab6/yourScene
  */
  .state('tabsController.yourScene', {
    url: '/yourScene',
    views: {
      'tab5': {
        templateUrl: 'templates/yourScene.html',
        controller: 'yourSceneCtrl'
      },
      'tab6': {
        templateUrl: 'templates/yourScene.html',
        controller: 'yourSceneCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.googleMaps'
      2) Using $state.go programatically:
        $state.go('tabsController.googleMaps');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab5/page13
      /page1/tab7/page13
      /page1/tab6/page13
  */
  .state('tabsController.googleMaps', {
    url: '/page13',
    views: {
      'tab5': {
        templateUrl: 'templates/googleMaps.html',
        controller: 'googleMapsCtrl'
      },
      'tab7': {
        templateUrl: 'templates/googleMaps.html',
        controller: 'googleMapsCtrl'
      },
      'tab6': {
        templateUrl: 'templates/googleMaps.html',
        controller: 'googleMapsCtrl'
      }
    }
  })

  .state('claimBusiness', {
    url: '/claimBusiness',
    templateUrl: 'templates/claimBusiness.html',
    controller: 'claimBusinessCtrl'
  })

  .state('tabsController.search', {
    url: '/search',
    views: {
      'tab8': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/Login')

  

});