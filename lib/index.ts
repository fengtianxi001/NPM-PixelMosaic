interface optionsProp {
	src: string
	nw: number
	nh: number
}

class Mosaic {
	private nw: number
	private nh: number
	private canvas: HTMLCanvasElement
	private ctx: CanvasRenderingContext2D | null
	private image: HTMLImageElement
	private uw: number
	private uh: number
	private width: number
	private height: number
	constructor(options: optionsProp) {
		const src = options.src
		this.width = 0
		this.height = 0
		this.uw = 1
		this.uh = 1
		this.nw = (options.nw || 50) / 200
		this.nh = (options.nh || 50) / 200

		this.canvas = document.createElement('canvas')
		this.ctx = this.canvas.getContext('2d')
		this.image = new Image()
		this.image.src = src
		this.image.onload = this.onload.bind(this)
	}
	onload() {
		const { image, canvas, ctx, nw, nh } = this

		const { width, height } = image
		this.uw = Math.ceil(width * nw)
		this.uh = Math.ceil(height * nh)
		canvas.width = width
		canvas.height = height
		ctx?.drawImage(image, 0, 0)
		this.height = height
		this.width = width
		this.mosaic()
	}
	mosaic() {
		const { width, height, uw, uh } = this
		const ctx = this.ctx as CanvasRenderingContext2D
		for (let row = 1; row - 1 <= height / uh; row++) {
			for (let col = 1; col - 1 <= width / uw; col++) {
				const pos = [(col - 1) * uw, (row - 1) * uh, uw, uh] as [number, number, number, number]
				ctx.fillStyle = this.fetchStyle(pos)
				ctx.fillRect(...pos)
			}
		}
	}
	fetchStyle(pos: [number, number, number, number]): string {
		const ctx = this.ctx as CanvasRenderingContext2D
		const { data } = ctx.getImageData(...pos)
		let r = 0
		let g = 0
		let b = 0
		let a = 0
		const leng = data.length / 4
		for (let i = 0; i <= leng; i += 4) {
			r += data[i]
			g += data[i + 1]
			b += data[i + 2]
			a += data[i + 3]
		}
		r = Math.floor((r / leng) * 4)
		g = Math.floor((g / leng) * 4)
		b = Math.floor((b / leng) * 4)
		a = Math.floor((a / leng) * 4)
		return `rgba(${r},${g},${b})`
	}
}

export default Mosaic
