Ext.define('vertical.store.priorityStore', {
    extend: 'Ext.data.Store',
    alias: 'store.priorityStore',
    autoLoad: true,
    groupField: 'myGroup',
    requires: [
        'vertical.model.priorityModel'
    ],
    config: {
        model: 'vertical.model.priorityModel',
        storeId: 'priorityStore',
        autoSync: true,
        // sorters: [{

        //     property: 'priority',

        //     direction: 'DESC'

        // }],
        data: [
            { 'image': 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png', 'name': 'Switch of off', 'weightage': '300', 'priority': '7', 'catogery': 'fund' },
            { 'image': 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png', 'name': 'Set pin/change', 'weightage': '100', 'priority': '1', 'catogery': 'transport' },
            { 'image': 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png', 'name': 'Mark as favourite', 'weightage': '400', 'priority': '5', 'catogery': 'transport' },
            { 'image': 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png', 'name': 'Block This Card', 'weightage': '400', 'priority': '5', 'catogery': 'fund' },
            { 'image': 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png', 'name': 'utility', 'weightage': '500', 'priority': '1', 'catogery': 'transport' },
            { 'image': 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png', 'name': 'send money', 'weightage': '100', 'priority': '3', 'catogery': 'transport' },
            { 'image': 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png', 'name': 'data recharge', 'weightage': '300', 'priority': '6', 'catogery': 'fund' }

        ],
        //  grouper: {
        //         property: 'catogery',
        //         direction:'ASC'
        //     },

        // getGroupString: function (record) {

        //     return record.get('catogery')[0];
        // },
        // proxy: {
        //     type: 'ajax',
        //     reader: {
        //         type: 'json',
        //         totalProperty: 'totalCount',
        //         root: 'name',
        //         successProperty: 'success'
        //     },
        // }

    }
});