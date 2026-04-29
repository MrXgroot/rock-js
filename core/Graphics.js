class Graphics {
  /** @param {string} canvasId */
  constructor(canvasId) {
    const canvasElement = document.getElementById(canvasId);
    if (!(canvasElement instanceof HTMLCanvasElement)) {
      throw new Error(`Element ${canvasId} is not a canvas.`);
    }
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext('2d');

    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  /**
   * @param {Object} options
   * @param {number} options.x - Center X
   * @param {number} options.y - Center Y
   * @param {number} options.w - Width
   * @param {number} options.h - Height
   * @param {string} [options.color] -The CSS color string (Hex,RGB,or Name).
   */

  drawRect({ x, y, w, h, color }) {
    this.ctx.save();
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x - w / 2, y - h / 2, w, h);
    this.ctx.restore();
  }

  /**
   * @param {object} options
   * @param {number} options.x - Center X
   * @param {number} options.y - Center Y
   * @param {number} options.r - radius
   * @param {string} [options.color] -The CSS color string (Hex,RGB,or Name).
   */
  drawCircle({ x, y, r, color }) {
    this.ctx.save();
    this.ctx?.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.arc(x, y, r, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }

  clear() {
    this.ctx?.clearRect(0, 0, this.width, this.height);
  }
}

export default Graphics;
