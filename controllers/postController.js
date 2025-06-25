import connection from "../db.js";

const index = (req, res) => {

    const sql = 'SELECT * FROM posts';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    });
};

const show = (req, res) => {

    const sql = 'SELECT * FROM posts WHERE id = ?';

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        if (results.length === 0) return res.status(404).json({ error: 'Post not found' });
        res.json(results[0]);
    });
}

const store = (req, res) => {

    res.json(
        "risposta da store"
    )

}

const update = (req, res) => {
    const id = req.params.id
    res.json(
        `risposta da update a ${id}`
    )

}

const destroy = (req, res) => {

    const sql = 'DELETE * FROM posts WHERE id = ?';

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.sendStatus(204);
    });

}


export default { index, show, store, update, destroy };