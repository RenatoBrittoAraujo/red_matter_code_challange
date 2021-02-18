import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Canvas from './Canvas'
import { MapTwoTone, MyLocationSharp } from '@material-ui/icons';

/*
  About the challange:
    There are many magic numbers floating around here. As this is a code
    challange, I've not taken the proper care to make the code beautiful,
    my objective was solely to fullfill the challange here.
*/

const data = [
  [ 198619, 182327, 96947, 196635],
  [ 190812, 198648, 90738, 190065],
  [ 185989, 195751, 98451, 186084],
  [ 183427, 187377, 81139, 194941],
  [ 195132, 193197, 71631, 186256],
  [ 190417, 198065, 77642, 182257],
  [ 195056, 207627, 59446, 91838],
  [ 183397, 151944, 111610, 111637],
  [ 207692, 191928, 108065, 112038],
  [ 190221, 192832, 115585, 104890],
  [ 193719, 200159, 95359, 83465],
  [ 205421, 178546, 57777, 118342],
  [ 190282, 135992, 105312, 83259],
  [ 122317, 180897, 116984, 42136],
  [ 186234, 147115, 21118, 52353],
  [ 215352, 191865, 35746, 104579],
  [ 127227, 190625, 58608, 126068],
  [ 154717, 200857, 66317, 67820],
  [ 87551, 88180, 99411, 116278],
  [ 70234, 118126, 66264, 79860],
  [ 83333, 106316, 55046, 136022],
  [ 111130, 101929, 29539, 42758],
  [ 59423, 70765, 82492, 59081],
  [ 66899, 111391, 119097, 50261],
  [ 84508, 81086, 131670, 121690],
  [ 106041, 68309, 29146, 39835],
  [ 76734, 103062, 27210, 85928],
  [ 105879, 56701, 129143, 136780],
  [ 86379, 91427, 137619, 58351],
  [ 89941, 51729, 51592, 107206]
]

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center'
  },
  title: {
  }
}));

const line = (ctx, x1, y1, x2, y2) => {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
}

const text = (ctx, params) => {
  const { font, text, x, y } = params
  if (params.style !== undefined) {
    ctx.fillStyle = params.style
  }
  ctx.font = font;
  ctx.fillText(text, x, y);
}

const graphLine = (ctx, params) => {

  const { x1, y1, x2, y2, ib, ie } = params

  // Draw line
  ctx.lineWidth = 3
  line(ctx, x1, y1, x2, y2)

  // Draw markings and text
  ctx.lineWidth = 2
  let counter = 10

  if (x1 == x2) {
    let interval = Math.max(y1, y2) - Math.min(y1, y2)
    interval /= 10
    for (let y = Math.min(y1, y2); y < Math.max(y1, y2); y += interval) {
      line(ctx, x1 - 7, y, x1 + 7, y)
      let text_write = ((Math.abs(ib - ie) / 10) * counter).toString()
      if (text_write.length > 6) text_write = text_write.substring(0, 6)
      text(ctx, {
        font: "Arial black 30px",
        style: "black",
        text: text_write,
        x: x1 - 40,
        y: y + 4
      })
      counter--
    }
  } else if (y1 == y2) {
    let interval = Math.max(x1, x2) - Math.min(x1, x2)
    interval /= 10
    for (let x = Math.max(x1, x2); x > Math.min(x1, x2); x -= interval) {
      line(ctx, x, y1 - 7, x, y1 + 7)
      let text_write = ((Math.abs(ib - ie) / 10) * counter).toString()
      if (text_write.length > 6) text_write = text_write.substring(0, 6)
      text(ctx, {
        font: "Arial black 30px",
        style: "black",
        text: text_write,
        x: x - 12,
        y: y1 + 20
      })
      counter--
    }
  } else {
    throw "Line is not vertical nor horizontal"
  }
}

const createPlotGraph = (ctx, params) => {
  const { x1, x2, y1, y2, ibx, iex, iby, iey } = params
  ctx.strokeStyle = '#000'
  graphLine(ctx, {
    x1: x1,
    y1: y1,
    x2: x1,
    y2: y2,
    ib: ibx,
    ie: iex
  })

  graphLine(ctx, {
    x1: x1,
    y1: y2,
    x2: x2,
    y2: y2,
    ib: iby,
    ie: iey
  })

  ctx.strokeStyle = '#bababa'
  // Horizontal plot lines
  for (let i = 0; i < 10; i++) {
    ctx.lineWidth = 1
    const height = (Math.abs(y1 - y2) / 10) * i + Math.min(y1, y2)
    line(ctx, x1, height, x2, height)
  }
  // Vertical plot lines
  for (let i = 1; i <= 10; i++) {
    ctx.lineWidth = 1
    const width = (Math.abs(x1 - x2) / 10) * i + Math.min(x1, x2)
    line(ctx, width, y1, width, y2)
  }
}

const draw = (ctx, frameCount) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.fillStyle = '#ff0000'

  createPlotGraph(ctx, {
    x1: 100,
    y1: 100,
    x2: 900,
    y2: 900,
    ibx: 0,
    iex: 25000,
    iby: 0,
    iey: 25000
  })


}

function Challange1() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Challange 1</h1>
      <Canvas
        draw={draw}
        style={{
          width: 1000,
          height: 1000
        }}/>
    </div>
  );
}

export default Challange1;
