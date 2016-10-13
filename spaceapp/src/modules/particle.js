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
            model: Particle.Model,
            // url: 'assets/js/particles.json'
        });

        Particle.View = Backbone.View.extend({
            el: '#canvas',
            initialize: function(viewData)
            {
                this.context = viewData.context;
                this.particles = new Particle.List(particleJson);
                // this.particles.fetch();
                this.render();
            },
            render: function()
            {
                // this.context.beginPath();
                this.context.strokeStyle = "white";
                this.context.lineWidth = 1;
                this.context.beginPath();
                this.particles.each (_.bind(function(particle)
                    {
                        var sticks = particle.get('s'),
                            points = particle.get('p');
                        // this.context.beginPath();
                        _.forEach (sticks, _.bind(function(stick)
                        {
                            // this.context.beginPath();
                            this.context.moveTo(points[stick.p0].x2, points[stick.p0].y2);
                            this.context.lineTo(points[stick.p1].x2, points[stick.p1].y2);
                            // this.context.stroke();
                        }, this));
                        // this.context.stroke();
                    }, this));
                this.context.stroke();
            }
        });
    })(app);

var particleJson = [
    {
        "p": {
            "1": {
                "x1": 100,
                "y1": 100,
                "x2": 105,
                "y2": 105
            },
            "2": {
                "x1": 120,
                "y1": 100,
                "x2": 125,
                "y2": 105
            },
            "3": {
                "x1": 100,
                "y1": 120,
                "x2": 105,
                "y2": 125
            }
        },
        "s": {
            "s1": {
                "p0": 1,
                "p1": 2,
                "v": 1
            },
            "s2": {
                "p0": 2,
                "p1": 3,
                "v": 1
            },
            "s3": {
                "p0": 3,
                "p1": 1,
                "v": 1
            }
        }
    }
];