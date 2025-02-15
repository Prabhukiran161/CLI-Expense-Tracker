#!/usr/bin/env node
import {add, remove, list, total, report} from './expenses.js';

const command=process.argv[2];      // add or total or remove or report or list
const argument1=process.argv[3];    // category or id
const argument2= process.argv[4];   // price
const argument3= process.argv[5];   // description

const main = async () => { 
    switch(command){
        case 'add':
            if(!argument1 || isNaN(Number(argument2)) || !argument3){
                console.error("❌ Error: Usage - expense add <category> <amount> <description>");
                return;
            }
            await add(argument1, Number(argument2), argument3);
            break;
        case 'delete':
            if(!argument1 || isNaN(Number(argument1))){
                console.error("❌ Error: Usage - expense delete <expense_id>");
                return;
            }
            await remove(Number(argument1));
            break;
        case 'total':
            await total(argument2);
            break;
        case 'list':
            await list();
            break;
        case 'report':
            await report();
            break;
        default:
            console.log("❌ Please use add or delete or list or total or report commands only");
    }
};

main();