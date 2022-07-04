class Punkt {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static nazwa = "Punkt";
    static odleglosc(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.sqrt(dx*dx + dy*dy);
    }
  }
  
  const p1 = new Punkt(5, 5);
  const p2 = new Punkt(10, 10);
  p1.nazwa; // undefined
  p1.odleglosc; // undefined
  p2.nazwa; // undefined
  p2.odleglosc; // undefined
  
  console.log(Punkt.nazwa); // "Punkt"
  console.log(Punkt.odleglosc(p1, p2)); // 7.0710678118654755

  //

  