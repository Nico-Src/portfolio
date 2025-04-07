let audio = input();
let volume = input();
let pointerDown = input();
let scale = 20.0;
setStepSize(.91);
//setMaxIterations(100);
let s = getSpace();
rotateX(PI/2);
let n = 0.002*noise(scale * s);
// oscillate along spherical coordinates for coloring
let rtp = getSpherical(getSpace());
let verticalLines = sin(6*rtp.z+n*150);
let endsDampen = sin(rtp.y);

let col = vec3(0.5, 0.7, 0.54)*0.55 + 0.67*verticalLines*pow(endsDampen, .9)+vec3(.1);
let n2 = (noise(getRayDirection()+ verticalLines *pow(endsDampen, 1.3) + vec3(0, audio*.22, -1)));
occlusion(.5)
color(pow(vec3(n2)+s*.25+.25, vec3(7)));

//sphere(0.25);
torus(.1, .7)
expand(n2*.11+volume*.5)