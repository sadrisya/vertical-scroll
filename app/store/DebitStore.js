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
        //         sorters: [{

        //     property: 'count',

        //     direction: 'DESC'

        // }],
        data:[
        { 'image':'','name':'Switch of off','weightage':'300' ,'priority':'2'  },
        { 'image':'','name': 'Set pin/change','weightage':'100','priority':'1'},
        { 'image':'','name':'Mark as favourite','weightage':'400','priority':'2'},
        { 'image':'','name': 'Block This Card','weightage':'400','priority':'5' },
          { 'image':'','name': 'utility','weightage':'500','priority':'1' },
            { 'image':'','name': 'send money','weightage':'100','priority':'3' },
              { 'image':'','name': 'data recharge','weightage':'300','priority':'6' }
        
    ]
     }
});