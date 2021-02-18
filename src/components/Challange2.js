import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Canvas from './Canvas'
import { createPlotGraph } from './plot';
import { insideOrEdgePolygon } from './geometry'

/*
  About the challange:
    There are many magic numbers floating around here. As this is a code
    challange, I've not taken the proper care to make the code beautiful,
    my objective was solely to fullfill the challange here.
*/

const data = [
  [ 198619, 182327, 96947, 196635],
  [ 200000, 200000, 1,1 ],
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

const polygon = [
  [ 200000, 100000 ],
  [ 230000, 180000 ],
  [ 200000, 200000 ],
  [ 200000, 230000 ],
  [ 110000, 220000 ],
  [ 100000, 180000 ]
]

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center'
  },
  title: {
  }
}));

const color_coded_points = data

const paintPoints = () => {
  for (let i in color_coded_points) {
    const point = color_coded_points[i]
    const x = point[0]
    const y = point[1]
    if (insideOrEdgePolygon(x, y, polygon)) {
      color_coded_points[i] = [x, y, 'red']
    } else {
      color_coded_points[i] = [x, y, 'black']
    }
  }
}

const draw = (ctx, frameCount) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.fillStyle = '#ff0000'

  const plot = createPlotGraph(ctx, {
    x1: 100,
    y1: 100,
    x2: 900,
    y2: 900,
    ibx: 0,
    iex: 250000,
    iby: 0,
    iey: 250000
  })

  for (const point of color_coded_points) {
    const x = point[0]
    const y = point[1]
    const color = point[2]
    plot.addPoint(x, y, color)
  }

  plot.addPolygon(polygon, 'blue')
}

function Challange2() {
  const classes = useStyles();
  paintPoints()
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Challange 2</h1>
      <Canvas
        draw={draw}
        style={{
          width: 1000,
          height: 1000
        }}/>
    </div>
  );
}

export default Challange2;
