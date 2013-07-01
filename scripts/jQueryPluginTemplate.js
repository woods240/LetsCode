!function () {

    /* XXX 核心类定义
    * ========================= */
    var XXX = function ( options ) {     // 属性定义


    };

    xxx.prototype = {           // 实例方法定义
        constructor: XXX

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

        } );
    };

    $.fn.xxx.defaults = {

    };


    /* XXX DATA-API
    * =================== */
    /* 事件触发 <插件初始化> */
    $( document ).on( '事件.xxx.data-api', '约定的选择器', function () {
        var $this = $( this )
          , options = { /* 从DOM元素中读取配置参数 */ };

        $this.xxx( options );
    } );
    /* 加载完成后 <插件初始化> */
    $( window ).on( 'load', function () {
        $( '约定的选择器' ).each( function () {
            var $this = $( this )
          , options = { /* 从DOM元素中读取配置参数 */ };

            $this.xxx( options );
        } );
    } );

}( window.jQuery );