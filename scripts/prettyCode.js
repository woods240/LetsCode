!function ( $ ) {

    /* PrettyCode CLASS DEFINITION
    * ========================= */

    var PrettyCode = function ( element, codeUrl ) {
        this.$element = $( element );
        this.$codeContainer = $( '<pre class="prettyprint linenums"><span class="loading">源代码加载中...</span></pre>' );
        this.codeUrl = codeUrl;
        this.title = this.$element.text();
        this.visible = false;

        this.$element.after( $( '<div class="code"></div>' ).append( this.$codeContainer ) );
    };

    PrettyCode.prototype = {
        constructor: PrettyCode

      , htmlEncode: function ( s ) {
          return s.replace( /&/g, '&amp;' ).replace( /</g, '&lt;' ).replace( />/g, '&gt;' );
      }

      , show: function () {
          if ( !this.visible ) {
              var noContent = this.$codeContainer.children().hasClass( 'loading' );
              if ( noContent ) {
                  var that = this;
                  $.ajax( {
                      url: this.codeUrl,
                      dataType: 'text',
                      success: function ( data ) {
                          var encodedData = that.htmlEncode( data );
                          that.$codeContainer.html( encodedData );

                          window.prettyPrint && prettyPrint();

                          var title = $( '<h6 class="text-center">' + that.title + '<i class="icon-fullscreen scaleButton" title="缩放"></i></h6>' );
                          that.$codeContainer.before( title );
                          var $code = that.$codeContainer.parent();
                          title.find( 'i.scaleButton' ).on( 'click', function () {
                              var scaleButton = $( this );
                              var isFullScreen = $code.hasClass( 'modal' );
                              if ( isFullScreen ) {
                                  $code.removeClass( 'modal' );
                                  scaleButton.removeClass( "icon-resize-small" ).addClass( "icon-fullscreen" );
                                  that.$codeContainer.height( '100%' )
                              }
                              else {
                                  $code.addClass( 'modal' );
                                  scaleButton.removeClass( "icon-fullscreen" ).addClass( "icon-resize-small" );
                                  that.$codeContainer.outerHeight( $( window ).height() - 40 );
                              }
                          } );

                      },
                      error: function ( XMLHttpRequest, textStatus, errorThrown ) { alert( errorThrown ); },
                      cache: true,
                      type: 'get',
                      async: true
                  } );
              }
              this.$codeContainer.parent().slideDown( 'slow' );
          }

          this.visible = true;
      }

      , hide: function () {
          if ( this.visible ) {
              this.$codeContainer.parent().slideUp( 'slow' );
          }

          this.visible = false;
      }

    };


    /* PrettyCode PLUGIN DEFINITION
    * ============================= */

    $.fn.prettyCode = function ( option ) {
        return this.each( function () {
            var $this = $( this )
              , data = $this.data( 'prettyCode' )
              , codeUrl = typeof option == "string" && option;

            if ( !data ) $this.data( 'prettyCode', data = new PrettyCode( this, codeUrl ) );

            data.visible ? data.hide() : data.show();
        } );
    };


    /* PrettyCode DATA-API
    * =================== */

    $( document ).on( 'click.prettyCode.data-api', '[data-code-url]', function () {
        var $this = $( this )
          , codeUrl = $this.attr( 'data-code-url' );

        $this.prettyCode( codeUrl );
    } );


    /* PrettyCode Extend-PLUGIN
    * =================== */

    $.initPrettyCodeSwitch = function () {
        var closeIcon = 'icon-hand-right'
          , openIcon = 'icon-hand-down';

        $( document ).find( '[data-code-url]' ).not( '.label' ).addClass( 'label label-important' ).prepend( '<i class="icon-white ' + closeIcon + '"></i> ' ).on( 'click', function () {
            var $icon = $( this ).find( 'i' )
              , close = $icon.hasClass( closeIcon );

            if ( close ) {
                $icon.removeClass( closeIcon ).addClass( openIcon );
            }
            else {
                $icon.removeClass( openIcon ).addClass( closeIcon );
            }
        } );
    }

}( window.jQuery );