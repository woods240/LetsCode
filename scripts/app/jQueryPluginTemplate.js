!function () {

    /* XXX 核心类定义
    * ========================= */
    var XXX = function ( options ) {
        // 属性定义
        // ...
    };

    xxx.prototype = {
        constructor: XXX

        // 实例方法定义
        // ...
      , method1: function () { }

      , method2: function () { }
    };


    /* XXX 插件定义
    * ============================= */
    $.fn.xxx = function ( option ) {
        return this.each( function () {
            var $this = $( this )
              , options = $.extend( {}, $.fn.xxx.defaults, typeof option == 'object' && option )
              , data = $this.data( 'xxx' );

            if ( !data ) $this.data( 'xxx', data = new XXX( options ) );

            // 调用核心类的方法
            // ...
        } );
    };

    $.fn.xxx.defaults = {
        // 参数默认值
        // ...
    };


    /* XXX DATA-API (自动初始化插件)
    * =================== */

    /* <DOM加载完成后> */
    $( function () {
        $( '约定的选择器' ).each( function () {
            var $this = $( this )
          , options = { /* 从DOM元素中读取配置参数 */ };

            $this.xxx( options );
        } );
    } );

    /* <页面加载完成后> */
    $( window ).on( 'load', function () {
        $( '约定的选择器' ).each( function () {
            var $this = $( this )
          , options = { /* 从DOM元素中读取配置参数 */ };

            $this.xxx( options );
        } );
    } );

    /* <事件触发> */
    $( document ).on( '事件.xxx.data-api', '约定的选择器', function () {
        var $this = $( this )
          , options = { /* 从DOM元素中读取配置参数 */ };

        $this.xxx( options );
    } );


}( window.jQuery );