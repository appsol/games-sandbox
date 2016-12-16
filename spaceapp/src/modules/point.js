/*
    Point Module
    Points are single points on the screen representing velocity with mass
    Points have a position (x1,y1)
    Points have a mass (m)
    Points have velocity by relation to their old position (x0,y0)
    Points can have an optional radius (r) (visibility)
    Points can have an optional acceleration (a)
    Points can have Friction (f)
    Points can have Bounciness (b)
*/

(function(app)
    {
        "use strict";
        var Point = app.getModule('point'),
            timeStep = 0.02;

        Point.Model = Backbone.Model.extend({
            defaults: {
                x0: 0,//old X
                y0: 0,// old Y
                x1: 0,// current X
                y1: 0,// currentY
                m: 1,// Mass
                r: 0,// Radius
                a: 0,// Acceleration
                f: 1,// Friction
                b: 1// Bounce
            },
            update: function()
            {
                // Velocity is new position - old position * friction
                var vx = (this.get('x1') - this.get('x0')) * this.get('f'),
                    vy = (this.get('y1') - this.get('y0')) * this.get('f'),
                    // Acceleration is acceleration * time squared
                    a = this.get('a') * timeStep * timeStep;
                // Adjust velocity for acceleration
                vx+= vx >= 0? a : -1 * a;
                vy+= vx >= 0? a : -1 * a;

                // Update old position as current position
                this.set('x0', this.get('x1'));
                this.set('y0', this.get('y1'));
                // Update new position as current position + velocity
                this.set('x1', this.get('x1') + vx);
                this.set('y1', this.get('y1') + vy);
            },
        });

        Point.List = Backbone.Collection.extend({
            model: Point.Model,
        });

        Point.View = Backbone.View.extend({
            el: '#canvas',
            initialize: function(viewData)
            {
                this.context = viewData.context;
            },
            render: function()
            {
                if(this.model.get('r') > 0){
                    this.context.arc(
                        this.model.get('x1'),
                        this.model.get('y1'),
                        this.model.get('r'),
                        0,
                        Math.PI * 2
                    );
                    this.context.fill();
                }

                return this;
            }
        });
    })(app);