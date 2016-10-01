"use strict";

var particle  = (function(v)
    {
        var Particle = function()
        {
            this.position = null;
            this.velocity = null;
            this.mass = 1;
            this.radius = 0;
            this.bounce = -1;
            this.friction = 1;
            this.gravity = 0;
        };

        Particle.prototype.accelerate = function(accel) {
            this.velocity.addTo(accel);
        };

        Particle.prototype.update = function() {
            this.velocity.multiplyBy(this.friction);
            this.velocity.addTo(this.gravity);
            this.position.addTo(this.velocity);
        };

        Particle.prototype.angleTo = function(p2) {
            return Math.atan2(p2.position.getY() - this.position.getY(), p2.position.getX() - this.position.getX());
        };

        Particle.prototype.distanceTo = function(p2) {
            var dx = p2.position.getX() - this.position.getX(),
                dy = p2.position.getY() - this.position.getY();

            return Math.sqrt(dx * dx + dy * dy);
        };

        Particle.prototype.gravitateTo = function(p2) {
            var grav = v.create(0, 0),
                dist = this.distanceTo(p2);

            grav.setLength(p2.mass / (dist * dist));
            grav.setAngle(this.angleTo(p2));
            this.velocity.addTo(grav);
        };

        Particle.prototype.draw = function(context)
        {
            context.beginPath();
            context.arc(this.position.getX(), this.position.getY(), 10, 0, Math.PI * 2, false);
            context.fill();
        };

        return {
            create: function(x, y, speed, direction, grav) {
                var p = new Particle();
                p.position = v.create(x, y);
                p.velocity = v.create(0, 0);
                p.velocity.setLength(speed);
                p.velocity.setAngle(direction);
                p.gravity = v.create(0, grav || 0);
                return p;
            }
        };

    })(vector);
