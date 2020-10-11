const logo = {
    image: document.getElementById('logo'),
    'x': 1,
    'y': 1,
    'xspeed': 5,
    'yspeed': 5,
};

const move = (x, y) => logo.image.setAttribute('transform', ` translate(${(x)},${(y)})`);

// https://stackoverflow.com/a/5365036
const color = () => logo.image.style.fill = `#${((1<<24)*Math.random()|0).toString(16)}`;

function animate() {
    requestAnimationFrame(animate);

    // check if we've collided with the sides.
    if (logo.x + logo.image.getBBox().width >= window.innerWidth || logo.x <= 0) {
        logo.xspeed *= -1;
        color();
    }

    // check if we've collided with the top or bottom.
    if (logo.y + logo.image.getBBox().height >= window.innerHeight || logo.y <= 0) {
        logo.yspeed *= -1;
        color();
    }

    // advance the x,y co-ordinates by one tick.
    logo.x += logo.xspeed;
    logo.y += logo.yspeed;

    move(logo.x, logo.y);
}

color();
animate();