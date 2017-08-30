angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function ($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.addListing = function () {
      //No reason to add a listing if the bare minimum is not filled in
      if ($scope.code != undefined && $scope.name != undefined) {
        if ($scope.latitude == undefined)
          $scope.latitude = "Undefined";
        if ($scope.longitude == undefined)
          $scope.longitude = "Undefined";
        if ($scope.address == undefined)
          $scope.address = "Undefined";

        var coords = { latitude: $scope.latitude, longitude: $scope.longitude }
        var entry = {
          code: $scope.code, name: $scope.name, coordinates: coords, address: $scope.address
        };

        $scope.listings.push(entry);

        $scope.code = undefined;
        $scope.name = undefined;
        $scope.latitude = undefined;
        $scope.longitude = undefined;
        $scope.address = undefined;
      }

    };

    $scope.deleteListing = function (name, code) {
      for (i = 0; i < $scope.listings.length; i++) {
        if ($scope.listings[i].name == name && $scope.listings[i].code == code)
          break;
      };
      $scope.listings.splice(i, 1);
    };

    $scope.showDetails = function (name, code) {
      for (i = 0; i < $scope.listings.length; i++) {
        if ($scope.listings[i].name == name && $scope.listings[i].code == code)
          break;
      };

      $scope.detailedInfo = $scope.listings[i];
    };

    //Filter
    $scope.containsSearch = function (entry) {
      return entry.name.match($scope.search) || entry.code.match($scope.search);
    };

    $scope.set_color = function($index) {
      if ($index % 2 == 0)
        return {'background-color': "orange"};
      else
        return {'background-color': "lightblue"};
    };
  }
]);
