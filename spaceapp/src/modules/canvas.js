/*
    Canvas module
    The canvas is the stage onto which all Particles are rendered
    A Canvas has a width (default is the screen width)
    A Canvas has a height (default is the screen height)
*/

(function(app)
    {
        "use strict";
        var Canvas = app.getModule('canvas'),
            Particle = app.getModule('particle');

        Canvas.View = Backbone.View.extend({
            tagName: 'canvas',
            initialize: function(data)
            {
                var canvasData = typeof data != 'undefined'? data : {};

                // Set up the parameters for the root element
                this.el.id = canvasData.id || 'canvas';
                this.width = canvasData.width || window.innerWidth;
                this.height = canvasData.height || window.innerHeight;
                this.el.width = this.width;
                this.el.height = this.height;
                this.context = this.el.getContext('2d');

                // Get the list of particles associated with this canvas
                this.particles = new Particle.List(canvasData.collection || '');

                _.bindAll(this, 'renderParticle');

                this.render();
            },
            render: function()
            {
                this.context.clearRect(0, 0, this.width, this.height);
                
                this.particles.each(this.renderParticle, this);

                return this;
            },
            renderParticle: function(item)
            {
                var particleView = new Particle.View({
                    model: item,
                    context: this.context
                });
                particleView.render();
            }
        });
    })(app);