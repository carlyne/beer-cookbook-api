const readline = require('readline');

class Prompt {
    constructor() {
        this.readline = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    ask(questions, infos = {}, index = 0) {
        const { key, type, question } = questions[index];
        this.readline.question(question, data => {
            let info = String(data);
            if (type && type === 'number') {
                info = parseInt(data);
            } else if (type && type === 'boolean') {
                info = data === 'true';
            } else if (type && type === 'array') {
                info = String(data).split(',');
            }

            infos[key] = info;
            if (!questions[index + 1]) {
                this.readline.close();
            } else {
                this.ask(questions, infos, ++index);
            }
        });
    }

    askQuestions(questions) {
        const info = {};
        return new Promise((resolve, reject) => {
            this.readline.on('close', () => resolve(info));
            this.readline.on('error', error => reject(error));

            this.ask(questions, info);
        });
    }
}

module.exports = Prompt;