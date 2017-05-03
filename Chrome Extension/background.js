chrome.webRequest.onBeforeRequest.addListener(function(event) {
	if(event.hasOwnProperty('type') && event.type === 'main_frame') {
		var hostname =  (new URL(event.url)).hostname;
		console.log("load : " + hostname + " (" + event.url + ")");

		var badSites = ['facebook.com', 'twitter.com'];

		var medSites = ['youtube.com'];

		var goodSites = ['stackoverflow.com', 'slack.com'];

		badSites.some(function(item, index) {
			if(hostname.indexOf(item) > -1) {
				console.log('bad site: ' + item);
				chrome.runtime.sendMessage('cebjkpfgapincfdmmmhjcjfpchidpkfg', '4', function(response) {
					// console.log(response);
				});
			}
		});


		medSites.some(function(item, index) {
			if(hostname.indexOf(item) > -1) {
				console.log('med site: ' + item);
				chrome.runtime.sendMessage('cebjkpfgapincfdmmmhjcjfpchidpkfg', '3', function(response) {
					// console.log(response);
				});
			}
		});

		goodSites.some(function(item, index) {
			if(hostname.indexOf(item) > -1) {
				console.log('good site: ' + item);
				chrome.runtime.sendMessage('cebjkpfgapincfdmmmhjcjfpchidpkfg', '2', function(response) {
					// console.log(response);
				});
			}
		});

	}
}, {"urls": ["*://*/*"]});
