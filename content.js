// Check if Ember is available on the page
if (window.Ember && window.Ember.getOwner) {
    const owner = window.Ember.getOwner(document.querySelector('[data-ember-owner]'));
    if (owner && owner.lookup) {
      const store = owner.lookup('service:store');
      if (store) {
        // Log Ember data to the console
        console.log('Ember Data:', store.peekAll());
              // Send Ember data to the popup
      chrome.runtime.sendMessage({
        type: 'emberData',
        data: store.peekAll()
      });
      }
    }
  }