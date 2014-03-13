!function ( $ ) {

    /* PrettyCode CLASS DEFINITION
    * ========================= */

    var PrettyCode = function ( element, codeUrl ) {
        this.$element = $( element );
        //this.$codeContainer = $( '<pre class="prettyprint linenums"><span class="loading">源代码加载中...</span></pre>' );
        this.codeUrl = codeUrl;
        this.title = this.$element.text();
        this.visible = false;

        this.$codePanel = $( '<div class="panel panel-primary"><div class="panel-heading" data-toggle="code-modal" style="cursor:pointer"><h3 class="panel-title text-center">' + this.title +
            '</h3></div><div class="panel-body"><pre class="prettyprint linenums"><span class="loading">源代码加载中...</span></pre></div></div>' );

        this.$codeContainer = this.$codePanel.find( 'pre.prettyprint' );
        this.$element.after( this.$codePanel );
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

                          //that.$modalDialog.find( '.modal-title' ).html( that.title );
                          //that.$modalDialog.find( '.modal-body' ).html( that.$codeContainer.clone() );
                      },
                      error: function ( XMLHttpRequest, textStatus, errorThrown ) { alert( errorThrown ); },
                      cache: true,
                      type: 'get',
                      async: true
                  } );
              }
              this.$codePanel.slideDown( 'slow' );
          }

          this.visible = true;
      }

      , hide: function () {
          if ( this.visible ) {
              this.$codePanel.slideUp( 'slow' );
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
        var closeIcon = 'glyphicon-hand-right'
          , openIcon = 'glyphicon-hand-down';

        $( document ).find( '[data-code-url]' ).not( '.btn' ).addClass( 'btn btn-danger' ).append( ' <i class="glyphicon ' + closeIcon + '"></i>' ).on( 'click', function () {
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