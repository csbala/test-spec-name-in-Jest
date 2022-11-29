const NodeEnvironment = require('jest-environment-node').TestEnvironment;

class CustomEnvironment extends NodeEnvironment {
    constructor(config, context) {
        super(config, context);
        this.testPath = context.testPath;
        this.docblockPragmas = context.docblockPragmas;
    }

    getNames(parent) {
        if (!parent) {
            return [];
        }

        if (parent.name === 'ROOT_DESCRIBE_BLOCK') {
            return [];
        }

        const parentName = this.getNames(parent.parent);
        return [
            ...parentName,
            parent.name
        ]
    }

    async handleTestEvent(event, state) {
        const {name} = event;

        if (["test_start", "test_fn_start"].includes(name)) {
            this.global.testNames = this.getNames(event.test)
        }
    }
}

module.exports = CustomEnvironment;

