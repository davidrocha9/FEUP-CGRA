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
        
        this.initMaterials(scene);
    }

    initMaterials(scene) {
        //tangram material
        this.newmaterial = new CGFappearance(scene);
        this.newmaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.newmaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.newmaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.newmaterial.setShininess(10.0);
        this.newmaterial.loadTexture('images/tangram.png');
        this.newmaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
    	// ---- BEGIN Primitive drawing section
        this.scene.scale(0.15, 0.15, 0.15);
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

        //Diamond		 
		this.scene.multMatrix(translate);
		this.scene.rotate(Math.PI/4,0,0,1);
		this.newmaterial.apply();
        this.diamond.display();
        this.scene.popMatrix();

        //Pink Triangle
        this.scene.pushMatrix();
        this.scene.translate(-3,1,0);
        this.scene.rotate(-3*Math.PI/4,0,0,1);
        this.scene.scale(sqrt, sqrt, sqrt);
        this.triangle.updateTexCoords([0, 0.5, 0, 1, 0.5, 1]);
        this.triangle.display();
        this.scene.popMatrix();

        //Red Triangle
        this.scene.pushMatrix();
        this.scene.translate(-2,-2,0);
        this.scene.rotate(Math.PI,0,0,1);
        this.triangle.updateTexCoords([0.25, 0.75, 0.5, 0.5, 0.75, 0.75]);
        this.triangle.display();
        this.scene.popMatrix();
         
        //Yellow Parallelogram
        this.scene.pushMatrix();
        this.scene.translate(-1,-5,0);
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.multMatrix(reflex);
        this.scene.scale(sqrt,sqrt,sqrt);
        this.parallelogram.display();
        this.scene.popMatrix();
        
        //Orange Triangle
        this.scene.pushMatrix();
        this.scene.translate(1,-1,0);
        this.scene.scale(2,2,2);
        this.triangle.updateTexCoords([1, 0, 0.5, 0.5, 1, 1]); 
        this.triangle.display();
        this.scene.popMatrix();

        //Blue Triangle
        this.scene.pushMatrix();
        this.scene.translate(3,0,0);
        this.scene.rotate(Math.PI/4,0,0,1);
        this.scene.scale(2.13,2.13,2.13);
        this.triangle.updateTexCoords([0, 0, 0.5, 0.5, 1, 0]);
        this.triangle.display();
        this.scene.popMatrix();
        
        //Purple Triangle
        this.scene.pushMatrix();
        this.scene.translate(5,1,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.triangle.updateTexCoords([0, 0.5, 0.25, 0.25, 0, 0]);
        this.triangle.display();
        this.scene.popMatrix();

        
        
        // ---- END Primitive drawing section
        /*this.newmaterial.apply();
        this.scene.scale(0.15, 0.15, 0.15);
		this.scene.pushMatrix();
        var diamond_trans = [1.0, 0.0, 0.0, 0.0,
                            0.0, 1.0, 0.0, 0.0,
                            0.0, 0.0, 1.0, 0.0,
                            -1.0, 2.0 * Math.sqrt(2), 0.0, 1.0];
        this.scene.multMatrix(diamond_trans);
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        var tri_rot_angle = -45 * Math.PI / 180;
        this.scene.translate(0, Math.sqrt(2), 0);
        this.scene.rotate(tri_rot_angle, 0, 0, 1);
        this.triangle.display();        
        this.scene.popMatrix();

        this.scene.pushMatrix();
        var small_tri_rot_angle = 90 * Math.PI / 180;
        this.scene.translate(0, 2*Math.sqrt(2)+1, 0);
        this.scene.rotate(small_tri_rot_angle, 0, 0, 1);
        this.triangle.updateTexCoords([0, 0, 0.25, 0.25, 0, 0.5]);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        var paralelogram_rot_angle = 45 * Math.PI / 180;
        this.scene.translate(0, - Math.sqrt(2), 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(paralelogram_rot_angle, 0, 0, 1);
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        var big_triangle_rot = -90 * Math.PI / 180;
        this.scene.translate(0, -Math.sqrt(2), 0);
        this.scene.rotate(big_triangle_rot, 0, 0, 1);
        this.triangle.updateTexCoords([0,0,1,0,0.5,0.5]);
        this.triangle.display();
        this.scene.popMatrix();  

        this.scene.pushMatrix();
        big_triangle_rot = (180+45) * Math.PI / 180;
        this.scene.translate(2 - Math.sqrt(2), -2*Math.sqrt(2), 0);
        this.scene.rotate(big_triangle_rot, 0, 0, 1);
        this.triangle.updateTexCoords([1,0,1,1,0.5,0.5]);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        small_tri_rot_angle = -90 * Math.PI / 180;
        this.scene.translate( 2, -3*Math.sqrt(2), 0);
        this.scene.rotate(small_tri_rot_angle, 0, 0, 1);
        this.triangle.updateTexCoords([0.25, 0.75, 0.5, 0.5, 0.75, 0.75]);
        this.triangle.display();
        this.scene.popMatrix();*/
    }

    updateBuffers(complexity) {
    }
}