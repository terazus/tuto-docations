/** Class to create and manipulate small gene features
* @param {String} name - The name of the feature
* @param {String} sequence - The sequence of the feature
*/
class GeneFeature {

	constructor(name, sequence) {
		let _name = name;
		let _sequence = sequence;

		/** Getter for the feature name
		 * @returns {String} name
		 */
		this.getName = function(){
			return _name
		};

		/** Getter for the feature sequence
		 * @returns {String} sequence
		 */
		this.getSequence = function(){
			return _sequence
		};
	}

	/** This method transcribes the feature by replacing Ts with Us
	 * @returns {String} sequence - the RNA sequence transcribed from the DNA sequence
	 */
	transcribe = function(){
		return this.getSequence().replace(/T/g, 'U');
	}
}