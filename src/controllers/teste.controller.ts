export default class TesteController{
    static $inject = ['$scope'];
    constructor(scope){
        scope.vm =  this;
    }
}