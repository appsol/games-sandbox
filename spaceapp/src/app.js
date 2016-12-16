/*
    Application base file

    @author Stuart Laverick
*/

var app = (function(w, $)
    {
        "use strict";
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
            requestAnimationFrame(update);
        };

        /*
        Initialize the application on DOM Ready
        */
        $(function ()
        {
            Canvas = app.getModule('canvas');
            var canvasView = new Canvas.View({
                collection: particleJson
            });
            $('body').append(canvasView.render().el);
            update();
        });

            return app || new App();

    }(window, jQuery));