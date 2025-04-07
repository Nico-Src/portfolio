let audio = input();
let volume = input();
let pointerDown = input();
let scale = 10.0;
setStepSize(.8);
//setMaxIterations(100);
let s = getSpace();
rotateX(PI/2);
let n = 0.005*noise(scale * s);
// oscillate along spherical coordinates for coloring
let rtp = getSpherical(getSpace());
let verticalLines = sin(15*rtp.z+n*200);
let endsDampen = sin(rtp.y);

let col = vec3(0, 0.7, 0.0)*0.25 + 0.07*verticalLines*pow(endsDampen, .9)+vec3(.1);
let n2 = (noise(getRayDirection()+ verticalLines *pow(endsDampen, 2.3) + vec3(0, audio*.2, 0)));
occlusion(.1)
color(pow(vec3(n2)+s*.5+.5, vec3(1)));

//sphere(0.5);
torus(.4 + volume * .5, .2)
expand(n2*.1)