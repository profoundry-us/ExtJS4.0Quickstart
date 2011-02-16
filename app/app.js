Ext.onReady(function () {

  Ext.create('Ext.Viewport', {
    layout: {
      type: 'border',
      padding: 5
    },

    defaults: {
      split: true
    },

    items: [
      {
        region: 'north',
        title: 'Userland',
        html: 'Tell who is logged in up here.'
      },

      {
        region: 'west',
        width: 250,
        title: 'Navigation',
        html: 'Your links and navigation elements should go here.'
      },

      {
        region: 'center',
        title: 'Center',
        html: 'Your content should go here and should be replaced by the navigation elements on the left.'
      }
    ]

  });

});

