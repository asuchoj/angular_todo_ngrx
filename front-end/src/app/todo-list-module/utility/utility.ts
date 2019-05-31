export function formatDate(): string {
    const dataNew = new Date();
    const month = dataNew.getMonth() < 10 ? `0${dataNew.getMonth() + 1}` : `${dataNew.getMonth() + 1}`;
    const days = dataNew.getDate() < 10 ? `0${dataNew.getDate()}` : `${dataNew.getDate()}`;

    return `${dataNew.getFullYear()}-${month}-${days}`
}
