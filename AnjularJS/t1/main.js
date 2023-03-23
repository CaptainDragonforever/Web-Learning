<div ng-app="myApp" ng-controller="myCtrl">
<input list="cookies" placeholder="请选择或输入" />
    <datalist id="cookies">
        <option ng-repeat="x in names">{{x}}</option>
          </datalist>




</div>