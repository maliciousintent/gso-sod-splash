/*

	-- original --
		HumanizeDuration.js
		http://git.io/j0HgmQ

	-- edit --
		* remove unused languages
		* added Italian
		* return type

*/

;(function() {

	// The main function.
	function humanizeDuration(ms, language, type) {

		// Turn Number objects into primitives.
		if (ms instanceof Number)
			ms = ms.valueOf();

		// Humanizing zero, I see.
		if (ms === 0)
			return '0';

		// We'll put everything in an array and turn that into a string at the end.
		var result = [];

		// Start at the top and keep removing units, bit by bit.
		var unit, unitCount, mightBeHalfUnit;
		for (var i = 0, len = UNITS.length; (i < len) && (ms); i ++) {

			// Store the current unit.
			unit = UNITS[i];

			// If it's a half-unit interval, we're done.
			if (result.length === 0) {
				mightBeHalfUnit = (ms / unit.milliseconds) * 2;
				if (mightBeHalfUnit === Math.floor(mightBeHalfUnit))
					return render(mightBeHalfUnit / 2, unit.name, language);
			}

			// What's the number of full units we can fit?
			unitCount = Math.floor(ms / unit.milliseconds);

			// Add the string.
			if (unitCount)
				result.push(render(unitCount, unit.name, language));

			// Remove what we just figured out.
			ms -= unitCount * unit.milliseconds;

		}

		if (!type || type !== 'array') {
			return result.join(', ');
		} else {
			return result;
		}

	}

	// Start by defining the units and how many ms is in each.
	var UNITS = [
		{ name: 'year', milliseconds: 31557600000 },
		{ name: 'month', milliseconds: 2629800000 },
		{ name: 'week', milliseconds: 604800000 },
		{ name: 'day', milliseconds: 86400000 },
		{ name: 'hour', milliseconds: 3600000 },
		{ name: 'minute', milliseconds: 60000 },
		{ name: 'second', milliseconds: 1000 }/*,
		{ name: 'millisecond', milliseconds: 1 }
		*/
	];

	// A utility function for creating the strings.
	// render(1, 'minute') == '1 minute'
	// render(12, 'hour') == '12 hours'
	// render(2, 'hour', 'it') == '2 ore'
	var render = function(count, word, language) {
		var dictionary = humanizeDuration.LANGUAGES[language || humanizeDuration.language];
		return count + ' ' + dictionary[word](count);
	};

	// What are the languages?
	humanizeDuration.LANGUAGES = {
		en: {
			year: function(c) { return 'year' + ((c !== 1) ? 's' : ''); },
			month: function(c) { return 'month' + ((c !== 1) ? 's' : ''); },
			week: function(c) { return 'week' + ((c !== 1) ? 's' : ''); },
			day: function(c) { return 'day' + ((c !== 1) ? 's' : ''); },
			hour: function(c) { return 'hour' + ((c !== 1) ? 's' : ''); },
			minute: function(c) { return 'minute' + ((c !== 1) ? 's' : ''); },
			second: function(c) { return 'second' + ((c !== 1) ? 's' : ''); },
			millisecond: function(c) { return 'millisecond' + ((c !== 1) ? 's' : ''); }
		},
		it: {
			year: function(c) { return 'ann' + ((c !== 1) ? 'i' : 'o'); },
			month: function(c) { return 'mes' + ((c !== 1) ? 'i' : 'e'); },
			week: function(c) { return 'settiman' + ((c !== 1) ? 'e' :'a'); },
			day: function(c) { return 'giorn' + ((c !== 1) ? 'i' :'o'); },
			hour: function(c) { return 'or' + ((c !== 1) ? 'e' :'a'); },
			minute: function(c) { return 'minut' + ((c !== 1) ? 'i' : 'o'); },
			second: function(c) { return 'second' + ((c !== 1) ? 'i' : 'o'); },
			millisecond: function(c) { return 'millisecond' + ((c !== 1) ? 'i' : 'o' ); }
		}
	};

	// What's the default language?
	humanizeDuration.language = 'en';

	// Export this baby.
	if ((typeof module !== 'undefined') && (module.exports))
		module.exports = humanizeDuration;
	else
		this.humanizeDuration = humanizeDuration;

})();
