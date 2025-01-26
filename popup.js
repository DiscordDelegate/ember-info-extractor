// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'emberData') {
      document.getElementById('ember-data').textContent = JSON.stringify(message.data, null, 2);
    }    console.log('Received message:', message);
  });