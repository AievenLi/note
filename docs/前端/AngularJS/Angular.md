##### 单选框

`````
<input type="radio" ng-model="status" value="1">  开启
<input type="radio" ng-model="status" value="0">  关闭
{{status}}
//
$scope.status = 1
`````

#####  多选框

````
 <input type="checkbox" ng-model="data.game" ng-true-value="1" ng-false-value="0">
 <input type="checkbox" ng-model="data.video" ng-true-value="1" ng-false-value="0">
    $scope.data = { game:0,video:0}
````

#####   下拉框

```` 
<div ng-app="hd" ng-controller="ctrl">
		<select ng-optons="v.value as v.name for v in data" ng-model="city">
			<option value="">请选择城市</option>
		<select>
</div>  
$scope.data = [
 {name:'后盾网',value:"houwang"}
]

<ul>
	<  li ng-repeat="(k,v) in data"  style="{{k === 0 ? 'color：red'：' '}}"> {{v.name}}--{{v.value}}</li>
</ul>
{{$first}}第一个  {{$last}} 最后一个  {{$middle}} 中间  {{$even}}偶数行  {{$odd}} 奇数行

ng-repeat="v in data track by $index"    




<div ng-app="hd" ng-controller="ctrl">
	性别:<select ng-model="sex">
			<option value="">选择性别</option>
			<option ng-value="1">男</option>
			<option ng-value="2"  ng-selected="true">女</option>
	</select>

</div>

<table border="1" width="500">
 <tr>
 	 <td>
 	 		<input type="checkbox" ng-model="all">
 	 		<span></span>
 	 </td>
 	 <td>标题</td>
 	 
 <tr>
 
</table>



````





````
angular.version 显示版本号
angular.lowercase() 将字符串转换为小写形式
angular.uppercase() 将字符串转换为大写形式
angular.copy() 深拷贝一个对象或者数组
angular.extend() 对象或数组合并
angular.forEach() 遍历对象或数组中的每一个元素并执行一个函数
angular.fromJson()将json字符串转为对象
angular.toJson() 将json对象转为字符串

ng-show ng-hide ng-if 
````



 