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
            initialize: function(particleData)
            {
                var Point = app.getModule('point');
                var Stick = app.getModule('stick');

                var particleData = particleData || {},
                    points = particleData['p'] || [],
                    sticks = particleData['s'] || [];
                particleData.p = new Point.List(points);
                particleData.s = new Point.List(sticks);
                this.set(particleData);
            },
            defaults: {
                p: null,// Points (BB Collection)
                s: null,// Sticks (BB Collection)
                m: 1// Mass
            }
        });

        Particle.List = Backbone.Collection.extend({
            model: Particle.Model,
            // url: 'assets/js/particles.json'
        });

        /*
            Particle View
            Description:
            Responsible for rendering 
        */
        Particle.View = Backbone.View.extend({
            el: '#canvas',
            initialize: function(viewData)
            {
                this.context = viewData.context;
                // this.particles = new Particle.List(particleJson);
                // this.particles.fetch();
                // this.render();
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