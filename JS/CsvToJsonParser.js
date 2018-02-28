class CsvToJsonParser {
	
	constructor(csvFile) {

		//Déclaration des variables
		this.planning = fs.readFileSync(csvFile, 'utf8');
		//this._planningJson = {};
		this.listeArret = null;

		//this.finalJsonObject = null;
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
		//Pour chaque arrêt, parser toutes les horaires et le nom de l'arrêt
		for (i=0; i === tData.length; i++){
			let parsedNextLine = parseNextLine(tData[i]);
		}
	}

	parsedNextLine(tokenizedLine){
		let 
		let separator = /,/;
		let line = tokenizedLine.split(separator);
		this._planningJson[arret] = line.shift();
		let horaireList = [];
		while(line.length > 0){
			horaireList.push(line);
		}
		this._planningJson[horaire] = horaireList;
	}


}