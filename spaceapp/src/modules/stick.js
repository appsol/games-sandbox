/*
    Stick Module
    Sticks are connections between 2 points
    Sticks can have an optional thickness (w) (0 = invisible)
*/

(function(app)
    {
        "use strict";
        var Stick = app.getModule('stick');

        Stick.Model = Backbone.Model.extend({
            initialize: function()
            {
                this.listenTo(app.events, 'stick:update', this.update);
            },
            defaults: {
                p0: 0,// Start Point ID
                p1: 0,// End Point ID
                d:  0,// Resting distance
                td: 0,// Tear Distance 
                s:  0,// Stiffness
                w:  0// Width (thickness)
            },
            update: function()
            {
                
            }
        });

        Stick.List = Backbone.Collection.extend({
            model: Stick.Model
        });
    })(app);