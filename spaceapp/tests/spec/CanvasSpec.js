describe('Canvas', function()
{
    var Canvas = app.getModule('canvas');

    describe('View', function()
    {
        var canvasView;

        beforeEach(function()
        {
            canvasView = new Canvas.View();
        });

        it('should be a Backbone View', function()
        {
            expect(canvasView).toEqual(jasmine.any(Backbone.View));
        });
    });
});