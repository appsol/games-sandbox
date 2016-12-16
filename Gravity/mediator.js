

var mediator = (function()
    {
        "use strict";
        var subscribe = function(channel, callback)
        {
            if (!mediator.channels[channel]) {
                mediator.channels[channel] = [];
            }
            mediator.channels[channel].push({
                context: this,
                callback: callback
            });
            return this;
        };

        var publish = function(channel)
        {
            if (!mediator.channels[channel]) {
                return false;
            }
            var args = Array.prototype.slice.call(arguments, 1);
            for (var i = mediator.channels[channel].length - 1; i >= 0; i--) {
                var subscription = mediator.channels[channel][i];
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
