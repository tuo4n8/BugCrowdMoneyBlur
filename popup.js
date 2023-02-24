// function autoblurify() {
//   chrome.tabs.onUpdated({
//     file: 'blurify.js'
//   });
// }

function blurify() {
  chrome.tabs.executeScript({
    file: 'blurify.js'
  });
}

function unblurify() {
  chrome.tabs.executeScript({
    file: 'unblurify.js'
  });
}

// autoblurify()

document.getElementById('trigger-blur-enable').addEventListener('click', blurify);
document.getElementById('trigger-blur-disable').addEventListener('click', unblurify);

