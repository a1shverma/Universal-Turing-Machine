var tape = [];
tape.push('B');
var rem = 0;
var quo = 0;

main();

function main() {
	putstr("Enter the operation to perform: `p` or `/`: ");
	var operation = readline();

	if(operation[0] == 'p') {
		putstr("Enter a natural number: ");
		var num = parseInt(readline());
		if(num % 1 !== 0 || num < 1) {
			print("Invalid input.");
			return 0;
		}
		while(num){
			tape.push(1);
			num--;
		}
		tape.push(0);
		tape.push('B');
		p1(tape, 0);
	}
	else 
	if(operation[0] == '/') {
		putstr("Enter a natural number: ")
		var a = parseInt(readline());
		putstr("Enter another natural number: ")
		var b = parseInt(readline());
		if(a % 1 !== 0 || b % 1 !== 0 || a < 0 || b < 1) {
			print("Invalid input.");
			return;
		}
		while(a) {
			tape.push(1);
			a--;
		}
		tape.push(0);
		while(b) {
			tape.push(1);
			b--;
		}
		tape.push('0');
		tape.push('B');
		// print(tape);
		d0(tape, 1);
	}
	else {
		print("Invalid input.");
		return;
	}
}

function p1(arr, index) {
	// print("in 1");
	index++;
	p2(arr, index);
	return;
}

function p2(arr, index) {
	// print("in 2");
	if(arr[index] == 1) {
		index++;
		p3(arr, index);
		return;
	}
	if(arr[index] == 0) {
		index--;
		p7(arr, index);
		return;
	}
}

function p3(arr, index) {
	// print("in 3");
	if(arr[index] == 1) {
		arr[index] = 'D';
		index++;
		p4(arr, index);
		return;
	}
	if(arr[index] == 0){
		index--;
		p7(arr, index);
		return;
	}
}

function p4(arr, index) {
	// print("in 4");
	while(arr[index] == 0 || arr[index] == 1) {
		index++;
	}
	if(arr[index] == 'B'){
		arr[index] = 1;
		index++;
		p5(arr, index);
		return;
	}
}

function p5(arr, index) {
	// print("in 5");
	tape.push('B');
	index--;
	p6(arr, index);
	return;
}

function p6(arr, index) {
	// print("In 6");
	while(arr[index] == 0 || arr[index] == 1) {
		index--;
	}
	if(arr[index] == 'D') {
		arr[index] = 1;
		index++;
		p2(arr, index);
		return;
	}
}

function p7(arr, index) {
	// print("in 7");
	// print(tape);
	if(arr[index] == 'D') {
		index++;
		p8(arr, index);
		return;
	}
	if(arr[index] == 1) {
		index++;
		p14(arr, index);
		return;
	}
}

function p8(arr, index) {
	// print("in 8");
	if(arr[index] == '0') {
		index++;
		p9(arr, index);
		return;
	}
}

function p9(arr, index) {
	// print("in 9");
	if(arr[index] == 1) {
		index++;
		p11(arr, index);
		return;
	}
	if(arr[index] == 'X') {
		index--;
		p10(arr, index);
		return;
	}
}

function p10(arr, index) {
	// print("in 10");
	print(0);
	return;
}

function p11(arr, index) {
	// print("in 11");
	while(arr[index] == 1 || arr[index] == 'X') {
		arr[index] = 1;
		index++;
	}
	if(arr[index] == 'B') {
		index--;
		p12(arr, index);
		return;
	}
}

function p12(arr, index) {
	// print("in 12");
	if(arr[index] == 1){
		arr[index] = 'B';
		index--;
		p13(arr, index);
		return;
	}
}

function p13(arr, index) {
	// print("in 13");
	while(arr[index] == 1 || arr[index] == 0) {
		index--;
	}
	if(arr[index] == 'D') {
		arr[index] = 1;
		index++;
		pMissing(arr, index);
		return;
	}
}

function p14(arr, index) {
	// print("in 14");
	if(arr[index] == 0) {
		index++;
		p15(arr, index);
		return;
	}
}

function p15(arr, index) {
	// print("in 15");
	if(arr[index] == 'B') {
		index--;
		p16(arr, index);
		return;
	}
	if(arr[index] == 'X') {
		arr[index] = 1;
		index++;
		p19(arr, index);
		return;
	}
	if(arr[index] == 1) {
		index++;
		p17(arr, index);
		return;
	}
}

function p16(arr, index) {
	// print("in 16");
	print(0);
	return;
}

function p17(arr, index) {
	// print("in 17");
	if(arr[index] == 'B') {
		index--;
		p18(arr, index);
		return;
	}
	if(arr[index] == 'X' || arr[index] == 1) {
		index++;
		p21(arr, index);
		return;
	}
}

function p18(arr, index) {
	// print("in 18");
	print(1);
	return;
}

function p19(arr, index) {
	// print("in 19");
	while(arr[index] == 'X') {
		arr[index] = 1;
		index++;
	}
	if(arr[index] == 'B'){
		index--;
		p20(arr, index);
		return;
	}
}

function p20(arr, index) {
	// print("in 20");
	while(arr[index] == 1) {
		index--;
	}
	if(arr[index] == 0) {
		index--;
		p7(arr, index);
		return;
	}
}

function p21(arr, index) {
	// print("in 21");
	while(arr[index] == 1 || arr[index] == 'X') {
		index++;
	}
	if(arr[index] == 'B') {
		index--;
		p22(arr, index);
		return;
	}
}

function p22(arr, index) {
	// print("in 22");
	while(arr[index] == 'X') {
		index--;
	}
	if(arr[index] == 1) {
		arr[index] = 'X';
		index--;
		p23(arr, index);
		return;
	}
}

function p23(arr, index) {
	// print("in 23");
	while(arr[index] == 0 || arr[index] == 1) {
		index--;
	}
	if(arr[index] == 'D') {
		arr[index] = 1;
		index++;
		p24(arr, index);
		return;
	}
	if(arr[index] == 'B') {
		index++;
		p25(arr, index);
		return;
	}
}

function p24(arr, index) {
	// print("in 24");
	if(arr[index] == 1) {
		arr[index] = 'D';
		index++;
		p26(arr, index);
		return;
	}
}

function p25(arr, index) {
	// print("in 25");
	if(arr[index] == 1) {
		arr[index] = 'D';
		index++;
		p26(arr, index);
		return;
	}
}

function p26(arr, index) {
	// print("in 26");
	while(arr[index] == 1) {
		index++;
	}
	if(arr[index] == 0) {
		index--;
		p7(arr, index);
		return;
	}
}

function pMissing(arr, index) {
	if(arr[index] == 0) {
		index--;
		p7(arr, index);
		return;
	}
}

function d0(arr, index) {
	// print("0");
	while(arr[index] == 1) {
		index++;
	}
	if(arr[index] == 0) {
		index++;
		d1(arr, index);
		return;
	}
}

function d1(arr, index) {
	// print("1");
	if(arr[index] == 1) {
		index--;
		d2(arr, index);
		return;
	}
	if(arr[index] == 'X') {
		arr[index] = 1;
		index++;
		d9(arr, index);
		return;
	}
}

function d2(arr, index) {
	// print("2");
	if(arr[index] == 0) {
		index--;
		d3(arr, index);
		return;
	}
}

function d3(arr, index) {
	// print("3");
	if(arr[index] == 1) {
		index++;
		d4(arr, index);
		return;
	}
	if(arr[index] == 'B') {
		index++;
		d14(arr, index);
		return;
	}
}

function d4(arr, index) {
	// print("4");
	if(arr[index] == 0) {
		index++;
		d5(arr, index);
		return;
	}
}

function d5(arr, index) {
	// print("5");
	while(arr[index] != 0) {
		index++;
	}
	if(arr[index] == 0) {
		index--;
		d6(arr, index);
		return;
	}
}

function d6(arr, index) {
	// print("6");
	while(arr[index] == 'X') {
		index--;
	}
	if(arr[index] == 1) {
		arr[index] = 'X';
		index--;
		d7(arr, index);
		return;
	}
}

function d7(arr, index) {
	// print("7");
	while(arr[index] != 'B') {
		index--;
	}
	if(arr[index] == 'B') {
		index++;
		d8(arr, index);
		return;
	}
}

function d8(arr, index) {
	// print("8");
	if(arr[index] == 1) {
		arr[index] = 'B';
		index++;
		d0(arr, index);
		return;
	}
}

function d9(arr, index) {
	// print("9");
	while(arr[index] == 'X') {
		arr[index] = 1;
		index++;
	}
	if(arr[index] == 0) {
		index++;
		d10(arr, index);
		return;
	}
}

function d10(arr, index) {
	// print("10");
	while(arr[index] == 1) {
		index++;
	}
	if(arr[index] == 'B') {
		arr[index] = 1;
		index++;
		d11(arr, index);
		return;
	}
}

function d11(arr, index) {
	// print("11");
	tape.push('B');
	index--;
	d12(arr, index);
	return;
}

function d12(arr, index) {
	// print("12");
	while(arr[index] == 1) {
		index--;
	}
	if(arr[index] == 0) {
		index--;
		d13(arr, index);
		return;
	}
}

function d13(arr, index) {
	// print("13");
	while(arr[index] == 1) {
		index--;
	}
	if(arr[index] == 0) {
		index++;
		d1(arr, index);
		return;
	}
}

function d14(arr, index) {
	// print("14");
	if(arr[index] == 0) {
		index++;
		d15(arr, index);
		return;
	}
}

function d15(arr, index) {
	// print("15");
	while(arr[index] == 1) {
		index++;
	}
	if(arr[index] == 'X') {
		arr[index] = 1;
		index--;
		d16(arr, index);
		return;
	}
	if(arr[index] == 0) {
		index++;
		d19(arr, index);
		return;
	}
}

function d16(arr, index) {
	// print("16");
	while(arr[index] == 1) {
		index--;
	}
	if(arr[index] == 0) {
		index--;
		d17(arr, index);
		return;
	}
}

function d17(arr, index) {
	// print("17");
	while(arr[index] == 1) {
		index--;
	}
	if(arr[index] == 'B') {
		arr[index] = 1;
		index++;
		d18(arr, index);
		return;
	}
}

function d18(arr, index) {
	// print("18");
	while(arr[index] == 1) {
		index++;
	}
	if(arr[index] == 0) {
		index++;
		d15(arr, index);
		return;
	}
}

function d19(arr, index) {
	// print("19");
	// print(tape, index);
	while(arr[index] == 1) {
		quo++;
		index++;
	}
	index--;
	while(arr[index] != 'B') {
		index--;
	}
	index++;
	while(arr[index] == 1) {
		rem++;
		index++;
	}
	print("rem = " + rem + "\nquo = " + quo);
	return;
}