import './style.css';
import P5 from "p5";

const sketch = (p5: P5) => {

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
  };

  p5.draw = () => {
    p5.background(100);

    p5.ellipse(window.innerWidth / 2, window.innerHeight / 2, 150, 150);
  };

};

new P5(sketch);