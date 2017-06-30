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
        data:[
        { 'image':'','name':'Switch of off','count':'0' ,'priority':'100'  },
        { 'image':'','name': 'Set pin/change','count':'0','priority':'200'},
        { 'image':'','name':'Mark as favourite','count':'0','priority':'300'},
        { 'image':'','name': 'Block This Card','count':'0','priority':'400' }
        
    ]
     }
});