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

                it('should have an attribute "p" which is a Backbone Collection', function()
                    {
                        expect(particleModel.get('p')).toEqual(jasmine.any(Backbone.Collection));
                    });

                it('should have an attribute "s" which is a Backbone Collection', function()
                    {
                        expect(particleModel.get('s')).toEqual(jasmine.any(Backbone.Collection));
                    });
            });
    });