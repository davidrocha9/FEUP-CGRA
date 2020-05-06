/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
        super(scene);
        
        this.quad = new MyQuad(this.scene);
		this.quad.initBuffers();
        this.filter = true;
        this.initTextures(this.scene);
    }
    
    initTextures(scene) {
    	this.wood = new CGFappearance(scene);
        this.wood.setAmbient(1, 1, 1, 1.0);
        this.wood.setDiffuse(1, 1, 1, 1.0);
        this.wood.setSpecular(1, 1, 1, 1.0);
        this.wood.setShininess(10.0);
        this.wood.loadTexture('images/wood.jpg');
        this.wood.setTextureWrap('REPEAT', 'REPEAT');
    }

    display(state) {
    	this.wood.apply();
    	if (state == "FALLING"){
			this.scene.scale(0.5, 0.5, 0.5);
			this.scene.pushMatrix();
			this.scene.translate(0,0,0.5);
			this.quad.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
			this.scene.translate(0,0,-0.5);
			this.quad.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
			this.scene.translate(0,0,-0.5);
			this.scene.rotate(Math.PI,0,1,0);
			this.quad.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
			this.scene.rotate(Math.PI/2,0,1,0);
			this.scene.translate(0,0,0.5);
			this.quad.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
			this.scene.rotate(Math.PI/2,0,1,0);
			this.scene.rotate(Math.PI,0,1,0);
			this.scene.translate(0,0,0.5);
			this.quad.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
			this.scene.rotate(-Math.PI/2,1,0,0);
			this.scene.translate(0,0,0.5);
			this.quad.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
			this.scene.rotate(Math.PI/2,1,0,0);
			this.scene.translate(0,0,0.5);
			this.quad.display();
			this.scene.popMatrix();
    	}
    	else if (state == "LANDED"){
    		this.scene.scale(0.5, 0.5, 0.5);
			this.scene.pushMatrix();
			this.scene.rotate(Math.PI/2,1,0,0);
			this.quad.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
			this.scene.rotate(Math.PI/2,1,0,0);
			this.scene.translate(1,0,0);
			this.quad.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
			this.scene.rotate(Math.PI/2,1,0,0);
			this.scene.translate(-1,0,0);
			this.quad.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
			this.scene.rotate(Math.PI/2,1,0,0);
			this.scene.translate(0,1,0);
			this.quad.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
			this.scene.rotate(Math.PI/2,1,0,0);
			this.scene.translate(0,2,0);
			this.quad.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
			this.scene.rotate(Math.PI/2,1,0,0);
			this.scene.translate(0,-1,0);
			this.quad.display();
			this.scene.popMatrix();
    	}
    }
}