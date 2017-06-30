Ext.define('vertical.controller.MyController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            main: 'search_view'
        },
        control: {
            main: {
                initialize: 'initmain',

            },
            'search_view > dataview': {
                itemtap: 'listClick'
            }
        }
    },
    initmain: function () {
        var debitStore = Ext.getStore('debitStore');
        console.log('These are the names saved:');
        //  console.log( hotelsStore.getValues());

        debitStore.each(function (record) {

            console.log('- ' + record.get('name'));

        });
        var debit = debitStore.getAt(1);

        console.log("\nBEFORE UPDATE")

        // Use a model's get method to get the value of a property.

        console.log('The name is ' + debit.get('name'));
    },
    listClick: function (field, index, target, record, e, eOpts) {
        var c = record;
        var debitStore = Ext.getStore('debitStore');
        var fname = c.data.name;
        if (fname === 'Set pin/change') {

            console.log(fname);
            debitStore.each(function (record) {
                if (record.data.name == fname)
                    record.set('count', (record.get('count') + 2));
                record.dirty = true;
                count = record.data.count;
                name = record.data.name;
                console.log(name, count);
            });
            debitStore.on({

                load: this.onStoreLoad

            });
            this.getApplication().redirectTo('second-page');
        }
    },
    onStoreLoad: function (store, records) {
        store.each(function (record) {

            console.log('- ' + record.get('name'));

        });
    }
});