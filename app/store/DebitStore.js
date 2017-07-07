Ext.define('vertical.store.DebitStore', {
  extend: 'Ext.data.Store',
  alias: 'store.DebitStore',
  requires: [
    'vertical.model.DebitModel'
  ],
  config: {
    model: 'vertical.model.DebitModel',
    storeId: 'debitStore',
    autoSync: true,
            sorters: [{

        property: 'weightage',

        direction: 'DESC'

    }],
    data: [
      { 'image': 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png', 'name': 'Switch of off', 'weightage': '300', 'priority': '2','catogery':'fund' },
      { 'image': 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png', 'name': 'Set pin/change', 'weightage': '100', 'priority': '1' ,'catogery':'transport'},
      { 'image': 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png', 'name': 'Mark as favourite', 'weightage': '400', 'priority': '2' ,'catogery':'transport'},
      { 'image': 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png', 'name': 'Block This Card', 'weightage': '500', 'priority': '5' ,'catogery':'fund'},
      { 'image': 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png', 'name': 'utility', 'weightage': '600', 'priority': '1','catogery':'transport' },
      { 'image': 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png', 'name': 'send money', 'weightage': '100', 'priority': '3','catogery':'transport' },
      { 'image': 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png', 'name': 'data recharge', 'weightage': '300', 'priority': '6' ,'catogery':'fund'}

    ],
    //  grouper: {
    //         property: 'catogery',
    //         direction:'ASC'
    //     },
  }
});