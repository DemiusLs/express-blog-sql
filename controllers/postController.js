const index = (req, res) => {

    res.json(
        "risposta da index"
    )
};

const show = (req, res) => {

    const id = req.params.id    
    res.json(
        `risposta da show a ${id}`
    )
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

    const id = req.params.id   
    res.json(
        `risposta da destroy a ${id}`
    )

}


export default { index, show, store, update, destroy };