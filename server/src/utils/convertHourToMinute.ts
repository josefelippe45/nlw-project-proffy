export default function convertHourToMinutes(time: string){
    //formato 24h - 00:00
    //o map(Number ira transformar o 00 da esquerda e o 00 da direita em tipos numéricos)
    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinutes = (hour*60) + minutes;

    return timeInMinutes;
}