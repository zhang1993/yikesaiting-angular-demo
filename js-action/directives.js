/**
 * Created by littlekeng on 16/7/2.
 */

actionApp.directive('datePicker',function(){
    return{
        restrict:'AC',
        link:function(scope,elem,attrs){
            elem.datepicker();
        }
    };
});