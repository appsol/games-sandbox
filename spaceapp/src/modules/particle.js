/*
    Particle Module
    Particles are entities that are rendered to screen
    Particles are defined by a collection of points and sticks
    Particles can have a Radius (if composed of 1 point)
    Particles can have Mass
    Particles can have Acceleration
    Particles can have Friction
    Particles can have Bounciness
*/

(function(app)
    {
        var Particle = app.getModule('particle');

        Particle.Model = Backbone.Model.extend({
            initialize: function(modelData)
            {

            },
            defaults: {
                p: null,// Points (BB Collection)
                s: null,// Sticks (BB Collection)
                r: 0,// Radius
                m: 1,// Mass
                a: 0,// Acceleration
                f: 0,// Friction
                b: 0// Bounce
            }
        });

        Particle.List = Backbone.Collection.extend({
            model: Particle.Model
        });

        Particle.View = Backbone.View.extend({
            el: '#canvas',
            initialize: function(viewData)
            {

            }
        });

        return {
            createModel: function(modelData)
            {
                return new Particle.Model(modelData);
            },
            createList: function(modelsData)
            {
                return new Particle.List(modelsData);
            },
            createView: function(viewData)
            {
                return new Particle.View(viewData);
            }
        };
    })(app);