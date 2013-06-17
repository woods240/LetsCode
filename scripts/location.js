!function ($) {

    var Location = function (options) {
        this.$mainMenu = $('#' + options.mainMenuId);
        this.$subMenu = $('#' + options.subMenuId);
        this.$breadcrumb = $('#' + options.breadcrumbId);
        this.$content = $('#' + options.contentId);

        this.$location = null;
        this.getLocationFromSiteMap(options.siteMapPath);
    };

    Location.prototype = {
        constructor: Location

      , getLocationFromSiteMap: function (siteMapPath) {
          var that = this;
          $.ajax({
              url: siteMapPath,
              dataType: 'xml',
              success: function (xml) {
                  that.$location = $('location', xml);
              },
              error: function (XMLHttpRequest, textStatus, errorThrown) { alert(errorThrown); },
              cache: false,
              type: 'get',
              async: false
          });
      }

      , createMenuItem: function (text, url) {
          return '<li><a href="' + (url || '#') + '">' + text + '</a></li>';
      }

      , createCetegoryItem: function (text) {
          return '<li class="nav-header">' + text + '</li>';
      }

      , createBreadcrumbItem: function (text, isActive) {
          if (isActive) {
              return '<li class="active">' + text + '</li>';
          }

          return '<li><a href="#">' + text + '</a><span class="divider">/</span></li>';
      }

      , activeItem: function ($linkItem) {
          $linkItem.parent().addClass('active').siblings().removeClass('active');
      }

      , refreshNav: function () {
          var menuItems = ''
            , that = this;

          this.$location.find('nav[text!=""]').each(function () {      // 刷新nav
              var navText = $(this).attr('text');
              menuItems += that.createMenuItem(navText);
          });
          this.$mainMenu.html(menuItems);

          this.$mainMenu.find('a').on('click', function (event) {     // 绑定点击事件
              var $linkItem = $(this)
                , navText = $linkItem.text();

              that.activeItem($linkItem);
              that.refreshSubMenu(navText);

              event.preventDefault();
          }).first().trigger('click');
      }

      , refreshSubMenu: function (navText) {
          var subMenuItems = ''
            , that = this;

          this.$location.find('nav[text=' + navText + ']').find('category[text!=""]').each(function () {    // 刷新subMenu
              var $categoryItem = $(this)
                , categoryText = $categoryItem.attr('text');

              subMenuItems += that.createCetegoryItem(categoryText);
              $categoryItem.find('item[url!=""]').each(function () {
                  var linkText = $(this).text()
                    , linkUrl = $(this).attr('url');
                  subMenuItems += that.createMenuItem(linkText, linkUrl);
              });
          });
          this.$subMenu.html(subMenuItems);

          this.$subMenu.find('a').on('click', function (event) {     // 绑定点击事件
              var $linkItem = $(this)
                , linkUrl = $linkItem.attr('href');

              that.activeItem($linkItem);
              that.refreshBreadcrumb($linkItem.text());
              that.refreshContent(linkUrl);

              event.preventDefault();
          }).first().trigger('click');
      }

      , refreshBreadcrumb: function (itemText) {
          var $linkItem = this.$location.find('item:contains("' + itemText + '")').first()
            , $categoryItem = $linkItem.parent().first()
            , $navItem = $categoryItem.parent().first()
            , breadcrumbItems = '';

          breadcrumbItems += this.createBreadcrumbItem($navItem.attr('text'));
          breadcrumbItems += this.createBreadcrumbItem($categoryItem.attr('text'));
          breadcrumbItems += this.createBreadcrumbItem($linkItem.text(), true);

          this.$breadcrumb.html(breadcrumbItems);
      }

      , refreshContent: function (url) {
          if (url != '#') {
              var that = this;
              $.ajax({
                  url: url,
                  dataType: 'html',
                  success: function (html) {
                      that.$content.html(html);
                  },
                  error: function (XMLHttpRequest, textStatus, errorThrown) { alert(errorThrown); },
                  cache: false,
                  type: 'get',
                  async: true
              });
          }
          else {
              this.$content.html('<p>页面正在开发中，敬请期待。。。</p>');
          }
      }
    };


    $.fn.location = function (option) {
        return this.each(function () {
            var $this = $(this)
              , options = $.extend({}, $.fn.location.defaults, typeof option == 'object' && option)
              , data = $this.data('location');

            if (!data) $this.data('location', data = new Location(options));
            data.refreshNav();
        });
    };

    $.fn.location.defaults = {
        mainMenuId: 'mainMenu',
        subMenuId: 'subMenu',
        breadcrumbId: 'breadcrumb',
        contentId: 'content',
        siteMapPath: 'content/siteMap.xml'
    };

    $(window).on('load', function () {
        $('body').location();
    });


}(window.jQuery);