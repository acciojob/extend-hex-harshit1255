const extendHex = (shortHex) => {
  // write your code here
	let hex = '#'
	let i=0;
	if(shortHex.lenght===4)
		i=1;
	for(i;i<shortHex.length;i++)
	{
		hex+=shortHex.charAt(i);
		hex+=shortHex.charAt(i);
	}
	return hex;
};

// Do not change the code below.
// const shortHex = prompt("Enter Short Hex.");
// alert(extendHex(shortHex));
