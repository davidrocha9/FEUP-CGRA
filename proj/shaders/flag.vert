attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float time;
uniform float speed;

varying vec2 vTextureCoord;


void main() {
	vTextureCoord = aTextureCoord;

	//vec3 offset=vec3(0.0,0.0,0.4 * (aVertexPosition.x + 0.5) * sin(time+aVertexPosition.x+abs(speed*3.0)));
	vec3 offset=vec3(0.0,0.0, sin(time*(speed*5.0+0.1) + 15.0*(aVertexPosition.x+0.5))*0.1);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
}