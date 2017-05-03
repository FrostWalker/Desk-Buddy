
function click(e) {
  chrome.runtime.sendMessage('cebjkpfgapincfdmmmhjcjfpchidpkfg', e.target.dataset.face, function(response) {
    // alert(response);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('button');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
