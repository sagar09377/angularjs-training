/*incomeService - to get the data from json*/

expenseMngrApp.service("incomeService", function ($http, $q) {
	 this.getIncomeDetails = function () {
	 	var deferred = $q.defer();
var income;
    $http.get("data/incomeData.json").then(function (data) {
        return deferred.resolve(data);
		income=data.data;
      console.log(income);
    });
        return deferred.promise;
    }
    
   
});