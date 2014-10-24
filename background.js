var setTo5 = function () {
     chrome.cookies.set({
        url : 'http://.weibo.com',
        name : 'wvr',
        value : '5'
    });
    chrome.cookies.set({
        url : 'http://.weibo.com',
        name : 'wvr6',
        value : '0'
    });
};

setTo5();

chrome.cookies.onChanged.addListener(function(info) {
    var _cookie = info.cookie;

    if ((_cookie.name === 'wvr' && _cookie.value === '6') || (_cookie.name === 'wvr6' && _cookie.value === '1')) {
        console.log("反动派倒行逆施！");
        setTo5();
    }
});
