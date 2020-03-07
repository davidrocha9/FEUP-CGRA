/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0.5, 0.5, 0.5,  //0
			0.5, -0.5, 0.5,   //1
			-0.5, 0.5, 0.5,	  //2
			-0.5, -0.5, 0.5,   //3
			0.5, 0.5, -0.5,  //4
			0.5, -0.5, -0.5,   //5
			-0.5, 0.5, -0.5,	  //6
			-0.5, -0.5, -0.5    //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
		    2, 1, 0,
		    2, 3, 1,
		    4, 5, 6,
		    7, 6, 5,
		    0, 1, 5,
		    5, 4, 0,
		    0, 4, 6,
		    6, 2, 0,
		    2, 6, 7,
		    7, 3, 2,
		    3, 7, 5,
		    5, 1, 3
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}