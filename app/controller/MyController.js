Ext.define('vertical.controller.MyController', {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
        main:'search_view'
    },
     control: {
main:{
    initialize : 'initmain',
     
},
'search_view >dataview':{
    itemtap: 'listClick'
}
     }
},
initmain:function(){
     var debitStore = Ext.getStore('debitStore');
     console.log('These are the hotels saved:');
    //  console.log( hotelsStore.getValues());

debitStore.each(function (record) {

console.log('- ' + record.get('name'));

});
var debit = debitStore.getAt(1);

console.log("\nBEFORE UPDATE")

// Use a model's get method to get the value of a property.

console.log('The name of the second hotel is ' + debit.get('name'));
},
listClick:function(field, index, target, record, e, eOpts){
    var c = record;
    var me=this;
    var fname = c.data.name;
if (fname === 'Set pin/change') {
      me.getApplication().redirectTo('second-page');
    }
}
});