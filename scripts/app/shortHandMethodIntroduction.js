var url = '请求地址';
var data = { "键1": "值1", "键2": "值2" };
var success = function ( data, textStatus, jqXHR ) { alert( '成功了' ); };
var dataType = 'text'; // text, xml, html, script, json

// $.get()和对应的缩写
$.get( url, data, success, dataType );
$.ajax( {
    url: url,
    data: data,
    success: success,
    type: 'get',
    dataType: dataType
} );

// $.getJSON()和对应的缩写
$.getJSON( url, data, success );
$.ajax( {
    url: url,
    data: data,
    success: success,
    type: 'get',
    dataType: "json"
} );

// $.getScript()和对应的缩写
$.getScript( url, success );
$.ajax( {
    url: url,
    success: success,
    type: 'get',
    dataType: "script"
} );

// $.post()和对应的缩写
$.post( url, data, success );
$.ajax( {
    url: url,
    data: data,
    success: success,
    type: 'post',
    dataType: dataType
} );

// .load()和对应的缩写
var selector = 'jQuery选择器';
var complete = function ( responseText, textStatus, XMLHttpRequest ) { alert( '请求完成' ); };
$( selector ).load( url, data, complete );
