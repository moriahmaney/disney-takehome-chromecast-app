const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

function onSuccess() {
	console.log('Message sent successfully!');
}

function onFailure() {
	console.error('Error sending message:');
}

sendButton.addEventListener('click', () => {
	const session = cast.framework.CastContext.getInstance().getCurrentSession();
	if (session) {
		const namespace = 'urn:x-cast:my.custom.message';

		const message = messageInput.value;

		const event = {
			message,
		};

		console.log('Sending message:', message);
		messageInput.value = '';
		session.sendMessage(namespace, event, onSuccess, onFailure);
	} else {
	}
});
