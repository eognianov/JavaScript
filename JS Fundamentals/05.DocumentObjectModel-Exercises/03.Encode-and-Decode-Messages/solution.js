function solve() {
	let encodeButton = document.getElementsByTagName('button')[0];
	let decodeButton = document.getElementsByTagName('button')[1];

	encodeButton.addEventListener('click', encodeClickEvent);
	decodeButton.addEventListener('click', decodeClickEvent);

	function encodeClickEvent(e) {
		let messageTextArea = document.getElementsByTagName('textarea')[0];
		let message = messageTextArea.value;
		let decodeMessage = '';

		for (let i = 0; i < message.length; i++) {
			decodeMessage += `${String.fromCharCode(message.charCodeAt(i) + 1)}`;			
		}

		let decodeTextArea = document.getElementsByTagName('textarea')[1];
		decodeTextArea.value = decodeMessage;

		messageTextArea.value = '';
	};

	function decodeClickEvent(e) {
		let messageTextArea = document.getElementsByTagName('textarea')[1];
		let message = messageTextArea.value;
		let encodeMessage = '';		

		for (let i = 0; i < message.length; i++) {
			encodeMessage += `${String.fromCharCode(message.charCodeAt(i) - 1)}`;			
		}
		
		let encodeTextArea = document.getElementsByTagName('textarea')[1];
		encodeTextArea.value = encodeMessage;
	};
}