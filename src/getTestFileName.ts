export function getTestFileName(path: string): string {

    const pathElements = path.split("\\");
    
    return pathElements[pathElements.length - 1];
}