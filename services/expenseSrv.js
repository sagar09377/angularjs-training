/*expense service - to fetch the data from json*/
expenseMngrApp.service("expenseService" , function ($http , $q) {
    
    
    this.getExpenseDetails = function () {
    	var deferred = $q.defer();
    $http.get("data/expenseData.json")
    .then(function (data) 
    {
         deferred.resolve(data);
    });
        return deferred.promise;
    }
})


