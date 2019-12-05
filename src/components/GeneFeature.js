import {codons} from './codon.js';

/** Class to create and manipulate small gene features
 * @param {String} name - The name of the feature
 * @param {String} sequence - The sequence of the feature
 */
class GeneFeature {

	constructor(name, sequence) {
		let _name = name;
		let _sequence = sequence;

        /** Imported object mapping between the codons and the amino acids
         */
		this.mapping = codons;

        /** Getter for the feature name
         * @returns {String}
         */
        this.getName = function(){
            return _name;
        };

        /** Getter for the feature sequence
         * @returns {String} sequence
         */
        this.getSequence = function(){
            return _sequence;
        };
	}

	/** This method transcribes the feature by replacing Ts with Us
     * @returns {String} sequence - the RNA sequence transcribed from the DNA sequence
	 */
	transcribe(){
		return this.getSequence().replace(/T/g, "U");
	};

	/** This method translate the transcribe into a protein primary sequence.
     * @returns {string} translate - the protein primary sequence translated from that DNA feature
	 */
	translate(){
		let translated = "";

		let Gene = this;
		let sequence_array = Gene.transcribe().match(/.{1,3}/g);
		sequence_array.forEach(function(seq){
			if (seq.includes("X")){
				throw 'X is unsupported at the moment';
			}
			if (Gene.mapping[seq] === "Stop" || seq.length < 3){
				return translated;
			}
			if (Gene.mapping[seq] === undefined){
				throw "Undefined codon in the input sequence";
			}
			translated += Gene.mapping[seq];
		});
		return translated;
	}
}

export default GeneFeature;