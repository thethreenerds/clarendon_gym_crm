const db = require('../db');
const bcrypt = require('bcrypt');

exports.getAllUsers = (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    })
}

exports.createUser =  async (req, res) => {
    const { name, email, password, role } = req.body;
    db.query(
        'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
        [name, email, password, role],
        (err, result) => {
            if(err) return res.status(500).json({ error: err});
            res.json({ id: result.insertId, name, email, role});
        }
    )
}
exports.getUserById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
        if(err) return res.status(500).json({ error: err});

        if(result.length ===0){
            return res.status(404).json({ error: "user not found!"});
        }
        res.json(result[0]);
    })
}

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email, password, role } = req.body;
    db.query('UPDATE users SET name = ?, email = ?, password = ?, role = ? WHERE id = ?',
        [name, email, password, role, id],
    (err) => {
        if(err) return res.status(500).json({error: err});
        res.json({ message: 'User updated!'});
    }
    )
}

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
        if(err) return res.status(500).json({error: err});
        res.json({ message: "User deleted."});
    })

    
}

