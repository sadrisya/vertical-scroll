Ext.define('vertical.store.DebitStore',{
 extend : 'Ext.data.Store',
 alias: 'store.DebitStore',
 requires: [
     'vertical.model.DebitModel'
     ],
    config : {
        model : 'vertical.model.DebitModel',
        storeId: 'debitStore',
        autoSync: true,
                sorters: [{

            property: 'count',

            direction: 'ASC'

        }],
        data:[
        { 'image':'','name':'Switch of off','count':'1' ,'priority':'100'  },
        { 'image':'','name': 'Set pin/change','count':'1','priority':'200'},
        { 'image':'','name':'Mark as favourite','count':'1','priority':'300'},
        { 'image':'','name': 'Block This Card','count':'1','priority':'400' }
        
    ]
     }
});