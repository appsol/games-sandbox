"use strict";

var ship = (function(v, p)
    {
        var Ship = function()
        {
            this.turningLeft = false;
            this.turningRight = false;
            this.thrusting = false;
            this.thrust = v.create(0, 0);
            this.angle = 0;
        }

        Ship.prototype = Object.create(p.prototype);
        Ship.prototype.constructor = Ship;

        Ship.prototype.addControl = function(control, keyCode)
        {

        };

        return {
            create: function(x, y, speed, direction, grav) {
                var s = new Ship();
                s.position = v.create(x, y);
                s.velocity = v.create(0, 0);
                s.velocity.setLength(speed);
                s.velocity.setAngle(direction);
                s.gravity = v.create(0, grav || 0);

                return s;
            }
        };
    })(vector, particle);