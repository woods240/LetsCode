!function ($) {

    /* PrettyCode CLASS DEFINITION
    * ========================= */
    var PrettyCode = function (element, codeUrl) {
        this.$element = $(element);
        this.$codeContainer = $('<pre class="prettyprint linenums"></pre>');
        this.codeUrl = codeUrl;
        this.visible = false;

        this.$element.after(this.$codeContainer);
    };

    PrettyCode.prototype = {
        constructor: PrettyCode

      , show: function () {
          if (!this.visible) {
              var noContent = this.$codeContainer.filter('pre:empty').length == 1;
              if (noContent) {
                  this.$codeContainer.load(this.codeUrl, function () {
                      window.prettyPrint && prettyPrint();
                  });
              }
              this.$codeContainer.show();
          }

          this.visible = true;
      }

      , hide: function () {
          if (this.visible) {
              this.$codeContainer.hide();
          }

          this.visible = false;
      }

    };


    /* PrettyCode PLUGIN DEFINITION
    * ============================= */

    $.fn.prettyCode = function (option) {
        return this.each(function () {
            var $this = $(this)
              , data = $this.data('prettyCode')
              , codeUrl = typeof option == "string" && option;

            if (!data) $this.data('prettyCode', data = new PrettyCode(this, codeUrl));

            if (!data.visible) {
                data.show();
            }
            else {
                data.hide();
            }
        });
    };


    /* PrettyCode DATA-API
    * =================== */
    $(document).on('click', '[data-code-url]', function () {
        var $this = $(this)
          , codeUrl = $this.attr('data-code-url');

        $this.prettyCode(codeUrl);
    });


} (window.jQuery);