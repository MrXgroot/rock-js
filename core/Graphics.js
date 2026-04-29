class Graphics {
  /** @param {string} canvasId */
  constructor(canvasId) {
    const canvasElement = document.getElementById(canvasId);
    if (!(canvasElement instanceof HTMLCanvasElement)) {
      throw new Error(`Element ${canvasId} is not a canvas.`);
    }
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.dpr = window.devicePixelRatio;
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * this.dpr;
    this.canvas.height = rect.height * this.dpr;
  }

  /**
   * @param {Object} options
   * @param {number} options.x - Center X
   * @param {number} options.y - Center Y
   * @param {number} options.w - Width
   * @param {number} options.h - Height
   * @param {string} [options.color] -The CSS color string (Hex,RGB,or Name).
   */

  drawRect({ x, y, width, height, color }) {
    this.ctx.save();
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x - width / 2, y - height / 2, width, height);
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
