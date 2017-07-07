Ext.define('vertical.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'search_view',
    config: {
        fullscreen: true,
        inline: {
            wrap: false
        },
        scrollable: {
            direction: 'vertical',
            directionLock: true,
        },

        layout: {
            type: 'vbox',
            align: 'stretch'

        },

        items: [
            {
                xtype: 'dataview',
                store: 'priorityStore',
                cls: 'favlist',
                onItemDisclosure: true,
                disableSelection: true,

                layout: {
                    type: 'hbox'
                },
                flex: 2,

                itemTpl: [
                    '<table>', '<tr class="singleList">',
                    '<td><div class="image" style="width:1.5em;"><div></td>',
                    '<td><div  class="image"><img src="{image}" width=75 height=50/></div><div class="names" style="">{name}</div></td>',
                    '<td><div class ="imicon"></div></td>', '</tr>', '</table>'
                ],



            },
            //  {
            //     xtype: 'dataview',
            //     store: 'priorityStore',
            //     cls: 'cardlist',
            //     onItemDisclosure: true,
            //     disableSelection: true,

            //     grouped: true,
            //     indexBar: true,


            //     layout: {
            //         type: 'hbox'
            //     },
            //     inline: {
            //         wrap: false
            //     },
            //     scrollable: {
            //         direction: 'horizontal',
            //         directionLock: true,
            //     },
            //     flex: 2,

            //     itemTpl: [
            //         '<table>', '<tr class="singleList">',
            //         '<td><div class="image" style="width:1.5em;"><div></td>',
            //         '<td><div  class="image"><img src="{image}" width=75 height=50/></div><div class="names" style="">{name}</div><div  class="desc">{desc}</div></td>',
            //         '<td><div class ="imicon"></div></td>', '</tr>', '</table>'
            //     ],
            //  listeners: {
            //     initialize: function (dataview, index, target, record, e, eOpts) {
            //         console.log('hi hw r u');

            //         var priorityStore = Ext.getStore('priorityStore');
            //         priorityStore.filter(Ext.create('Ext.util.Filter', {
            //             filterFn: function (item) {
            //                 return item.get('catogery') == 'fund';
            //             }
            //         }));

            //     },

            // }



            // },
            {
                xtype: 'dataview',
                store: 'priorityStore',
                cls: 'cardlist',
                onItemDisclosure: true,
                disableSelection: true,
                layout: {
                    type: 'hbox'
                },
                flex: 2,
                inline: {
                    wrap: false
                },
                scrollable: {
                    direction: 'horizontal',
                    directionLock: true,
                },
                // tpl:[
                //     '<tpl if="catogery=="fund"">',
                //     '<p>{name}</p>',
                // ]
                
                itemTpl: [

                    '<tpl if="catogery == \'fund\'">',


                    '<table>', '<tr class="singleList">',
                    '<td><div class="image" style="width:1.5em;"><div></td>',
                    '<td><div  class="image"><img src="{image}" width=75 height=50/></div><div class="names" style="">{name}</div><div  class="desc">{desc}</div></td>',
                    '<td><div class ="imicon"></div></td>', '</tr>', '</table>',

                    '    <tpl else>',

                    '                   <p></p>',

                    '</tpl>',
                    // '<br>',

                    // '<tpl if="catogery == \'transport\'">',
                    // '<table>', '<tr class="singleList">',
                    // '<td><div class="image" style="width:1.5em;"><div></td>',
                    // '<td><div  class="image"><img src="{image}" width=75 height=50/></div><div class="names" style="">{name}</div><div  class="desc">{desc}</div></td>',
                    // '<td><div class ="imicon"></div></td>', '</tr>', '</table>',

                    // '    <tpl else>',

                    // '                   <p></p>',

                    // '</tpl>'

                ]
                



            },
            {
                xtype: 'dataview',
                store: 'priorityStore',
                cls: 'cardlist',
                onItemDisclosure: true,
                disableSelection: true,
                layout: {
                    type: 'hbox'
                },
                inline: {
                    wrap: false
                },
                scrollable: {
                    direction: 'horizontal',
                    directionLock: true,
                },
                flex: 2,
                itemTpl: [

                    '<tpl if="catogery == \'transport\'">',
                    '<table>', '<tr class="singleList">',
                    '<td><div class="image" style="width:1.5em;"><div></td>',
                    '<td><div  class="image"><img src="{image}" width=75 height=50/></div><div class="names" style="">{name}</div><div  class="desc">{desc}</div></td>',
                    '<td><div class ="imicon"></div></td>', '</tr>', '</table>',

                    '    <tpl else>',

                    '                   <p></p>',

                    '</tpl>'

                ]

            }

           


        ],




    },

});