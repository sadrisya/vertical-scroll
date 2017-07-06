Ext.define('vertical.model.priorityModel',{
   extend: "Ext.data.Model",
    config: {
         fields:['image','name','weightage','priority','catogery',{
             name: 'myGroup',
             mapping: 'catogery',
             convert: function(v, record) {
                     return v + ': ' + record.data.catogery;
             }
        }]


    }  
});