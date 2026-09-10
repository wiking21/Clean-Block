const DEFAULTS = {
  enabled: true,
  blockedCount: 0
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(DEFAULTS).then((current) => {
    chrome.storage.local.set({
      enabled: current.enabled ?? true,
      blockedCount: current.blockedCount ?? 0
    });
  });
});

chrome.declarativeNetRequest.onRuleMatchedDebug?.addListener((info) => {
  chrome.storage.local.get({ blockedCount: 0 }).then(({ blockedCount }) => {
    chrome.storage.local.set({ blockedCount: blockedCount + 1 });
  });
});

chrome.storage.onChanged.addListener((changes) => {
  if (!changes.enabled) return;
  chrome.declarativeNetRequest.updateEnabledRulesets({
    enableRulesetIds: changes.enabled.newValue ? ["base_rules"] : [],
    disableRulesetIds: changes.enabled.newValue ? [] : ["base_rules"]
  }).catch(() => {});
});