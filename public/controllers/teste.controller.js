define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TesteController {
        constructor(scope) {
            scope.vm = this;
        }
    }
    TesteController.$inject = ['$scope'];
    exports.default = TesteController;
});
