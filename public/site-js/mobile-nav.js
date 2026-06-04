const navDetails = Array.from(document.querySelectorAll("[data-nav-details]"));
const mobileNavDetails = document.querySelector("[data-mobile-nav-details]");

function syncExpandedState(details) {
  if (!(details instanceof HTMLDetailsElement)) return;

  const summary = details.querySelector("[data-nav-summary]");
  if (summary) {
    summary.setAttribute("aria-expanded", details.open ? "true" : "false");
  }
}

function closeNavDetails(details, restoreFocus = false) {
  if (!(details instanceof HTMLDetailsElement) || !details.open) return;

  details.open = false;
  syncExpandedState(details);

  if (restoreFocus) {
    details.querySelector("summary")?.focus();
  }
}

navDetails.forEach((details) => {
  if (!(details instanceof HTMLDetailsElement)) return;

  syncExpandedState(details);

  details.addEventListener("toggle", () => {
    syncExpandedState(details);

    if (!details.open) return;

    navDetails.forEach((otherDetails) => {
      if (otherDetails !== details) {
        closeNavDetails(otherDetails);
      }
    });
  });
});

document.addEventListener("pointerdown", (event) => {
  const target = event.target;
  if (!(target instanceof Node)) return;

  navDetails.forEach((details) => {
    if (
      details instanceof HTMLDetailsElement &&
      details.open &&
      !details.contains(target)
    ) {
      closeNavDetails(details);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  const target = event.target;
  let restoredFocus = false;

  navDetails.forEach((details) => {
    if (!(details instanceof HTMLDetailsElement) || !details.open) return;

    const shouldRestoreFocus =
      !restoredFocus && target instanceof Node && details.contains(target);

    closeNavDetails(details, shouldRestoreFocus);
    restoredFocus = restoredFocus || shouldRestoreFocus;
  });
});

if (
  mobileNavDetails instanceof HTMLDetailsElement &&
  !mobileNavDetails.hasAttribute("data-nav-details")
) {
  syncExpandedState(mobileNavDetails);
}
