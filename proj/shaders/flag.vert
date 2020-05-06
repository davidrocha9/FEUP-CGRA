attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float timeFactor;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;

void main() {
    vec3 offset=vec3(0.0, 0.0, 0.0);
	
    vTextureCoord = aTextureCoord;
    
    vec4 water_map = texture2D(uSampler2, mod(vec2(0.0,0.1) + vTextureCoord + timeFactor*0.01, 1.0));
    
    offset = aVertexNormal * 0.05 * (water_map.r + water_map.g + water_map.b)/3.0;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
}