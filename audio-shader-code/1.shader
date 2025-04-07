let audio = input();
let volume = input();
let pointerDown = input();
let strength = .1 + volume * .1;
let twistMix = volume * .5 + .5;
setStepSize(.3);

rotateY(audio * .1);
let warpedSpace = warpSpace(getSpace());
metal(1.9);
shine(volume);
let f = fresnel(volume);
color(vec3(f));
sphere(.75 + length(warpedSpace) * .1 + volume);

function warpSpace(s) {
    let t = time / 4.;
    rotateY(getRayDirection().y * (1 - twistMix) * 50);
    s = getSpace().x * 8.0 * (vec3(0.5, .2, .1) + s);
    for(let i = 1.0; i < 3.0; i += 1.0) {
    s.x = s.x + strength * sin(2.0 * t + i * 1.5 * s.y) + t * 0.5;
    s.y = s.y + strength * cos(2.0 * t + i * 2.5 * s.x);
    }
    return .5 + 0.5 * cos(audio + vec3(s.x, s.y, s.x) + vec3(0., 2., 4.));

}