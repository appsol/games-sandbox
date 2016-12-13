describe('Particle', function()
    {
        var Particle = app.getModule('particle');

        describe('Model', function()
            {
                var particleModel;

                beforeEach(function()
                    {
                        particleModel = new Particle.Model(particleJson);
                    });

                it('should be a Backbone Model', function()
                    {
                        expect(particleModel).toEqual(jasmine.any(Backbone.Model));
                    });

                it('should be created with default values for its attributes', function()
                    {
                        var emptyModel = new Particle.Model();
                        expect(emptyModel.get('p')).toEqual(jasmine.any(Backbone.Collection));
                        expect(emptyModel.get('s')).toEqual(jasmine.any(Backbone.Collection));
                    });

                it('should have an property .p which is a Point.List Collection', function()
                    {
                        var Point = app.getModule('point');
                        particleModel = new Particle.Model();
                        expect(particleModel.get('p')).toEqual(jasmine.any(Backbone.Collection));
                        expect(particleModel.get('p')).toEqual(new Point.List([]));
                    });

                it('should have an attribute .s which is a Stick.List Collection', function()
                    {
                        var Stick = app.getModule('stick');
                        particleModel = new Particle.Model();
                        expect(particleModel.get('s')).toEqual(jasmine.any(Backbone.Collection));
                        expect(particleModel.get('s')).toEqual(new Stick.List());
                    });
            });

        describe('View', function()
        {
            var particleView,
                canvasView,
                Canvas = app.getModule('canvas');

            beforeEach(function()
            {
                canvasView = new Canvas.View();
                $('body').append(canvasView.render().el);
                particleView = new Particle.View({context: canvasView.context});
            });

            afterEach(function()
            {
                $('canvas').remove();
            });

            it('should be a Backbone View', function()
            {
                expect(particleView).toEqual(jasmine.any(Backbone.View));
            });

            it('should have a property .context which is a 2d Canvas Rendering Context', function()
            {
                expect(typeof particleView.context).toEqual('object');
                expect(Object.prototype.toString.apply(particleView.context)).toContain('CanvasRenderingContext2D');
            });
        });
    });