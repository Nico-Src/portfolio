let audio = input();
let volume = input();
let pointerDown = input();
let scale=4.5;
setMaxIterations(20)
let s=getRayDirection();
let n= noise(s*scale+vec3(audio/2, audio/5, 0) + noise(s*scale+vec3(audio*0.1,0, 0)))
setStepSize(0.3)
color(vec3(n)*0.5+0.5)
color(0, (n)*0.1+0.1, (n)*.5+.5)
sphere(0.9+0.2*n+volume*1);