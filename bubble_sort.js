(function(){
'use strict';

var arr = new Array(9, 5, 1, 2, 0, 3, 7, 4, 8, 6);

// ソート前
console.log(arr);

for (var i = 0; i < arr.length; i++) {
	for (var k = 1; k < arr.length - i; k++) {
		if (arr[k - 1] > arr[k]) {
			var temp = arr[k];
			arr[k] = arr[k - 1];
			arr[k - 1] = temp;
		}
	}
}

// ソート後
console.log(arr);
})();
