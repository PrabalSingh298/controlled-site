(function () {
  var button = document.getElementById("resource-check");
  var result = document.getElementById("resource-result");
  var ipv4Image = document.getElementById("ipv4-only-image");
  var ipv4ImageStatus = document.getElementById("ipv4-image-status");
  var status = document.getElementById("ipv4-js-status");

  if (button && result) {
    button.addEventListener("click", function () {
      result.textContent =
        "Local JavaScript is active at " +
        new Date().toLocaleTimeString();
    });
  }

  if (ipv4Image && ipv4ImageStatus) {
    ipv4Image.addEventListener("load", function () {
      ipv4ImageStatus.textContent = "IPv4-only favicon image loaded.";
    });
    ipv4Image.addEventListener("error", function () {
      ipv4ImageStatus.textContent = "IPv4-only favicon image unavailable.";
    });
  }

  if (status && status.dataset.loaded !== "true") {
    status.textContent = "IPv4 JavaScript unavailable";
  }
}) ();
