Ext.define('vertical.view.Main', {
    extend: 'Ext.Container',
    xtype: 'search_view',
    config: {
        fullscreen: true,
        layout: 'card',
         inline: {
                    wrap: false
                },
        scrollable:{
            direction:'vertical'
        },
        items: [

           
            {
                xtype: 'dataview',
                store: 'debitStore',
                onItemDisclosure: true,
                disableSelection: true,
                inline: {
                    wrap: false
                },
                scrollable: {
                    direction: 'horizontal'
                },
                itemTpl: [
                    '<table>', '<tr class="singleList">',
                    '<td><div class="image" style="width:1.5em;"><div></td>',
                    '<td><div class="names" style="">{name}</div></td>',
                    '</tr>', '</table>'
                ],

                //  plugins:[
                //      { xclass: 'Ext.plugin.ListPaging' }
                //  ]

            }, {
                xtype: 'textfield',
                label: 'name',
                docked: 'top'
            },
           
        ],
    },
    //     launch: function () {

    //     var hotelsStore = Ext.getStore('Hotels');

    // }
});