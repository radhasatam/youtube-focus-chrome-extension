;(function () {
  const hideDistractingElements = () => {
    // Hide homepage videos
    const homeSections = document.querySelectorAll(
      "#contents.ytd-rich-grid-renderer"
    )
    homeSections.forEach((section) => (section.style.display = "none"))

    // Hide recommended videos on watch page
    const recommended = document.querySelector("#related")
    if (recommended) {
      recommended.style.display = "none"
    }

    // Hide YouTube Shorts
    const shorts = document.querySelectorAll(
      "ytd-rich-section-renderer[is-shorts]"
    )
    shorts.forEach((short) => (short.style.display = "none"))

    // Hide end screen video suggestions
    const endScreens = document.querySelectorAll(".ytp-endscreen-content")
    endScreens.forEach((endScreen) => (endScreen.style.display = "none"))
  }

  // Run the function initially and set up a mutation observer to monitor changes
  hideDistractingElements()

  const observer = new MutationObserver(hideDistractingElements)
  observer.observe(document.body, { childList: true, subtree: true })
})()
