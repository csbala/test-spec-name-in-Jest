function getTestFileName(path) {

    const pathElements = path.split("\\");
    
    return pathElements[pathElements.length - 1];
}

module.exports = getTestFileName;