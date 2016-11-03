angular.module('app')
  .config(routes)
  
function routes($routeProvider, $locationProvider) {
  
  $routeProvider
    .when('/', {
      templateUrl: './home/home.partial.html',
      controller: 'HomeController',
      controllerAs: 'HCtrl'
  })
  .when('/menu', {
      templateUrl: './menu/menu.partial.html',
      controller: 'MenuController',
      controllerAs: 'MCtrl'
  })
  .when('/prequiz', {
      templateUrl: './quiz/preQuiz/preQuiz.partial.html',
      controller: 'PreQuizController',
      controllerAs: 'PQCtrl'
  })
  .when('/1/1', {
      templateUrl: './quiz/questionSet1/questionsPage1/1-1.partial.html',
      controller: 'OneOneController',
      controllerAs: 'OneOneCtrl'
  })
  .when('/1/2', {
      templateUrl: './quiz/questionSet1/questionsPage2/1-2.partial.html',
      controller: 'OneTwoController',
      controllerAs: 'OneTwoCtrl'
  })
  .when('/1/3', {
      templateUrl: './quiz/questionSet1/questionsPage3/1-3.partial.html',
      controller: 'OneThreeController',
      controllerAs: 'OneThreeCtrl'
  })
  .when('/1/4', {
      templateUrl: './quiz/questionSet1/questionsPage4/1-4.partial.html',
      controller: 'OneFourController',
      controllerAs: 'OneFourCtrl'
  })
  .when('/2/1', {
      templateUrl: './quiz/questionSet2/questionsPage1/2-1.partial.html',
      controller: 'TwoOneController',
      controllerAs: 'TwoOneCtrl'
  })
  .when('/2/2', {
      templateUrl: './quiz/questionSet2/questionsPage2/2-2.partial.html',
      controller: 'TwoTwoController',
      controllerAs: 'TwoTwoCtrl'
  })
  .when('/2/3', {
      templateUrl: './quiz/questionSet2/questionsPage3/2-3.partial.html',
      controller: 'TwoThreeController',
      controllerAs: 'TwoThreeCtrl'
  })
  .when('/2/4', {
      templateUrl: './quiz/questionSet2/questionsPage4/2-4.partial.html',
      controller: 'TwoFourController',
      controllerAs: 'TwoFourCtrl'
  })
  .when('/2/5', {
      templateUrl: './quiz/questionSet2/questionsPage5/2-5.partial.html',
      controller: 'TwoFiveController',
      controllerAs: 'TwoFiveCtrl'
  })
   .when('/3/1', {
      templateUrl: './quiz/questionSet3/questionsPage1/3-1.partial.html',
      controller: 'ThreeOneController',
      controllerAs: 'ThreeOneCtrl'
  })
  .when('/3/2', {
      templateUrl: './quiz/questionSet3/questionsPage2/3-2.partial.html',
      controller: 'ThreeTwoController',
      controllerAs: 'ThreeTwoCtrl'
  })
  .when('/summary', {
      templateUrl: './quiz/questionSet3/questionsPage2/3-2.partial.html',
      controller: 'ThreeTwoController',
      controllerAs: 'ThreeTwoCtrl'
  })
  .when('/summary1', {
      templateUrl: './quiz/questionSet1/summary1/summary1.partial.html',
      controller: 'SummaryOneController',
      controllerAs: 'SumOneCtrl'
  })
  .when('/summary2', {
      templateUrl: './quiz/questionSet2/summary2/summary2.partial.html',
      controller: 'SummaryTwoController',
      controllerAs: 'SumTwoCtrl'
  })
  .when('/summary3', {
      templateUrl: './quiz/questionSet3/summary3/summary3.partial.html',
      controller: 'SummaryThreeController',
      controllerAs: 'SumThreeCtrl'
  })
  .when('/finalSummary', {
      templateUrl: './quiz/finalSummary/finalSummary.partial.html',
      controller: 'FinalSumamryController',
      controllerAs: 'FinalSumCtrl'
  })
  .when('/test', {
      templateUrl: './testLookup/test.partial.html',
      controller: 'TestController',
      controllerAs: 'TCtrl'
  })
  
 
  $locationProvider.html5Mode(true)
  
}

