function test(){
	integrationTest();
	console.log('*****************************************')
	isNumberTest();

}


function isNumberTest(){
	var testArray = {
		'99999':true,
		'010':false, 
		'0.999999999999999999999999999999999':false,
		'1.999999999999999999999999999999999':false,
		'1.000000000000000000000000000000001':false,
		'00000000000000000000000000000000001':false,
		"99999あ":false,
		'0000a':false,
		'0000':false,
		'1.00000000000000011E001':false,
	}
	for(var key in testArray){
		if(isNumber(key) == testArray[key]){
			console.log(key + " : OK")
		}
		else {
			console.error(key + " : NG")
		}
	}
	
}

function integrationTest(){
	var testArray = [
		['99999', '99999', '99999', '正三角形'],
		['99999', '99999', '1', '二等辺三角形'],
		['1', '99999', '99999', '二等辺三角形'],
		['99999', '1', '99999', '二等辺三角形'],
		['99999', '99998', '99997', '不等辺三角形'],
		['1', '2', '3', '三角形が成立しません'],
		['2', '1', '3', '三角形が成立しません'],
		['3', '2', '1', '三角形が成立しません'],
		['99999', '2', '3', '三角形が成立しません'],
		['2', '99999', '3', '三角形が成立しません'],
		['2', '3', '99999', '三角形が成立しません'],
		['0', '1', '1', '入力は1~99999の整数のみです'],
		['1', '0', '1', '入力は1~99999の整数のみです'],
		['1', '1', '0', '入力は1~99999の整数のみです'],
		['-2', '3', '3', '入力は1~99999の整数のみです'],
		['2', 'a', '3', '入力は1~99999の整数のみです'],
		['2', 'あ1', '3', '入力は1~99999の整数のみです'],
		['2', '1', '1a', '入力は1~99999の整数のみです'],
		['3', '4', '', '入力は1~99999の整数のみです'],
		['0.99999999999999999999', '1', '1', '入力は1~99999の整数のみです'],
		['1.00000000000000000001', '1', '1', '入力は1~99999の整数のみです'],
		['0100', '1', '1', '入力は1~99999の整数のみです'],
		['1.0000000000000000011E001', '010', '10.0', '入力は1~99999の整数のみです'],
		['10', '010', '10.0', '入力は1~99999の整数のみです'],
		['.', '10', '10', '入力は1~99999の整数のみです'],
		['10.', '10', '10', '入力は1~99999の整数のみです'],
		['999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999', '999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999', '999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999', '入力は1~99999の整数のみです'],
		['100000', '99999', '99999','入力は1~99999の整数のみです'],
		['00000', '99999', '99999','入力は1~99999の整数のみです'],
		['00a', '99999', '99999','入力は1~99999の整数のみです'],
		['30.1', '30', '30','入力は1~99999の整数のみです'],
		['表示', '30', '30','入力は1~99999の整数のみです'],
		['.30', '30', '30','入力は1~99999の整数のみです'],
		['1.1', '1.1', '1.1','入力は1~99999の整数のみです'],
		[null, '99999', '99999','入力は1~99999の整数のみです'],
		['99999', null, '99999','入力は1~99999の整数のみです'],
		['99999', '99999', null,'入力は1~99999の整数のみです'],
		[' ', '99999', '99999','入力は1~99999の整数のみです'],
		['\n', '99999', '99999','入力は1~99999の整数のみです'],
		['#{E04A}', '99999', '99999','入力は1~99999の整数のみです'],
		['&#x1f40d;', '99999', '99999','入力は1~99999の整数のみです'],
		['&#9728', '99999', '99999','入力は1~99999の整数のみです'],
		['1.', '2', '2','入力は1~99999の整数のみです']
	];

	for(var i = 0; i < testArray.length; i++){
		var side = [testArray[i][0], testArray[i][1], testArray[i][2]];
		ans = main(side);
		if(ans === testArray[i][3]){
			console.log(testArray[i] + ' : OK');
		}
		else{
			console.error(testArray[i] + ' : NG : ans = ' + ans);
		}
	}
}