/*
    Point Module
    Points are single points on the screen
    Points have a position (x2,y2)
    Points have velocity by relation to their old position (x1,y1)
*/

(function(app)
    {
        var Point = app.getModule('point');

        Point.Model = Backbone.Model.extend({
            initialize: function()
            {

            },
            defaults: {
                x1: 0,//old X
                y1: 0,// old Y
                x2: 0,// current X
                y2: 0,// currentY
            }
        });

        Point.List = Backbone.Collection.extend({
            model: Point.Model
        });

        return {
            createModel: function(modelData)
            {
                return new Point.Model(modelData);
            },
            createList: function(modelsData)
            {
                return new Point.List(modelsData);
            }
        };
    })(app);