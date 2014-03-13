$( function () {

    $( '#content' ).on( 'click.bs.modal.data-api', '[data-toggle="code-modal"]', function ( e ) {
        var $this = $( this )
          , $modal = $( '#myModal' )
          , title = $this.text()
          , content = $this.parents( '.panel' ).find( '.panel-body' ).html();

        $modal.find( '#myModalLabel' ).html( title );
        $modal.find( '.modal-body' ).html( content );
        $modal.modal( 'show' );
    } )

    //enableThemeSwitch();
    enableScrollUp();

} );


// 启用回到顶端 --> jquery.scrollUp.min.js
function enableScrollUp() {
    $.scrollUp( {
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '回到顶端', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    } );
}

// 主题样式表切换 --> packageSwitch.js
//function enableThemeSwitch() {
//    $( '#themeSwitch' ).packageSwitch( {

//        packageSelector: { 'bootstrap_cssRef': 'href' }

//      , seriesCollection: [
//            { seriesName: 'amelia', seriesValues: { 'bootstrap_cssRef': '//netdna.bootstrapcdn.com/bootswatch/3.0.3/amelia/bootstrap.min.css' } }
//          , { seriesName: 'cerulean', seriesValues: { 'bootstrap_cssRef': '//netdna.bootstrapcdn.com/bootswatch/3.0.3/cerulean/bootstrap.min.css' } }
//          , { seriesName: 'cosmo', seriesValues: { 'bootstrap_cssRef': '//netdna.bootstrapcdn.com/bootswatch/3.0.3/cosmo/bootstrap.min.css' } }
//          , { seriesName: 'cyborg', seriesValues: { 'bootstrap_cssRef': '//netdna.bootstrapcdn.com/bootswatch/3.0.3/cyborg/bootstrap.min.css' } }
//          , { seriesName: 'flatly', seriesValues: { 'bootstrap_cssRef': '//netdna.bootstrapcdn.com/bootswatch/3.0.3/flatly/bootstrap.min.css' } }
//          , { seriesName: 'journal', seriesValues: { 'bootstrap_cssRef': '//netdna.bootstrapcdn.com/bootswatch/3.0.3/journal/bootstrap.min.css' } }
//          , { seriesName: 'readable', seriesValues: { 'bootstrap_cssRef': '//netdna.bootstrapcdn.com/bootswatch/3.0.3/readable/bootstrap.min.css' } }
//          , { seriesName: 'simplex', seriesValues: { 'bootstrap_cssRef': '//netdna.bootstrapcdn.com/bootswatch/3.0.3/simplex/bootstrap.min.css' } }
//          , { seriesName: 'slate', seriesValues: { 'bootstrap_cssRef': '//netdna.bootstrapcdn.com/bootswatch/3.0.3/slate/bootstrap.min.css' } }
//          , { seriesName: 'spacelab', seriesValues: { 'bootstrap_cssRef': '//netdna.bootstrapcdn.com/bootswatch/3.0.3/spacelab/bootstrap.min.css' } }
//          , { seriesName: 'spruce', seriesValues: { 'bootstrap_cssRef': '//netdna.bootstrapcdn.com/bootswatch/3.0.3/spruce/bootstrap.min.css' } }
//          , { seriesName: 'superhero', seriesValues: { 'bootstrap_cssRef': '//netdna.bootstrapcdn.com/bootswatch/3.0.3/superhero/bootstrap.min.css' } }
//          , { seriesName: 'united', seriesValues: { 'bootstrap_cssRef': '//netdna.bootstrapcdn.com/bootswatch/3.0.3/united/bootstrap.min.css' } }
//      ]

//      , showSeriesList: function ( $element, seriesList, packageSwitch ) {
//          var options = '';
//          $.each( seriesList, function ( index, name ) {
//              options += '<option value="' + index + '">' + name + '</option>';
//          } );

//          $element.append( options ).on( 'change', function () {
//              var seriesIndex = $( this ).val();
//              packageSwitch.switchTo( seriesIndex );
//          } );
//      }

//      , addDefault: true

//      , defaultSeriesName: 'default'
//    } );
//}
