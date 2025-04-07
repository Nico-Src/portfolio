let audio = input();
let volume = input();
let pointerDown = input();

setMaxIterations(5);
lightDirection(getRayDirection())
//rotateX(mouse.y*PI);

//rotateY(mouse.x*PI);
let z = audio * .1;
//setStepSize(0.03);
rotateY(-0.1 * z);
let glo = max(1.0-1.0*dot(-1.0*normal,getRayDirection()),0.0);

//let n = noise(floor(getSpace()*10*noise((getSpace()*10) * 40 + time )) * 40 + time );
let n = noise((getSpace()*5*noise((getSpace()*5) * 5 + z )) * 5 + z );
color(vec3(0, 0, .5) + (normal*.5+.5)+n);
//metal(n * 10);
//shine(n * 2*nsin(time));
//  shine(1)
//metal(10);
sphere(0.5 + volume * .1);
//mixGeo(.1)
//box(.5, .5, .2);