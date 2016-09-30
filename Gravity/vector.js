"use strict";

var vector = (function()
    {
        var Vector = function(x, y)
        {
            this.x = x;
            this.y = y;
        };

        Vector.prototype.setX = function(value)
        {
            this.x = value;
        };

        Vector.prototype.getX = function()
        {
            return this.x;
        };

        Vector.prototype.setY = function(value)
        {
            this.y = value;
        };

        Vector.prototype.getY = function()
        {
            return this.y;
        };

        Vector.prototype.setAngle = function(angle)
        {
            var length = this.getLength();
            this.x = Math.cos(angle) * length;
            this.y = Math.sin(angle) * length;
        };

        Vector.prototype.getAngle = function()
        {
            return Math.atan2(this.y, this.x);
        };

        Vector.prototype.setLength = function(length)
        {
            var angle = this.getAngle();
            this.x = Math.cos(angle) * length;
            this.y = Math.sin(angle) * length;
        };

        Vector.prototype.getLength = function()
        {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };

        Vector.prototype.add = function(v2)
        {
            return vector.create(this.x + v2.getX(), this.y + v2.getY());
        };

        Vector.prototype.subtract = function(v2)
        {
            return vector.create(this.x - v2.getX(), this.y - v2.getY());
        };

        Vector.prototype.multiply = function(val)
        {
            return vector.create(this.x * val, this.y * val);
        };

        Vector.prototype.divide = function(val)
        {
            return vector.create(this.x / val, this.y / val);
        };

        Vector.prototype.addTo = function(v2)
        {
            this.x += v2.getX();
            this.y += v2.getY();
        };

        Vector.prototype.subtractFrom = function(v2)
        {
            this.x -= v2.getX();
            this.y -= v2.getY();
        };

        Vector.prototype.multiplyBy = function(val)
        {
            this.x *= val;
            this.y *= val;
        };

        Vector.prototype.divideBy = function(val)
        {
            this.x /= val;
            this.y /= val;
        };

        return {
            create: function(x,y)
            {
                return new Vector(x, y);
            }
        };

    }());