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
                        expect(pointModel.get('f')).toBe(1);
                        expect(pointModel.get('b')).toBe(1);
                    });

                it('should change position with velocity moving positively', function()
                {
                    pointModel.set({
                        x0: 100,
                        y0: 100,
                        x1: 110,
                        y1: 110
                    });
                    pointModel.update();
                    expect(pointModel.get('x0')).toBe(110);
                    expect(pointModel.get('y0')).toBe(110);
                    expect(pointModel.get('x1')).toBe(120);
                    expect(pointModel.get('y1')).toBe(120);
                });

                it('should change position with velocity moving negatively', function()
                {
                    pointModel.set({
                        x0: 100,
                        y0: 100,
                        x1: 80,
                        y1: 90
                    });
                    pointModel.update();
                    expect(pointModel.get('x0')).toBe(80);
                    expect(pointModel.get('y0')).toBe(90);
                    expect(pointModel.get('x1')).toBe(60);
                    expect(pointModel.get('y1')).toBe(80);
                });

                it('should change velocity with acceleration moving positively', function()
                {
                    pointModel.set({
                        x0: 100,
                        y0: 100,
                        x1: 110,
                        y1: 110,
                        a: 1
                    });
                    pointModel.update();
                    expect(pointModel.get('x0')).toBe(110);
                    expect(pointModel.get('y0')).toBe(110);
                    expect(pointModel.get('x1')).toBe(120.0004);
                    expect(pointModel.get('y1')).toBe(120.0004);
                });

                it('should change velocity with acceleration moving negatively', function()
                {
                    pointModel.set({
                        x0: 100,
                        y0: 100,
                        x1: 80,
                        y1: 90,
                        a: 1
                    });
                    pointModel.update();
                    expect(pointModel.get('x0')).toBe(80);
                    expect(pointModel.get('y0')).toBe(90);
                    expect(pointModel.get('x1')).toBe(59.9996);
                    expect(pointModel.get('y1')).toBe(79.9996);
                });

                it('should change velocity with bounce when it encounters a constraint', function()
                {
                    pointModel.set({
                        x0: 100,
                        y0: 40,
                        x1: 120,
                        y1: 10,
                        b: 0.8
                    });
                    pointModel.update();
                    expect(pointModel.get('x0')).toBe(120);
                    expect(pointModel.get('y0')).toBe(-24);
                    expect(pointModel.get('x1')).toBe(140);
                    expect(pointModel.get('y1')).toBe(0);
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