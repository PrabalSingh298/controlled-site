window.ipv4GoogleResource = function ipv4GoogleResource(_data) {
  var status = document.getElementById("ipv4-js-status");
  if (status) {
    status.textContent = "IPv4 JavaScript loaded";
    status.dataset.loaded = "true";
  }
};
