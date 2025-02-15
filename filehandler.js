import fs from "fs/promises";
import path from "path";

const filePath=path.join(process.cwd(),'data','expenses.json');

export const loadExpenses= async () => { 
    try {
        const data=await fs.readFile(filePath,"utf8");
        return JSON.parse(data);
    } catch (error) {
        if(error.code === "ENOENT"){
            console.error("⚠️ File not found. Returning an empty array.");
            return [];
        }
        else{
            console.error("❌ Error Parsing JSON:", error.message);
            return [];
        }
    }
}

export const saveExpenses= async (expenses) => {
    try {
        if(!Array.isArray(expenses)){
            throw new Error("Invalid data: Expenses must be an array.");
        }
        await fs.mkdir(path.dirname(filePath), {recursive:true});
        await fs.writeFile(filePath,JSON.stringify(expenses,null,2),"utf-8");
        console.log("✅ Expenses saved successfully!");
    } catch (error) {
        console.error("❌ Error While Saving the file:", error.message);
    }
}