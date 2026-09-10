const toggle = document.getElementById("toggle");
const statusText = document.getElementById("statusText");
const count = document.getElementById("count");
const reset = document.getElementById("reset");

async function refresh() {
  const data = await chrome.storage.local.get({
    enabled: true,
    blockedCount: 0
  });
  toggle.classList.toggle("on", data.enabled);
  statusText.textContent = data.enabled ? "Protection is on" : "Protection is off";
  count.textContent = data.blockedCount.toLocaleString();
}

toggle.addEventListener("click", async () => {
  const { enabled = true } = await chrome.storage.local.get("enabled");
  await chrome.storage.local.set({ enabled: !enabled });
  refresh();
});

reset.addEventListener("click", async () => {
  await chrome.storage.local.set({ blockedCount: 0 });
  refresh();
});

refresh();