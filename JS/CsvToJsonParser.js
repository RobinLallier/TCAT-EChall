class CsvToJsonParser {
	
	constructor(csvFile) {

		//Déclaration des variables
		this.planning = fs.readFileSync(csvFile, 'utf8');
		this._planningJson = {};
		this.finalJsonObject = null;
	}


	tokenize(){
		//transforme le fichier en entrée en un tableau ou chaque case 
		//correspond aux horaires d'un arrêt
		let separator = /\r\n/;
		let data = this.planning;
		data = data.split(separator);
		return data;
	}

	parse(){
		var tData = this.tokenize();
		//Pour chaque arrêt, parser puis retourner le nom de l'arrêt voulu
		for (i=0; i === tData.length; i++){
			let parsedNextLine = parseNextLine(tData[i]);
		}
	}

	parsedNextLine(tokenizedLine){
		let separator = /,/;
		let line = tokenizedLine.split(separator);
		this._planningJson[arret] = line.shift();
		let interventionList = [];
		while(line.length > 0){
			
		}
	}


}