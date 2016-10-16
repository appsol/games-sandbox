describe('Point', function()
    {
        var Point = app.getModule('point');

        describe('Point Model', function()
            {
                var pointModel;

                beforeEach(function()
                    {
                        pointModel = new Point.Model();
                    });

                it('should be a Backbone Model', function()
                    {
                        expect(pointModel).toEqual(jasmine.any(Backbone.Model));
                    });

                it('should be created with default values for its attributes', function()
                    {
                        expect(pointModel.get('x0')).toBe(0);
                        expect(pointModel.get('y0')).toBe(0);
                        expect(pointModel.get('x1')).toBe(0);
                        expect(pointModel.get('y1')).toBe(0);
                        expect(pointModel.get('r')).toBe(0);
                        expect(pointModel.get('a')).toBe(0);
                        expect(pointModel.get('f')).toBe(0);
                        expect(pointModel.get('b')).toBe(0);
                    });

                it('should update position with regard to velocity', function()
                {

                });

                it('should change velocity with acceleration', function()
                {

                });

                it('should change velocity with bounce when it encounters a constraint', function()
                {

                });
            });

        describe('Point Collection', function()
            {
                var pointCollection;

                beforeEach(function()
                    {
                        pointCollection = new Point.List(particleJson);
                    });

                it('should be a Backbone Collection', function()
                    {
                        expect(pointCollection).toEqual(jasmine.any(Backbone.Collection));
                    });
            });
    });