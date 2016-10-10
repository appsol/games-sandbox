/*

*/

(function(app)
    {
        var Canvas = app.getModule('canvas');

        Canvas.View = Backbone.View.extend({
            el: '#canvas',
            initialize: function()
            {
                this.width = this.el.width = window.innerWidth;
                this.height = this.el.height = window.innerHeight;
                this.context = this.el.getContext('2d');
            },
            render: function()
            {
                this.context.clearRect(0, 0, this.width, this.height);
            }
        });

        return {
            createView: function()
            {
                return new Canvas.View();
            }
        };
    })(app);