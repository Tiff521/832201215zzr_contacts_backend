const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',      // 数据库主机地址
    user: 'root',  // MySQL 用户名
    password: 'admin123', // MySQL 密码
    database: 'contacts_db' // 数据库名称
});

db.connect((err) => {
    if (err) {
        console.error('数据库连接失败:', err.message);
        return;
    }
    console.log('已成功连接到数据库');
});

module.exports = db;
