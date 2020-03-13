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
		this.scene.materials[11].apply();
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3,1,0);
        this.scene.rotate(-3*Math.PI/4,0,0,1);
        this.scene.scale(sqrt, sqrt, sqrt);
        this.scene.materials[5].apply();
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2,-2,0);
        this.scene.rotate(Math.PI,0,0,1);
        this.scene.materials[6].apply();
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1,-5,0);
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.multMatrix(reflex);
        this.scene.scale(sqrt,sqrt,sqrt);
        this.scene.materials[7].apply();   
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1,-1,0);
        this.scene.scale(2,2,2);
        this.scene.materials[8].apply(); 
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3,0,0);
        this.scene.rotate(Math.PI/4,0,0,1);
        this.scene.scale(2.13,2.13,2.13);
        this.scene.materials[9].apply(); 
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5,1,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.scene.materials[10].apply(); 
        this.triangle.display();
        this.scene.popMatrix();
        
    }

    updateBuffers(complexity){
        this.initBuffers();
        this.initNormalVizBuffers();
    }

    enableNormalViz() {
        this.diamond.enableNormalViz();
		this.triangle.enableNormalViz();
		this.parallelogram.enableNormalViz();
		this.triangleSmall.enableNormalViz();
        this.triangleBig.enableNormalViz();
    }

    disableNormalViz() {
        this.diamond.disableNormalViz();
		this.triangle.disableNormalViz();
		this.parallelogram.disableNormalViz();
		this.triangleSmall.disableNormalViz();
        this.triangleBig.disableNormalViz();
    }
}