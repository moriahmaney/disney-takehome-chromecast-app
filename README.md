## Introduction

Hello! My name is Moriah Maney, and this project is a take home assessment for the Chromecast team at Disney.

The brief was to create both a sender and receiver application capable of transmitting a message and displaying it on a Chromecast-enabled device.

Both apps are comprised of an HTML file, a CSS file, and a JavaScript file. They have both been deployed to the public internet.

[Sender App](https://sender-omega.vercel.app/)
[Receiver App](https://receiver-mu.vercel.app/)

## Local Development

Due to the ES6 module requiring the same-origin policy, you will need to run a local server to develop and test changes.

Recommendations:

- [ngrok](https://ngrok.com/docs/getting-started/)
- [http-server](https://www.npmjs.com/package/http-server)

## Testing

To test these applications, navigate to the sender app [Sender App](https://sender-omega.vercel.app/). You do not need to open the receiver app in your browser. Click the cast button in the top right corner and select your Chromecast device. The UI will update when you are connected, and then you may proceed to enter your message in the input field and hit the send button to transmit your message to your Chromecast display.

I have personally tested the application on a Google Nest Hub display and a Chromecast device connected to a TV. In the case that it does not work on your device, I am including a demo video below.

## Demo

- [Demo Video](https://www.loom.com/share/02c7145585af43d78bc9ddac875194ad?sid=195493e1-872a-44de-88d5-63cf56ff4c3d)
