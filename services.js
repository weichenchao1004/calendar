/**
 * Created by chenchaowei on 3/20/15.
 */
/**
 * Created by chenchaowei on 3/19/15.
 */
angular.module('myapp.services', []).factory('Calendar', function ($http) {
    return {
        search: function (query) {
            return $http.get('https://api.github.com/search/repositories?q=' + query);
        },
        getUser: function (username) {
            return $http.get('https://api.github.com/users/' + username);
        }
    };
});