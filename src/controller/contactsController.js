const db = require('../database');
const express = require('express');
const router = express.Router();

// 获取所有联系人
router.get('/contacts', (req, res) => {
    const sql = 'SELECT * FROM contacts';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// 根据 ID 获取联系人信息
router.get('/contacts/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM contacts WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length > 0) {
            res.json(results[0]); // 返回联系人信息
        } else {
            res.status(404).json({ error: "联系人未找到" });
        }
    });
});

// 添加联系人
router.post('/contacts', (req, res) => {
    const { name, phone, email } = req.body;
    const sql = 'INSERT INTO contacts (name, phone, email) VALUES (?, ?, ?)';
    db.query(sql, [name, phone, email], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: '联系人添加成功', id: result.insertId });
    });
});

// 修改联系人
router.put('/contacts/:id', (req, res) => {
    const { id } = req.params;
    const { name, phone, email } = req.body;
    const sql = 'UPDATE contacts SET name = ?, phone = ?, email = ? WHERE id = ?';
    db.query(sql, [name, phone, email, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: '联系人信息更新成功' });
    });
});

// 删除联系人
router.delete('/contacts/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM contacts WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: '联系人已删除' });
    });
});

module.exports = router;
