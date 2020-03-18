class Grid {
	constructor({col = 10, row = 10, size = 50}) {
		this.col = col
		this.row = row
		this.size = size
		this.len = col * row
	}

	go  = (callback) => {
		for (let i = 0; i < this.row; i ++) {
			for (let j = 0; j < this.col; j ++) {
				callback({col: j, row: i, index: i * this.col + j})
			}
		}
	}
}
