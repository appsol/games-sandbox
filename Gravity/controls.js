"use strict";

var controls = (function()
    {
        var subscribe = function(channel, callback)
        {
            if (!controls.channels[channel]) {
                controls.channels[channel] = [];
            }
            controls.channels[channel].push({
                context: this,
                callback: callback
            });
            return this;
        };

        var publish = function(channel)
        {
            if (!controls.channels[channel]) {
                return false;
            }
            var args = Array.prototype.slice.call(arguments, 1);
            for (var i = controls.channels[channel].length - 1; i >= 0; i--) {
                var subscription = controls.channels[channel][i];
                subscription.callback.apply(subscription.context, args);
            }
            return this;
        };

        return {
            channels: {},
            publish: publish,
            subscribe: subscribe,
            installTo: function(obj) {
                obj.subscribe = subscribe;
                obj.publish = publish;
            }
        }
    })();