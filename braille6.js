// 6 dots braille parameters

// dotMap: the dot numbering from x, y coordinates:

// 6-dot Braille numbering
//
//    x: 0 1
// y
// 1     1 4
// 2     2 5
// 3     3 6

languages['6 dots'] = {
	dotMap: {
		0: {
			0: 1,
			1: 2, 
			2: 3
		},
		1: {
			0: 4,
			1: 5,
			2: 6
		}
	},
	numberPrefix: [3, 4, 5, 6],
	latinToBraille: {
		"a": [1],
		"b": [1,2],
		"c": [1,4],
		"d": [1,4,5],
		"e": [1,5],
		"f": [1,2,4],
		"g": [1,2,4,5],
		"h": [1,2,5],
		"i": [2,4],
		"j": [2,4,5],
		"k": [1,3],
		"l": [1,2,3],
		"m": [1,3,4],
		"n": [1,3,4,5],
		"o": [1,3,5],
		"p": [1,2,3,4],
		"q": [1,2,3,4,5],
		"r": [1,2,3,5],
		"s": [2,3,4],
		"t": [2,3,4,5],
		"u": [1,3,6],
		"v": [1,2,3,6],
		"w": [2,4,5,6],
		"x": [1,3,4,6],
		"y": [1,3,4,5,6],
		"z": [1,3,5,6],
		" ": [],
		".": [3],
		",": [2],
		"?": [2,6],
		";": [2,3],
		":": [2,4],
		"!": [2,3,5],
		"(": [1,2,6],
		")": [3,4,5],
		"'": [3],
		"-": [3,6],
		//"/": TODO: são dois caracteres: 6 e outro 2
		"*": [3,5],
		"+": [2,3,5],
		"=": [2,3,5,6],
		"&": [1, 2, 3, 4, 6],

		"0": [2, 4, 5],
		"1": [1],
		"2": [1, 2],
		"3": [1, 4],
		"4": [1, 4, 5],
		"5": [1, 5],
		"6": [1, 2, 4],
		"7": [1, 2, 4, 5],
		"8": [1, 2, 5],
		"9": [2, 4],
		
		"á": [1, 2, 3, 5, 6],
		"à": [1, 2, 4, 6],
		"â": [1, 6],
		"ã": [3, 4, 5],
		//"è": [2, 3, 4, 6],
		"é": [1, 2, 3, 4, 5, 6],
		"ê": [1, 2, 6],
		//"ë": [1, 2, 6],
		"í": [3, 4],
		//"î": [1, 4, 6],
		//"ï": [1, 2, 4, 5, 6],
		"ó": [3, 4, 6],
		"ô": [1, 4, 5, 6],
		"õ": [2, 4, 6],
		"ú": [2, 3, 4, 5, 6],
		//"ù": [2, 3, 4, 5, 6],
		//"û": [1, 5, 6],
		//"ü": [1, 2, 5, 6],
		"ç": [1,2, 3, 4, 6]		
	}
}
