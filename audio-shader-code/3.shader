let audio = input();
let volume = input();
let pointerDown = input();
rotateX(Math.PI/2);
//torus(0.5,0.2);
//mixGeo(nsin(time));
//blend(0.3)

let colorx = 1.0 * volume;
color(.1,colorx,.1);
metal(1);
shine(0.6);


//let scale = 2.0;
let scale = 2.0 + 3*nsin(time);
let s = getSpace();
let n = 0.2 * noise(scale * s + time*0.5);
torus(0.7 + n + volume,0.1);