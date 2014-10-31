

function FindProxyForURL(url, host) {

	var coouuo="SOCKS5 127.0.0.1:1080";
	//使用var来定义一个代理，名称为coouuo（名称可以随意）
              //SOCKS5表示代理类型，另外还有PROXY这类型。
					   //127.0.0.1:1080 表示ip和本地端口	
					   
					   
	var BILIBILIPR="PROXY api.youku.com:80"
	
// 判断，shExpMatch为通配符	，   //符合，即使用某个代理
	if (
	shExpMatch(url,"*google.com/*")
	||shExpMatch(host,"gfw*")
	||shExpMatch(host,"*.wikipedia.org/*")
	||shExpMatch(host,"*.mozilla.org/*")	
	||shExpMatch(host,"*.googlecode.com/*")
	
	)	
		return coouuo;
// 判断，使用正则表达式来判断		
	var regexpr=/\w*\.*(canyu|twitter|youtube|facebook)\.(com|org)/;
		if (regexpr.test(host)) 
			return coouuo;	
			
// 判断，使用正则表达式来判断		
	var regexpr=^.*?://.*?(bilibili|acg|loli|hdslb|acgvideo).(tv|cn|net|com|net)/crossdomain.xml$;
    if (regexpr.test(host)) 
		return BILIBILIPR;	
				
//内部地址,访问IP段是否在某个子网内，如果是就直接访问，
	if (isInNet(host, "0.0.0.0",  "255.0.0.0"))
		return "DIRECT";
//不符合
	
  return "DIRECT;"+coouuo;
//或者 return coouuo;"DIRECT"  
}













