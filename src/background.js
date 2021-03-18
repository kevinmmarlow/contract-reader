browser.runtime.onMessage.addListener(function (message, sender) {
  console.log('Hello from the background', message, sender)

  browser.tabs.executeScript({
    file: 'content-script.js',
  })
})
