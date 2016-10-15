/*
    Point Module
    Points are single points on the screen
    Points have a position (x1,y1)
    Points have velocity by relation to their old position (x0,y0)
    Points can have an optional radius (r) (visibility)
    Points can have an optional acceleration (a)
*/

(function(app)
    {
        var Point = app.getModule('point');

        Point.Model = Backbone.Model.extend({
            initialize: function()
            {

            },
            defaults: {
                x0: 0,//old X
                y0: 0,// old Y
                x1: 0,// current X
                y1: 0,// currentY
                r: 0,// Radius
                a: 0,// Acceleration
                f: 0,// Friction
                b: 0// Bounce
            }
        });

        Point.List = Backbone.Collection.extend({
            model: Point.Model,
        });

        Point.View = Backbone.View.extend({
            el: '#canvas',
            initialize: function(viewData)
            {
                this.context = viewData.context;
                if(this.model.get('r') > 0){
                    this.render();
                }
            },
            render: function()
            {
                this.context.beginPath();
                this.context.arc(
                    this.model.get('x1'),
                    this.model.get('y1'),
                    this.model.get('r'),
                    0,
                    Math.PI * 2
                );
                this.context.fill();new Number(value)
            }
        });
    })(app);