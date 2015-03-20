/**
 * Created by chenchaowei on 3/20/15.
 */
/**
 * Created by chenchaowei on 3/19/15.
 */
angular.module('myapp.controllers', ['myapp.services']).controller('MyController', function ($scope, Calendar) {

    var months = ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var weekday = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];


    function getDaysAndDate(month) {

        var index = months.indexOf(month);

        var firstdate = new Date(2015, index, 1);

        var lastdate = new Date(2015, index + 1, 0);


        var obj = [];

        for(var i = 0 ; i < (lastdate.getDate() - firstdate.getDate() + 1); i ++){
            var whole = new Date(2015, index, i+1);
            obj.push({
                day:i + 1,
                weekDay:whole.getDay()

            });
        }

        return obj;
        console.log(obj);


    }
    $scope.days2 = getDaysAndDate('Apr');


    $scope.days1 = [];
    for(var i= 0; i < $scope.days2[0].weekDay  - 0; i++){
        $scope.days1.push({day:'10'});
    }
    console.log($scope.days1);

    $scope.days3 = [];

    for(var i =0 ; i < 6 - $scope.days2[$scope.days2.length-1].weekDay; i++){
        $scope.days3.push({day:'10'})
    }
    console.log($scope.days2.length);
    console.log($scope.days3);
    $scope.month = 'Apr';

    $scope.weekdays =  ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];




    $scope.query = '';
    $scope.search = function (event) {
        if (event.keyCode === 13) {
            Calendar.search($scope.query).success(function (data) {
                $scope.items = data.items;
            });
        }
    };
}).controller('UserController', function ($scope, Github, $routeParams) {
    Calendar.getUser($routeParams.username).success(function (data) {
        $scope.user = data;
    });
});