import * as crypto from 'crypto';

const salt: string = '6s25p5ox5y14umn1p61aqyyvbvvl3lrt';

export default function ds(): string {
  const t: number = Math.floor(Date.now() / 1000);
  const r: string = random(6); 
  const h: string = crypto.createHash('md5').update(`salt=${salt}&t=${t}&r=${r}`).digest('hex');
  return `${t},${r},${h}`;
}

function random(length: number): string {
  const characters: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result: string = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
