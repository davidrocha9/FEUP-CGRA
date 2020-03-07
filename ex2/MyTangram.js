/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        
        this.diamond = new MyDiamond(this.scene);
		this.diamond.initBuffers();
        this.triangle = new MyTriangle(this.scene);
		this.triangle.initBuffers();
        this.parallelogram = new MyParallelogram(this.scene);
		this.parallelogram.initBuffers();
        this.triangleSmall = new MyTriangleSmall(this.scene);
		this.triangleSmall.initBuffers();
        this.triangleBig = new MyTriangleBig(this.scene);
		this.triangleBig.initBuffers();
    }
    
    display() {
        var sqrt = Math.sqrt(2);
        this.scene.pushMatrix();
        var translate = [1.0, 0.0, 0.0, 0.0,
                        0.0, 1.0, 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        -2.0, 0.0, 0.0, 1.0];

        var reflex = [-1.0, 0.0, 0.0, 0.0,
                        0.0, 1.0, 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        0.0, 0.0, 0.0, 1.0]

		 
		this.scene.multMatrix(translate);
		this.scene.rotate(Math.PI/4,0,0,1);
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3,1,0);
        this.scene.rotate(-3*Math.PI/4,0,0,1);
        this.scene.scale(sqrt, sqrt, sqrt);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2,-2,0);
        this.scene.rotate(Math.PI,0,0,1);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1,-5,0);
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.multMatrix(reflex);
        this.scene.scale(sqrt,sqrt,sqrt);   
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1,-1,0);
        this.scene.scale(2,2,2);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3,0,0);
        this.scene.rotate(Math.PI/4,0,0,1);
        this.scene.scale(2.13,2.13,2.13);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5,1,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.triangle.display();
        this.scene.popMatrix();
        
    }
}