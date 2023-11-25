const extendHex = (shortHex) => {
  // write your code here
	let hex = '#'
	for(let i=1;i<4;i++)
	{
		hex+=shortHex.charAt(i);
		hex+=shortHex.charAt(i);
	}
	return hex;
};

// Do not change the code below.
// const shortHex = prompt("Enter Short Hex.");
// alert(extendHex(shortHex));
