# 📜 Changelog

## 🚀 Changes in 0.9-rev1
✅ **Pie Chart for Sentiment Analysis**  
✅ **Word Cloud of Most Used Words**  
✅ **Auto-refresh with new messages**  

---

## 🚀 Changes in 0.9
### 🔍 **Sentiment Filtering & Analysis**
✅ Added sentiment filtering (**Positive, Neutral, Negative**)  
✅ Displays sentiment analysis stats above logs  
✅ Highlights sentiment for each message  
✅ Filters chat logs by sentiment  
✅ Auto-refreshes logs and updates sentiment in real-time  
✅ Keeps pagination, search, statistics, active users, and export features  

### 🔧 **Fixes & Improvements**
✅ Now includes **`totalMessages`** before rendering `logs.ejs`  
✅ Now includes **`topUsers`** for chat statistics  
✅ Now includes **`sentimentStats`** for sentiment breakdown  
✅ Filters logs by sentiment when selected  
✅ Prevents `undefined` errors in `logs.ejs`  

### 📅 **Date Filtering Fix**
✅ Now includes **`startDate`** and **`endDate`** before rendering `logs.ejs`  
✅ Ensures date filtering works correctly  
✅ Prevents `undefined` errors in `logs.ejs`  

---

## 🚀 Changes in 0.8
### 📅 **Date & Pagination Enhancements**
✅ Date Filtering (**Start Date - End Date**)  
✅ Pagination (**Previous | Next Page**)  
✅ User Chat History (**Click usernames to see their messages**)  
✅ Active Users List (**Real-time**)  
✅ Auto-refresh logs when new messages arrive  

### 📄 **New Page: User Chat History**
✅ Created missing **`views/user_logs.ejs`**  
✅ Displays chat history for selected user  
✅ Includes "Back to All Logs" button  

### 🔍 **Search Bar Enhancements**
✅ Restored Search Bar (`?search=keyword`)  
✅ Pagination keeps search results (`?search=hi&page=2`)  
✅ Dynamic filtering (**no reload needed**)  
✅ Search combined with date filtering (`?search=hello&start=2024-01-01`)  
✅ Search terms are **highlighted in results**  
✅ Case-insensitive search  
✅ Works dynamically for new messages  
✅ Does not break HTML formatting  

### 🔧 **Fix: `highlightText` Not Defined**
✅ Now runs in **JavaScript (client-side)** instead of EJS  
✅ Restores search highlighting dynamically  
✅ Works for both **static & new messages**  

---

## 🚀 Changes in 0.7
### 📤 **Export Features**
✅ Export chat logs as **CSV & JSON** (`/export/csv`, `/export/json`)  
✅ Show **total messages** in chat history  
✅ Show **top 5 most active users**  

### 🔧 **Fixes & Improvements**
✅ CSV now properly **includes chat logs**  
✅ `csvStream.end()` ensures **all data is written** before finishing  

---

## 🚀 Changes in 0.6
### 🖥 **Web Interface**
✅ **Auto-refresh chat logs** every **5 seconds**  
✅ **Search bar** for filtering messages  
✅ **Live active users list** (updates when users join/leave)  
✅ **Real-time updates** using WebSockets  

### 🛠 **Connection Fixes**
✅ Added `client.connect()` → Ensures the bot connects to IRC  
✅ Added event listeners for `"registered"` → Confirms when the bot is connected  
✅ Added logging for connection events → Helps debug issues  
✅ Ensured **activeUsers updates** on joins/quits properly  

### 👥 **Active User Tracking**
✅ Now fetches **all users in the channel** when the bot joins  
✅ Uses `client.addListener("names", function (channel, users) {...}`  
✅ Logs **full active user list** upon joining  
✅ Real-time updates when users **join/leave** the channel  

---

## 🚀 Changes in 0.5
### 🔎 **New IRC Bot Commands**
✅ `!logs <number>` → Retrieves the last X messages from the database  
   - **Example:** `!logs 5` → Fetches the last 5 messages from the current channel  
✅ `!lastmessage <user>` → Retrieves the last message sent by a specific user  
   - **Example:** `!lastmessage nitestryker` → Fetches last message by "nitestryker"  

---

## 🚀 Changes in 0.4
### 📜 **Persistent Chat Logging**
✅ Every **message, join, part, and quit event** is saved in a database  
✅ Data is stored in a **SQLite3 table (`messages`)**  

### ⏳ **Timestamps for Everything**
✅ Every log entry has an **accurate timestamp**  

### 🗃 **Database Auto-Creation**
✅ If `irc_logs.db` **does not exist**, it **automatically creates it**  
✅ If the **messages table does not exist**, it creates it **automatically**  

---

## 🚀 Changes in 0.3
✅ **Refactored Winston logging implementation**  
✅ **Added timestamps for logs**  
✅ **Logs messages and bot actions in `irc.log`**  
✅ **Console logging remains for real-time monitoring**  
