class Grid {
	constructor({col, row, size}) {
		this.col = col
		this.row = row
		this.size = size
		this.len = col * row
	}

	go  = (callback) => {
		let index = 0
		for (let i = 0; i < this.row; i ++) {
			for (let j = 0; j < this.col; j ++) {
				callback({col: j, row: i, index})
				index ++
			}
		}
	}
}
