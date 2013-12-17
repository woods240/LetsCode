$.ajax( {

    /* 发送和处理请求必须的信息 */
    url: '',            // 请求的地址
    data: {},           // 发送的键值对（默认将被序列化成查询字符串）
    type: 'get',        // 请求方式 [get, post]
    async: true,        // 是否异步模式 default:true
    dataType: '',       // 将返回数据作为 [text, xml, html, script, json, jsonp] 来处理


    /* 事件处理 */
    global: true,                   // 是否触发Ajax全局事件 default:true
    context: document.body,         // 设置Ajax事件处理函数的上下文 default:ajaxSetting
    beforeSend: function ( jqXHR, accepts ) { },            // 请求发送前的事件
    success: function ( data, textStatus, jqXHR ) { },      // 请求成功时的事件
    error: function ( jqXHR, textStatus, errorThrown ) { }, // 请求失败时的事件
    complete: function ( jqXHR, textStatus ) { },           // 请求完成后的事件
    statusCode: {                                           // 根据状态码，响应请求结果
        // 2xx: 成功
        200: function () { alert( '200: 请求成功' ); },
        201: function () { alert( '201: 请求被创建完成，同时新的资源被创建。' ); },
        202: function () { alert( '202: 供处理的请求已被接受，但是处理未完成。' ); },
        203: function () { alert( '203: 文档已经正常地返回，但一些应答头可能不正确，因为使用的是文档的拷贝。' ); },
        204: function () { alert( '204: 没有新文档。浏览器应该继续显示原来的文档。如果用户定期地刷新页面，而Servlet可以确定用户文档足够新，这个状态代码是很有用的。' ); },
        205: function () { alert( '205: 没有新文档。但浏览器应该重置它所显示的内容。用来强制浏览器清除表单输入内容。' ); },
        206: function () { alert( '206: 客户发送了一个带有Range头的GET请求，服务器完成了它。' ); },

        // 3xx: 重定向
        300: function () { alert( '300: 多重选择。链接列表。用户可以选择某链接到达目的地。最多允许五个地址。' ); },
        301: function () { alert( '301: 所请求的页面已经转移至新的url。' ); },
        302: function () { alert( '302: 所请求的页面已经临时转移至新的url。' ); },
        303: function () { alert( '303: 所请求的页面可在别的url下被找到。' ); },
        304: function () { alert( '304: 未按预期修改文档。客户端有缓冲的文档并发出了一个条件性的请求（一般是提供If-Modified-Since头表示客户只想比指定日期更新的文档）。服务器告诉客户，原来缓冲的文档还可以继续使用。' ); },
        305: function () { alert( '305: 客户请求的文档应该通过Location头所指明的代理服务器提取。' ); },
        306: function () { alert( '306: 此代码被用于前一版本。目前已不再使用，但是代码依然被保留。' ); },
        307: function () { alert( '307: 被请求的页面已经临时移至新的url。' ); },

        // 4xx: 客户端错误
        400: function () { alert( '400: 服务器未能理解请求。' ); },
        401: function () { alert( '401: 被请求的页面需要用户名和密码。' ); },
        402: function () { alert( '402: 此代码尚无法使用。' ); },
        403: function () { alert( '403: 对被请求页面的访问被禁止。' ); },
        404: function () { alert( '404: 服务器无法找到被请求的页面。' ); },
        405: function () { alert( '405: 请求中指定的方法不被允许。' ); },
        406: function () { alert( '406: 服务器生成的响应无法被客户端所接受。' ); },
        407: function () { alert( '407: 用户必须首先使用代理服务器进行验证，这样请求才会被处理。' ); },
        408: function () { alert( '408: 请求超出了服务器的等待时间。' ); },
        409: function () { alert( '409: 由于冲突，请求无法被完成。' ); },
        410: function () { alert( '410: 被请求的页面不可用。' ); },
        411: function () { alert( '411: "Content-Length" 未被定义。如果无此内容，服务器不会接受请求。' ); },
        412: function () { alert( '412: 请求中的前提条件被服务器评估为失败。' ); },
        413: function () { alert( '413: 由于所请求的实体的太大，服务器不会接受请求。' ); },
        414: function () { alert( '414: 由于url太长，服务器不会接受请求。当post请求被转换为带有很长的查询信息的get请求时，就会发生这种情况。' ); },
        415: function () { alert( '415: 由于媒介类型不被支持，服务器不会接受请求。' ); },
        416: function () { alert( '416: 服务器不能满足客户在请求中指定的Range头。' ); },

        // 5xx: 服务器错误
        500: function () { alert( '500: 请求未完成。服务器遇到不可预知的情况。' ); },
        501: function () { alert( '501: 请求未完成。服务器不支持所请求的功能。' ); },
        502: function () { alert( '502: 请求未完成。服务器从上游服务器收到一个无效的响应。' ); },
        503: function () { alert( '503: 请求未完成。服务器临时过载或当机。' ); },
        504: function () { alert( '504: 网关超时。' ); },
        505: function () { alert( '505: 服务器不支持请求中指明的HTTP协议版本。' ); },
    },


    /* 通过缓存优化性能 */
    cache: false,       // 是否缓存结果 default:true(script和jsonp为false), IE8需要加时间戳才能禁用缓存
    ifModified: false,  // 仅当服务器资源变化时，才发送Ajax请求 default:false


    /* 不常用的配置 */
    username: '',       // 服务器身份认证需要的帐号
    password: '',       // 服务器身份认证需要的密码
    accepts: {},        // 需要接受的Content-Type
    headers: {},        // 请求头
    mimeType: '',       // 覆盖 XHR 的 mime 类型
    scriptCharset: '',  // 当要返回的数据是script时，指定 charset
    timeout: 1000,      // 超时时间 ms
    contentType: '',    // 发送数据的Content-Type
    processData: true,  // 是否将 data 序列化成查询字符串 default:true
    isLocal: true,      // 当前环境被认为 “本地”
    crossDomain: false, // 是否跨域请求 default:false
    jsonp: '',          //  
    jsonpCallback: '',  //
    xhr: function () { },                                   // 自己实现 XMLHttpRequest ，覆盖原生的实现
    dataFilter: function ( data, datType ) { },             // 过滤响应

} );
