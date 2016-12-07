/*
    Application base file

    @author Stuart Laverick
*/

var app = (function(w, $)
    {
        var Canvas,
            modules = {},
            App = function ()
            {
                /*
                    Constants
                */
                this.gravity = 0.5;
            };

        App.prototype.getModule = function(name)
        {
            if (modules[name]) {
                return modules[name];
            }
            return modules[name] = {};
        };

        /*
            Main game loop
        */
        var update = function ()
        {
            new Canvas.View();

            requestAnimationFrame(update);
        };

        /*
        Initialize the application on DOM Ready
        */
        $(function ()
        {
            Canvas = app.getModule('canvas');
            update();
        });

            return app || new App();

    }(window, jQuery));

// console.log(app);