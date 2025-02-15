import { loadExpenses,saveExpenses } from "./filehandler.js";

export const add = async (category, price, description) => {
    try {
        const expenses=await loadExpenses();
        if(isNaN(price) || price<=0){
            console.error("❌ Error: Price must be a positive number.");
            return;
        }
        const maxId = expenses.length > 0 ? Math.max(...expenses.map( exp => exp.id)) : 0;
        const new_expense={
            id:maxId+1,
            category:category,
            price:Number(price),
            description:description.trim()
        }
        expenses.push(new_expense);
        await saveExpenses(expenses);
        console.log(`✅ Expense Added! 📝\n  ID: ${new_expense.id}\n  Category: ${new_expense.category}\n  Price: ₹${new_expense.price}\n  Description: ${new_expense.description}`);
    } catch (error) {
        console.log("❌ Error While Adding the Expense:", error.message);
    }
}

export const list = async () => {
    try {
        const expenses=await loadExpenses();
        if(expenses.length === 0){
            console.log("📭 No expenses recorded yet.");
            return;
        }
        console.log("\n💰 Expense List:");
        console.log("─────────────────────────────────────────────");
        expenses.forEach((expense)=>{
            console.log(`📌 ID: ${expense.id} | 📂 Category: ${expense.category} | 💰 Price: ₹${expense.price} | 📝 Description: ${expense.description}`);
        })
        console.log("─────────────────────────────────────────────\n");
    } catch (error) {
        console.log("❌ Error While listing the Expenses:", error.message);
    }
}

export const total = async (category) => {
    try {
        const expenses=await loadExpenses();
        if(!category){
            const totalAmount =expenses.reduce((sum,expense) => sum+expense.price, 0 );
            console.log(`💰 Total Expenses: ₹${totalAmount}`);
            return;
        }
        const categoryExpenses=expenses.filter((expense)=>{ expense.category===category });
        const categoryTotalAmount=categoryExpenses.reduce((sum,expense) => sum+expense.price, 0);
        console.log(`📂 ${category} Expenses Total: ₹${totalAmount}`);
    } catch (error) {
        console.log("❌ Error While Calculating Total Expenses:", error.message);
    }
}

export const remove = async (id) => {
    try {
        const expenses=await loadExpenses();
        const updatedExpenses=expenses.filter((expense)=> expense.id!==  Number(id));
        if (updatedExpenses.length === expenses.length) {
            console.log(`⚠️ No expense found with ID: ${id}`);
            return;
        }
        await saveExpenses(updatedExpenses);
        console.log(`✅ Successfully removed expense with ID: ${id}`);
    } catch (error) {
        console.log("❌ Error While Removing the Expense:", error.message);
    }
}

export const report = async () => {
    try {
        const expenses=await loadExpenses();
        if (expenses.length === 0) {
            console.log("📢 No expenses recorded.");
            return;
        }
        const totalAmount =expenses.reduce((sum,expense) => sum+expense.price, 0 );
        const categoryTotals={};
        expenses.forEach((expense)=>{
            categoryTotals[expense.category]= (categoryTotals[expense.category] || 0)+ expense.price;
        })
        const highestExpense= expenses.reduce((max, expense)=> (expense.price>max.price ? expense : max), expenses[0]);
        const lowestExpense= expenses.reduce((min, expense)=> (expense.price<min.price ? expense : min), expenses[0]);

        // 📌 Print the report
        console.log("\n📊 **Expense Report** 📊\n");
        console.log(`💰 Total Expenses: ₹${totalAmount}`);
        console.log(`📅 Total Transactions: ${expenses.length}`);

        console.log("\n📂 **Expenses by Category:**");
        Object.entries(categoryTotals).forEach(([category, amount]) => {
            console.log(`   - ${category}: ₹${amount}`);
        });

        console.log("\n🔝 **Highest Expense:**");
        console.log(`   - ${highestExpense.category}: ₹${highestExpense.price} (${highestExpense.description})`);

        console.log("\n🔻 **Lowest Expense:**");
        console.log(`   - ${lowestExpense.category}: ₹${lowestExpense.price} (${lowestExpense.description})\n`);
    } catch (error) {
        console.log("❌ Error While Reporting the Expenses:", error.message);
    }
}