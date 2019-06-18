export function toArray(obj: any) {
    return Object.keys(obj).map(index => obj[index]);
}