describe('Canvas', function()
{
    var Canvas = app.getModule('canvas');

    describe('View', function()
    {
        var canvasView;

        beforeEach(function()
        {
            canvasView = new Canvas.View();
            $('body').append(canvasView.render().el);
        });

        afterEach(function()
        {
            $('canvas').remove();
        });

        it('should be a Backbone View', function()
        {
            expect(canvasView).toEqual(jasmine.any(Backbone.View));
        });

        it('should be able to set its width and height from a parameter object', function()
        {
            canvasView = new Canvas.View({width: 100, height: 200});
            expect(canvasView.width).toEqual(100);
            expect(canvasView.height).toEqual(200);
            expect(canvasView.el.width).toEqual(100);
            expect(canvasView.el.height).toEqual(200);
        });

        it('should have a property .el which is a canvas tag with ID "canvas"', function()
        {
            expect(canvasView.$el.prop('tagName')).toBe('CANVAS');        
            expect(canvasView.$el.attr('id')).toBe('canvas');        
        });

        it('should have a property .context which is a 2d Canvas Rendering Context', function()
        {
            expect(typeof canvasView.context).toEqual('object');
            expect(Object.prototype.toString.apply(canvasView.context)).toContain('CanvasRenderingContext2D');
        });

        it('should have a property .particles which is a ParticleList Collection', function()
        {
            var Particle = app.getModule('particle');
            expect(canvasView.particles).toEqual(jasmine.any(Backbone.Collection));
            expect(canvasView.particles).toEqual(new Particle.List(''));
        });
    });
});