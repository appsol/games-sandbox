/*
    Particle Module
    Particles are entities that are rendered to screen
    Particles are defined by a collection of points and sticks
*/

(function(app)
    {
        var Particle = app.getModule('particle');

        Particle.Model = Backbone.Model.extend({
            initialize: function(data)
            {
                var Point = app.getModule('point');
                var Stick = app.getModule('stick');

                var particleData = data || {},
                    points = particleData.p || [],
                    sticks = particleData.s || [];
                particleData.p = new Point.List(points);
                particleData.s = new Point.List(sticks);
                this.set(particleData);
            },
            defaults: {
                p: null,// Points (BB Collection)
                s: null// Sticks (BB Collection)
            }
        });

        Particle.List = Backbone.Collection.extend({
            model: Particle.Model,
            url: 'assets/js/particles/',
            initialize: function (data)
            {
                if (data.collection) {
                    this.url+= data.collection;
                }
            }
        });

        /*
            Particle View
            Description:
            Responsible for rendering 
        */
        Particle.View = Backbone.View.extend({
            initialize: function(data)
            {
                this.context = data.context;
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