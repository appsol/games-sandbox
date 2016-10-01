var controls = (function(m)
    {
        var instance;

        var onKeyDown = function(event)
        {
            switch(event.keyCode) {
                case 38:// up
                    instance.publish('keydown_38');
                    break;
                case 37:// left
                    instance.publish('keydown_37');
                    break;
                case 39:// right
                    instance.publish('keydown_39');
                    break;
                case 40:// down
                    instance.publish('keydown_40');
                    break;
                default:
                    break;
            }
        };

        var onKeyUp = function(event)
        {
            switch(event.keyCode) {
                case 38:// up
                    instance.publish('keyup_38');
                    break;
                case 37:// left
                    instance.publish('keyup_37');
                    break;
                case 39:// right
                    instance.publish('keyup_39');
                    break;
                case 40:// down
                    instance.publish('keyup_40');
                    break;
                default:
                    break;
            }
        };

        var init = function()
        {
            document.body.addEventListener('keydown', onKeyDown);
            document.body.addEventListener('keyup', onKeyUp);
            return {
                onKeyDown: onKeyDown,
                onKeyUp: onKeyUp
            }
        };

        return {
            getInstance: function()
            {
                if (!instance) {
                    instance = init();
                    m.installTo(instance);
                }
                return instance;
            }
        }
    })(mediator);