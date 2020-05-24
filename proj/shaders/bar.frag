#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;
varying vec4 normal;

uniform int drops;

void main() {
    if (coords.x + 0.5 <= float(drops)/5.0){
		gl_FragColor.rgb =  vec3(1.0 - 3.5*coords.x + 0.8, 0.8 + 3.5*coords.x, 0);
        //gl_FragColor.rgb =  vec3(1.0 - (0.6 + coords.x / 0.6), 0.6 + coords.x / 0.6, 0);
		gl_FragColor.a = 1.0;
	}
	else
        gl_FragColor = vec4(0.25, 0.25, 0.25, 1);
}