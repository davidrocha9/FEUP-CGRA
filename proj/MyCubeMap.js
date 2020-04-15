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
		this.initBuffers(scene);
		this.initTextures(this.scene);
        this.filter = true;
    }
       
    initTextures(scene) {
    	this.quadFront = new CGFappearance(scene);
        this.quadFront.setAmbient(1, 1, 1, 1.0);
        this.quadFront.setDiffuse(1, 1, 1, 1.0);
        this.quadFront.setSpecular(1, 1, 1, 1.0);
        this.quadFront.setShininess(10.0);
        this.quadFront.loadTexture('images/split_cubemap/front.png');
        this.quadFront.setTextureWrap('REPEAT', 'REPEAT');

        this.quadBack = new CGFappearance(scene);
        this.quadBack.setAmbient(1, 1, 1, 1.0);
        this.quadBack.setDiffuse(1, 1, 1, 1.0);
        this.quadBack.setSpecular(1, 1, 1, 1.0);
        this.quadBack.setShininess(10.0);
        this.quadBack.loadTexture('images/split_cubemap/back.png');
        this.quadBack.setTextureWrap('REPEAT', 'REPEAT');

        this.quadLeft = new CGFappearance(scene);
        this.quadLeft.setAmbient(1, 1, 1, 1.0);
        this.quadLeft.setDiffuse(1, 1, 1, 1.0);
        this.quadLeft.setSpecular(1, 1, 1, 1.0);
        this.quadLeft.setShininess(10.0);
        this.quadLeft.loadTexture('images/split_cubemap/left.png');
        this.quadLeft.setTextureWrap('REPEAT', 'REPEAT');

        this.quadRight = new CGFappearance(scene);
        this.quadRight.setAmbient(1, 1, 1, 1.0);
        this.quadRight.setDiffuse(1, 1, 1, 1.0);
        this.quadRight.setSpecular(1, 1, 1, 1.0);
        this.quadRight.setShininess(10.0);
        this.quadRight.loadTexture('images/split_cubemap/right.png');
        this.quadRight.setTextureWrap('REPEAT', 'REPEAT');

        this.quadTop = new CGFappearance(scene);
        this.quadTop.setAmbient(1, 1, 1, 1.0);
        this.quadTop.setDiffuse(1, 1, 1, 1.0);
        this.quadTop.setSpecular(1, 1, 1, 1.0);
        this.quadTop.setShininess(10.0);
        this.quadTop.loadTexture('images/split_cubemap/top.png');
        this.quadTop.setTextureWrap('REPEAT', 'REPEAT');

        this.quadBottom = new CGFappearance(scene);
        this.quadBottom.setAmbient(1, 1, 1, 1.0);
        this.quadBottom.setDiffuse(1, 1, 1, 1.0);
        this.quadBottom.setSpecular(1, 1, 1, 1.0);
        this.quadBottom.setShininess(10.0);
        this.quadBottom.loadTexture('images/split_cubemap/bottom.png');
        this.quadBottom.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
    	this.scene.scale(50, 50, 50);

    	this.quadFront.apply();
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.quad.display();
        this.scene.popMatrix();
        
        this.quadBack.apply();
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI,0,1,0);
        this.quad.display();
        this.scene.popMatrix();
        
        this.quadRight.apply();
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.translate(0,0,0.5);
        this.quad.display();
        this.scene.popMatrix();
        
        this.quadLeft.apply();
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.translate(0,0,0.5);
        this.quad.display();
        this.scene.popMatrix();
        
        this.quadTop.apply();
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.scene.translate(0,0,0.5);
        this.quad.display();
        this.scene.popMatrix();
        
        this.quadBottom.apply();
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.translate(0,0,0.5);
        this.quad.display();
        this.scene.popMatrix();
    }

    updateTexture(){
        if(this.scene.selectedTexture==0){
            this.quadLeft.loadTexture('images/split_cubemap/left.png');
            this.quadRight.loadTexture('images/split_cubemap/right.png');
            this.quadFront.loadTexture('images/split_cubemap/front.png');
            this.quadBack.loadTexture('images/split_cubemap/back.png');
            this.quadTop.loadTexture('images/split_cubemap/top.png');
            this.quadBottom.loadTexture('images/split_cubemap/bottom.png');
        }
        else if(this.scene.selectedTexture==1){
            this.quadLeft.loadTexture('images/split_forest/left.png');
            this.quadRight.loadTexture('images/split_forest/right.png');
            this.quadFront.loadTexture('images/split_forest/front.png');
            this.quadBack.loadTexture('images/split_forest/back.png');
            this.quadTop.loadTexture('images/split_forest/top.png');
            this.quadBottom.loadTexture('images/split_forest/bottom.png');
        }
    }
}