var node = document.getElementsByTagName("body")[0];
var script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("src", chrome.runtime.getURL("fetchGameRecord.js"));
node.appendChild(script);

window.onmessage = (event) => {
  if (event.origin === "https://game.mahjongsoul.com" && event.data.result) {
    chrome.storage.local.set({ paifu: event.data.result });
    window.open("https://www.mahjong-data-viewer.com/game/latest")
  }
}
