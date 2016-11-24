/**
 * Main Canvas bootstrap
 *
 */
var canvas = null;

(function(w, d){

    var body,
        canvas,
        ctx,
        img,
        assets,
        frames,
        frame,
        framerate,
        assets = ['https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk00.png',
                  'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk01.png',
                  'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk02.png',
                  'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk03.png',
                  'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk04.png',
                  'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk05.png',
                  'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk06.png',
                  'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk07.png',
                  'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk08.png',
                  'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk09.png',
                  'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk10.png',
                  'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk11.png',
                  'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk12.png',
                  'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk13.png',
                  'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk15.png',
                  'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk16.png',
                  'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk17.png',
                  'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk18.png'
                 ];

    var setup = function()
    {
        body = d.getElementById('body');
        canvas = d.createElement('canvas');
        ctx = canvas.getContext('2d');

        canvas.width = w.innerWidth;
        canvas.height = w.innerHeight;

        body.appendChild(canvas);

        frames = [];
        frame = 0;
        framerate = 1000 / 3;
        for (var i = assets.length - 1; i >= 0; i--) {
            var img = new Image();
            img.onload = onImageLoad;
            img.src = assets[i];
            frames.unshift(img);
        }
    };

    var onImageLoad = function()
    {
        console.log('Image loaded');
        if (frames.length == assets.length) {
            index = 0;
            w.setInterval(animate, framerate);
        }
    }

    var animate = function()
    {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(frames[frame], 0, 0);
        frame = (frame + 1) % frames.length;
    }

    setup();
})(window, document);