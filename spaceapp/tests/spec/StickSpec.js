describe('Stick', function()
{
    var Stick = app.getModule('stick');

    describe('Model', function()
    {
        var stickModel;

        beforeEach(function()
        {
            stickModel = new Stick.Model();
        });

        it('should be a Backbone Model', function()
        {
            expect(stickModel).toEqual(jasmine.any(Backbone.Model));
        });
    });

    describe('Stick Collection', function()
            {
                var stickCollection;

                beforeEach(function()
                    {
                        stickCollection = new Stick.List(particleJson);
                    });

                it('should be a Backbone Collection', function()
                    {
                        expect(stickCollection).toEqual(jasmine.any(Backbone.Collection));
                    });
                it('should contain Stick Models', function()
                   {
                        expect(stickCollection.model).toBe(Stick.Model);
                   });
            });
});