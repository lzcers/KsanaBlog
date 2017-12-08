<template>
  <div class="lifegame-box">
    <canvas id="lifegame" :style="sizePX" :width="canvasSize" :height="canvasSize"></canvas>
  </div>
</template>

<style>
  .lifegame-box {
    width: 100%;
    padding: 15px;
  }
  #lifegame {
    width: 100%;    
    display: block;
  }
</style>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  data: () => ({
    intervalCode: 0,
    canvasSize: 0
  }),
  computed: {
    sizePX():any {
      if (this.canvasSize != 0)
      return {height: this.canvasSize +'px', width: this.canvasSize +'px'}
    }
  },
  mounted() {
    let myCanvas = <any>document.getElementById("lifegame")
    const canvasSize = Math.round(myCanvas.offsetWidth / 10) * 10 // 减去 padding 占用的空间
    this.canvasSize = canvasSize
    myCanvas.style.width = canvasSize
    myCanvas.style.height = canvasSize
    const matrixSize = canvasSize / 10
    const cellSize = 10
    if (myCanvas == null) return
    myCanvas.addEventListener("mousemove", mousePassCanvas)
    let c = myCanvas.getContext("2d")
    // 初始化细胞矩阵
    let cellMatrix = initCellMatrix(matrixSize)
    //  初始化画布
    //    c.fillStyle='#eeeeee' // 灰色背景色
    c.fillRect(0, 0, canvasSize, canvasSize)
    this.intervalCode = setInterval(Main, 50)
    function Main() {
      let tempM = deepcopy(cellMatrix)
      liveStatusUpdate(tempM)
      mapMatrix(cellMatrix)
    }
    // 初始化细胞矩阵
    function initCellMatrix(size: number) {
      let array = new Array(size)
      for (let i = 0; i < size; i++) {
        array[i] = new Array(size)
        for (let j = 0; j < size; j++) {
          //array[i][j] = 0 // 默认细胞死亡
          array[i][j] = Math.round(Math.random())
        }
      }
      return array
    }
    function deepcopy(obj: any): any {
      let out = [],
        length = obj.length
      for (let i = 0; i < length; i++) {
        if (obj[i] instanceof Array) {
          out[i] = deepcopy(obj[i])
        } else out[i] = obj[i]
      }
      return out
    }
    // 绘制网格
    function drawGrid(interval: any, size: any) {
      for (let i = 0; i <= size; i += interval) {
        // 画行
        c.moveTo(0, i)
        c.lineTo(size, i)
        c.stroke()
        // 画列
        c.moveTo(i, 0)
        c.lineTo(i, size)
        c.stroke()
      }
    }
    // 细胞状态更新
    function liveStatusUpdate(matrix: any) {
      let length = matrix.length
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
          liveRule(i, j, matrix)
        }
      }
    }
    function liveRule(_x: any, _y: any, matrix: any) {
      // 规则1.如果一个细胞周围有三个细胞为生，则该细胞为生
      // 规则2.如果一个细胞周围有2个细胞为生，
      // 规则3.在其它情况下，该细胞为死（即该细胞若原先为生，则转为死，若原先为死，则保持不变）
      let surroundLiveNumber = surroundCell(_x, _y, matrix)
      switch (surroundLiveNumber) {
        case 3:
          cellMatrix[_x][_y] = 1
          return 1
        case 2:
          return -1
        default:
          cellMatrix[_x][_y] = 0
          return 0
      }
    }
    // 细胞周围生存情况
    function surroundCell(_x: any, _y: any, cellMatrix: any) {
      // 映射至细胞矩阵数组坐标
      let liveNumber = 0
      for (let i = _x - 1; i <= _x + 1; i++) {
        for (let j = _y - 1; j <= _y + 1; j++) {
          if (
            i >= 0 &&
            i < cellMatrix.length &&
            (j >= 0 && j < cellMatrix.length) &&
            !(i == _x && j == _y)
          ) {
            liveNumber += cellMatrix[i][j] == 1 ? 1 : 0
          }
        }
      }
      return liveNumber
    }
    // 绘制细胞
    // _x, _y 为细胞矩阵中的坐标，映射至canvas
    function liveCell(_x: any, _y: any) {
      c.fillStyle = "#000000"
      c.fillRect(_x * cellSize, _y * cellSize, cellSize, cellSize)
    }
    // 杀死细胞
    function killCell(_x: any, _y: any) {
      //        c.fillStyle='#eeeeee' // 采用背景色填充
      c.fillStyle = "#ffffff"
      c.fillRect(_x * cellSize, _y * cellSize, cellSize, cellSize)
    }
    // 矩阵状态映射至canvas网格
    function mapMatrix(matrix: any) {
      let length = matrix.length
      for (let x = 0; x < length; x++) {
        for (let y = 0; y < length; y++) {
          matrix[x][y] == 1 ? liveCell(x, y) : killCell(x, y)
        }
      }
    }
    function mousePassCanvas(event: any) {
      let X = event.offsetX
      let Y = event.offsetY

      let offsetMatrixX = Math.floor(X / cellSize)
      let offsetMatrixY = Math.floor(Y / cellSize)

      if (offsetMatrixX < matrixSize && offsetMatrixY < matrixSize)
      cellMatrix[offsetMatrixX][offsetMatrixY] = 1

      mapMatrix(cellMatrix)
    }
  },
  destroyed() {
    clearInterval(this.intervalCode)
  }
})
</script>

