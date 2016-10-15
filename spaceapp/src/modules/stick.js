/*
    Stick Module
    Sticks are connections between 2 points
    Sticks can have an optional thickness (w) (0 = invisible)
*/

(function(app)
    {
        var Stick = app.getModule('stick');

        Stick.Model = Backbone.Model.extend({
            initialize: function()
            {

            },
            defaults: {
                p0: 0,// Start Point ID
                p1: 0,// End Point ID
                w: 0// width (thickness)
            }
        });

        Stick.List = Backbone.Collection.extend({
            model: Stick.Model
        });
    })(app);