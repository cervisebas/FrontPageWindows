export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
export function waitTo(time: number) {
    return new Promise((resolve)=>setTimeout(resolve, time));
}