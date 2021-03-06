var app = angular.module('benchedSports');


app.controller('postCtrl', function($scope, postService) {

	$scope.toLogin = function() {
		$location.path('/login');
	}

	$scope.submitPost = function() {
		var post = {};
		post.title = $scope.title;
		post.body = $scope.htmlcontent; // previously was: $scope.body
		post.sport = $scope.sport;
		post.user = $scope.user._id
		console.log(post);
		postService.submitPost(post)
		$scope.title = '';
		$scope.htmlcontent = '';
		$scope.sport = '';
	}
})