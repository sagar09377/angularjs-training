/**
 * @desc Controller for the expenses
 * @namespace ExpenseCtrl
 */

(function () {
    'use strict';
    expenseMngrApp.controller('ExpenseCtrl',
    function ($scope, expenseService) {

            /**
             * @desc Array of expenses object
             * @memberOf ExpenseCtrl
             */
            $scope.expenseArray;
            var promise = expenseService.getExpenseDetails();
            promise.then(function (data) {
                $scope.expenseArray = data.data;
            });

            $scope.composeData = {};
            $scope.editable = false;

            $scope.compose = function (transaction) {
                $scope.editable = true;
                $scope.composeData = transaction;
            };

            $scope.saveComposition = function () {
                    $scope.editable = false;
                }
            // Adding Expense

            $scope.newListing = {};
            $scope.addExpense = function (newListing) {
                $scope.expenseArray.push(newListing);
                //$scope.newListing = {};
                //$scope.expVisible = false;
            }
            // $scope.expVisible = false;
            // $scope.AddNewExpenseBtn = function () {
            //     $scope.expVisible = true;
            // }

            // Removing expense
            $scope.removeExpense = function (index) {
                if (confirm("Do u want to delete?") == true) 
                {
                    $scope.incomeArray.splice(index, 1);
                } 
                else 
                {
                    $scope.incomeArray.splice(index,0);
                }
            }

    });
})();