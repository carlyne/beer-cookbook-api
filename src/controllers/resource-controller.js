
class ResourceController {
    /**
     * @param {Repository} repository
     */
    constructor(repository) {
        this.repository = repository;
    }

    index(req, res) {
        this.repository.find()
            .then(datas => res.json({ data: datas }))
            .catch(error => res.status(500).json({ error: String(error) }));
    }

    show(req, res) {
        this.repository.findOne({ _id: req.params.id })
            .then(datas => {
                if (!datas) {
                    return res.status(404).json({ error: 'Not found' });
                }

                res.json({ data: datas });
            })
            .catch(error => res.status(500).json({ error: String(error) }));
    }
}

module.exports = ResourceController;
