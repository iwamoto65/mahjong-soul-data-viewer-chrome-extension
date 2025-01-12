async function getlocalData() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(null, (data => resolve(data.paifu)))
  })
}

(async () => localStorage.setItem('mahjongsoulpaifu', await getlocalData()))()
