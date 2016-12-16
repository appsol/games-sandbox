/*
    Particle Module
    Particles are entities that are rendered to screen
    Particles are defined by a collection of points and sticks
*/

(function(app)
    {
        "use strict";
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
                particleData.s = new Stick.List(sticks);
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
                if (typeof data === 'string') {
                    this.url+= data;
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
            },
            render: function()
            {
                this.context.strokeStyle = "white";
                this.context.lineWidth = 1;
                this.context.beginPath();

                var sticks = this.model.get('s'),
                    points = this.model.get('p'),
                    sticksLength = sticks.length,
                    pointsLength = points.length;

                sticks.each(_.bind(function(stick)
                {
                    var startPoint = points.get(stick.get('p0')),
                        endPoint = points.get(stick.get('p1'));
                    this.context.moveTo(startPoint.get('x1'), startPoint.get('y1'));
                    this.context.lineTo(endPoint.get('x1'), endPoint.get('y1'));
                }, this));
                this.context.stroke();

                return this;
            }
        });
    })(app);