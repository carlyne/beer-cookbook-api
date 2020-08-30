
class ResourceController {
    /**
     * @param {Repository} repository
     */
    constructor(repository) {
        this.repository = repository;
    }

    index(req, res) {
        this.repository.find()
            .then(datas => res.json(datas))
            .catch(error => res.status(500).json({ error: String(error) }));
    }

    show(req, res) {
        this.repository.findOne({ _id: req.params.id })
            .then(datas => {
                if (!datas) {
                    return res.status(404).json({ error: 'Not found' });
                }

                res.json(datas);
            })
            .catch(error => res.status(500).json({ error: String(error) }));
    }

    delete(req, res) {
        this.repository.findOne({_id: req.params.id}).then(object => {

            if(object) {
               return this.repository.delete(object).then(() => {
                    res.status(204).send();
                });
            }

            res.status(404).send();
        });
    }
}

module.exports = ResourceController;
