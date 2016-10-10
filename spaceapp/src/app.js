/*

*/

var app = (function(w, $)
    {
        var App = function ()
        {
            this.gravity = 0.5;
        };

        var modules = {};

        App.prototype.getModule = function(name)
        {
            if (modules[name]) {
                return modules[name];
            }
            return modules[name] = {};
        };

        return function ()
        {
            return w.app || new App();
        }

        /*
        Initialize the application on DOM Ready
        */
        $(function()
            {

            });
    }(window, jQuery));