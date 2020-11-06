class BiteFish extends Fish {

  constructor(options) {
    super(options);
    this.height = 90;
    this.width = 90;

  }

  onClick(event) {
    this.makeNewVelocity(50);
  }


}
