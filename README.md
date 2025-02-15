# 🚀 CLI Expense Tracker

A simple yet powerful **Command-Line Interface (CLI) Expense Tracker** to manage your expenses efficiently. Track your spending, generate reports, and analyze your financial habits—all from your terminal! 💰📊

---

## 📌 Features

✅ **Add Expenses** - Categorize and log expenses with a description.  
✅ **Delete Expenses** - Remove an expense by its ID.  
✅ **List Expenses** - View all recorded expenses.  
✅ **Total Expenses** - Get the total amount spent (overall or by category).  
✅ **Generate Reports** - Analyze your spending with detailed reports.  

---

## 🔧 Installation

1️⃣ **Clone the repository**  
```sh
git clone https://github.com/Prabhukiran161/CLI-Expense-Tracker.git
cd CLI-Expense-Tracker
```

2️⃣ **Install dependencies**  
```sh
npm install
```

3️⃣ **Link the CLI globally** (So you can use it without `npm run`)  
```sh
npm link
```

---

## 📜 Usage

Once installed, you can use the following commands directly in your terminal:

### ➕ Add an Expense
```sh
expense add <category> <amount> <description>
```
Example:
```sh
expense add Food 250 "Lunch at restaurant"
```

### ❌ Delete an Expense
```sh
expense delete <expense_id>
```
Example:
```sh
expense delete 3
```

### 📃 List All Expenses
```sh
expense list
```

### 📊 Get Total Expenses
#### **For all categories:**
```sh
expense total
```
#### **For a specific category:**
```sh
expense total <category>
```
Example:
```sh
expense total Food
```

### 📑 Generate a Report
```sh
expense report
```

---

## 📁 Project Structure

```
📂 CLI-Expense-Tracker
│-- 📄 expensemanager.js  # Main CLI handler
│-- 📄 expenses.js        # Expense management logic
│-- 📄 filehandler.js     # Handles JSON file operations
│-- 📂 data
│   └── 📄 expenses.json  # Stores expense data
│-- 📄 package.json       # Project metadata & scripts
│-- 📄 README.md          # You are here 📜
```

---

## 🛠 Technologies Used

- **Node.js** (Runtime)  
- **JavaScript (ES6+)**  
- **fs & path modules** (File handling)  
- **npm link** (For CLI setup)  

---

## 🎯 Future Enhancements

🔹 CSV/Excel export option 📊  
🔹 Monthly expense summary 📅  
🔹 Budget alerts 🚨  

---

## 🤝 Contributing

💡 Want to improve this project? Fork the repo and submit a PR! 🚀  

```sh
git clone https://github.com/Prabhukiran161/CLI-Expense-Tracker.git
cd CLI-Expense-Tracker
git checkout -b feature-branch
# Make changes & commit
git push origin feature-branch
```

---

## 📜 License

📝 MIT License. Free to use and modify.

---

## 🌟 Show Some Love

⭐ If you like this project, give it a star on [GitHub](https://github.com/Prabhukiran161/CLI-Expense-Tracker.git)! 🚀🔥

---

## 📬 Contact
- 📂 **GitHub Profile** – [Prabhu Kiran](https://github.com/Prabhukiran161)
- 📧 Reach out at **prabhukiran161@gmail.com** for any queries or feedback.