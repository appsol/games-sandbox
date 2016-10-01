window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        s = ship.create(width / 2, height / 2, 0, 0);
        // p = particle.create(width / 2, height / 2, Math.random() * 4 + 1, Math.random() * Math.PI * 2);

    update();


    function update() {
        context.clearRect(0, 0, width, height);

        s.update();
        s.draw(context);

        // animation goes here

        requestAnimationFrame(update);
    }
};