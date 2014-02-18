
chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
	var url = details.url;
	var headers = details.requestHeaders;
	console.log("start request url:" + url);
	console.log(headers);

	var header = {
		"requestHeaders" : details.requestHeaders
	};

	for (var i = 0; i < header.requestHeaders.length; i++) {
		if (header.requestHeaders[i].name == "refererrrr") {
			header.requestHeaders[i].name = "Referer";
		}
	}

	return header;
}, {
	urls : ["<all_urls>"]
}, ["requestHeaders", "blocking"]);
