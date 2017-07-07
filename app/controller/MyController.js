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
        var debitStore = Ext.getStore('priorityStore');
        debitStore.sort('weightage', 'DESC');

        console.log('These are the names saved:');
        //  console.log( hotelsStore.getValues());
        var weightageSorted = [], i = 0;
        debitStore.each(function (record) {
            console.log(record.data);
            weightageSorted[i] = record.data;
            i++;
            console.log('- ' + record.get('name'));


        });
        console.log('weightageSorted');
        console.log(weightageSorted);
        var finalWeight = weightageSorted.slice(0, 1 + 2);
        var beforeRateSorted = weightageSorted.slice(3, 1 + weightageSorted.length);
        console.log('finalWeight');
        console.log(finalWeight);
        console.log('beforeRateSorted');
        console.log(beforeRateSorted);


        // var fixed = 10;
        //sorting according to rating
        var ratingSorted = beforeRateSorted.sort(function (a, b) {
            return (parseInt(a.priority) < parseInt(b.priority)) ? 1 : ((parseInt(b.priority) < parseInt(a.priority)) ? -1 : 0);
        });



        //         var debit = debitStore.getAt(1);
        console.log('ratingSorted');
        console.log(ratingSorted);
        var sortedArray = finalWeight.concat(ratingSorted);
        console.log('sortedArray');
        console.log(sortedArray);
        console.log("\nBEFORE UPDATE")
        priorityStore = Ext.getStore('priorityStore');
        var ppppp = [], i = 0;
        priorityStore.each(function (record) {
            console.log(record.data);
            ppppp[i] = record.data;
            i++;
            console.log('- ' + record.get('name'));

        });
        console.log('ppppp ');
        console.log(ppppp);




        //     priorityStore = Ext.getStore('priorityStore');
        //     priorityStore.filter(Ext.create('Ext.util.Filter', {
        //   filterFn: function(item) {
        //     return item.get('catogery') == 'city1' || item.get('catogery') == 'fund';  
        // }
        // }));


        // priorityStore.getGroupString('fund');
        // priorityStore.on({

        //         load: this.onStoreLoad

        //     });

        // Use a model's get method to get the value of a property.

        // console.log('The name is ' + debit.get('name'));
    },
    listClick: function (field, index, target, record, e, eOpts) {
        var c = record;
        var debitStore = Ext.getStore('priorityStore');
        var fname = c.data.name;
        if (fname) {

            console.log(fname);
            debitStore.each(function (record) {
                if (record.data.name == fname)
                    record.set('priority', (record.get('priority') * 2));
                record.dirty = true;
                count = record.data.priority;
                name = record.data.name;
                console.log(name, count);
            });
            // debitStore.on({

            //     load: this.onStoreLoad

            // });
            this.getApplication().redirectTo('second-page');
        }
    },
    // onStoreLoad: function (store, records) {
    //     store.each(function (record) {

    //         console.log('- ' + record.get('name'));

    //     });
    // }
});