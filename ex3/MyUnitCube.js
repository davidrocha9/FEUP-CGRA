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
			0.5, 0.5, 0.5,  //0
			0.5, 0.5, 0.5,  //0
			0.5, -0.5, 0.5,   //1
			0.5, -0.5, 0.5,   //1
			0.5, -0.5, 0.5,   //1
			-0.5, 0.5, 0.5,	  //2
			-0.5, 0.5, 0.5,	  //2
			-0.5, 0.5, 0.5,	  //2
			-0.5, -0.5, 0.5,   //3
			-0.5, -0.5, 0.5,   //3
			-0.5, -0.5, 0.5,   //3
			0.5, 0.5, -0.5,  //4
			0.5, 0.5, -0.5,  //4
			0.5, 0.5, -0.5,  //4
			0.5, -0.5, -0.5,   //5
			0.5, -0.5, -0.5,   //5
			0.5, -0.5, -0.5,   //5
			-0.5, 0.5, -0.5,	  //6
			-0.5, 0.5, -0.5,	  //6
			-0.5, 0.5, -0.5,	  //6
			-0.5, -0.5, -0.5,    //7
			-0.5, -0.5, -0.5,    //7
			-0.5, -0.5, -0.5,    //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
		    6, 3, 0,
		    6, 9, 3,
		    12, 15, 18,
		    21, 18, 15,
		    0, 3, 15,
		    15, 12, 0,
		    0, 12, 18,
		    18, 6, 0,
		    6, 18, 21,
		    21, 9, 6,
		    9, 21, 15,
		    15, 3, 9
		];

		this.normals = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1,
            1, 0, 0,
            0, -1, 0,
            0, 0, 1,
            -1, 0, 0,
            0, 1, 0,
            0, 0, 1,
            -1, 0, 0,
            0, -1, 0,
            0, 0, 1,
            1, 0, 0,
            0, 1, 0,
            0, 0, -1,
            1, 0, 0,
            0, -1, 0,
            0, 0, -1,
            -1, 0, 0,
            0, 1, 0,
            0, 0, -1,
            -1, 0, 0,
            0, -1, 0,
            0, 0, -1
        ];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	updateBuffers(complexity){
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}