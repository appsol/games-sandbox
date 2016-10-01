"use strict";

var ship = (function(v, p, c)
    {
        var Ship = function()
        {
            this.turningLeft = false;
            this.turningRight = false;
            this.thrustValue = 0;
            this.thrust = v.create(0, 0);
            this.angle = 0;
        }

        var proto = p.create(0, 0, 0, 0);

        // Ship.prototype = Object.create(proto);
        Ship.prototype = proto;
        Ship.prototype.constructor = Ship;

        Ship.prototype.increaseThrust = function()
        {
            // this.thrust.setLength(0.1);
            this.thrustValue = 0.1;
            console.log('Thrust: ' + this.thrustValue);
        };


        Ship.prototype.endThrust = function()
        {
            // this.thrust.setLength(0);
            this.thrustValue = 0;
            console.log('Thrust: ' + this.thrustValue);
        };

        Ship.prototype.turnLeft = function()
        {
            // this.thrust.setAngle(this.thrust.getAngle() - 0.05);
            this.angle -= 0.05;
            console.log('Angle: ' + this.angle);
        };

        Ship.prototype.turnRight = function()
        {
            // this.thrust.setAngle(this.thrust.getAngle() + 0.05);
            this.angle += 0.05;
            console.log('Angle: ' + this.angle);
        };

        Ship.prototype.draw = function(context)
        {
            context.save();
            context.translate(this.position.getX(), this.position.getY());
            context.rotate(this.angle);
            context.beginPath();
            context.moveTo(10, 0);
            context.lineTo(-10, -7);
            context.lineTo(-10, 7   );
            context.lineTo(10, 0);
            if(this.thrust.getLength() > 0) {
                context.moveTo(-10, 0);
                context.lineTo(-18, 0);
            }
            context.stroke();

            context.restore();
        };

        var updateShip = function()
        {
            this.thrust.setLength(this.thrustValue);
            this.thrust.setAngle(this.angle);
            this.accelerate(this.thrust);
            var x = Object.getPrototypeOf(this);
            x.update.call(this);
        };

        return {
            create: function(x, y, speed, direction, grav) {
                var s = new Ship();
                s.position = v.create(x, y);
                s.velocity = v.create(0, 0);
                s.velocity.setLength(speed);
                s.velocity.setAngle(direction);
                s.gravity = v.create(0, grav || 0);
                s.update = updateShip;

                var controls = c.getInstance();
                controls.subscribe.call(s, 'keydown_38', s.increaseThrust);
                controls.subscribe.call(s, 'keydown_37', s.turnLeft);
                controls.subscribe.call(s, 'keydown_39', s.turnRight);
                controls.subscribe.call(s, 'keyup_38', s.endThrust);

                return s;
            }
        };
    })(vector, particle, controls);