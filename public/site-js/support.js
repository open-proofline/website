const qrDialogs = new Map(
  Array.from(document.querySelectorAll("[data-qr-dialog]")).map((dialog) => [
    dialog.dataset.qrDialog ?? "",
    dialog,
  ]),
);

document.querySelectorAll("[data-qr-open]").forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = qrDialogs.get(button.dataset.qrOpen ?? "");
    if (!(dialog instanceof HTMLDialogElement)) return;

    dialog.showModal();
  });
});

qrDialogs.forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});

async function copyText(value) {
  if (!navigator.clipboard || !window.isSecureContext) {
    throw new Error("Clipboard API unavailable");
  }

  await navigator.clipboard.writeText(value);
}

document.querySelectorAll("[data-copy-address]").forEach((button) => {
  const label = button.querySelector("[data-copy-label]");
  const defaultText = label?.textContent?.trim() || "Copy";
  let resetTimer;

  button.addEventListener("click", async () => {
    const address = button.dataset.copyAddress;
    if (!address) return;

    try {
      await copyText(address);
      if (label) label.textContent = "Copied";
    } catch {
      if (label) label.textContent = "Failed";
    }

    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      if (label) label.textContent = defaultText;
    }, 1800);
  });
});
