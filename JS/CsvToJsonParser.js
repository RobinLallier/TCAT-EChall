class CsvToJsonParser {
	
	constructor(csvFile) {

		//Déclaration des variables
		this.planning = fs.readFileSync(csvFile, 'utf8');
		this._planningJson = {};

	}


	CsvToJsonParser.prototype.tokenize = function(data){
		let separator = /\r\n| , /;
		data = data.split(separator);
		data = data.filter()
	}
}