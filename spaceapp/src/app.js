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

        /*
        Initialize the application on DOM Ready
        */
        $(function()
            {
                var canvas = app.getModule('canvas');
                new canvas.View();
            });

        // return function ()
        // {
            return app || new App();
        // };
    }(window, jQuery));

// console.log(app);