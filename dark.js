// init button
const btn = document.querySelector('.btn-toggle');

// set state to saved state
chrome.storage.local.get(['SavedState'], function(result) {
      document.body.className = result.SavedState;
    });

// Listen for a click on the button
btn.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-theme');

  // save state
  const state = document.body.className;
  chrome.storage.local.set({'SavedState': state}, function() {
	  // Notify that we saved.
	  message('Settings saved');
	})
})