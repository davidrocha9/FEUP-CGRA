const SupplyStates = {
    INACTIVE:0,
    FALLING:1,
    LANDED:2
};

class MySupply extends CGFobject {
	constructor(scene) {
		super(scene);
	    this.box = new MySupplyCrate(this.scene);
        this.state=SupplyStates.INACTIVE;
        this.x=0;
        this.y=-7;
        this.z=0;
        this.time = 0;
        this.elapsedTime = 0;
        this.totalTime = 0;
    }
    update(t){
        if(this.state==SupplyStates.FALLING){
        	if (this.time == 0){
    		    this.time = t;
		    }
			this.elapsedTime = (t - this.time) / 1000.0;
			this.totalTime += this.elapsedTime;
			this.time = t;
			if (this.y < - 23.8){
				this.land();
			}
        	this.y -= (this.elapsedTime*(17/3.0));
        	console.log(this.totalTime);
        }
    }

    drop(x,z){
        this.state=SupplyStates.FALLING;
        this.x=x;
        this.z=z;
    }

    land(){
    	this.state = SupplyStates.LANDED;
    	this.elapsedTime = 0;
    	this.time = 0;
    	this.totalTime = 0;
    }
    
    reset(){
    	this.elapsedTime = 0;
    	this.time = 0;
    	this.totalTime = 0;
		this.y = -7;
		this.state = SupplyStates.INACTIVE;
    }

    display(){
        if(this.state == SupplyStates.FALLING){
            this.scene.pushMatrix();
            this.scene.translate(this.x,this.y,this.z);
            this.box.display("FALLING");
            this.scene.popMatrix();
        }

        if(this.state == SupplyStates.LANDED){
            this.scene.pushMatrix();
            this.scene.translate(this.x,this.y,this.z);
            this.box.display("LANDED");
            this.scene.popMatrix();
        }
    }
}