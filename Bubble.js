class Bubble {
  constructor(x, y, r) {
    this.r = r;
    this.c = color(random(200), random(255), 255);
    this.body = Bodies.circle(x, y, r, {
      restitution: 0.3,
      frictionAir: 0.02,
    });
    Composite.add(engine.world, this.body);
  }

  display() {
    let pos = this.body.position;
    stroke(this.c);
    noFill();
    circle(pos.x, pos.y, this.r * 2);
  }
}
