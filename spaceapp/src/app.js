/*
    Application base file

    @author Stuart Laverick
*/

var app = (function(w, $)
    {
        "use strict";
        var Canvas,
            modules = {},
            /*
                App is the global object
                App provides a global service layer
             */
            App = function ()
            {
                /*
                    Constants
                */
                this.gravity = 0.5;
            };
        /*
            Module factory
            Returns the named module if found
            Adds and returns a named object literal if not
        */
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

        /**
            Initialize the application on DOM Ready
            Creates a new canvas global module
            Initialises a Vanvas View which will create a canvas dom node
            Appends the created canvas node to the body node
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

        // Return App or create it
        return app || new App();

    }(window, jQuery));