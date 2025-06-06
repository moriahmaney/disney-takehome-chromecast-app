const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

context.addCustomMessageListener('urn:x-cast:my.custom.message', (event) => {
	document.getElementById('message').textContent = event.data.message;
});

context.start();
