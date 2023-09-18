import { Stamina } from "../interface/Stamina";

export function staminaTime(staminaData: Stamina): string {

  const { stamina: currentStamina, max: maxStamina, time: remainingTime } = staminaData;

  const stamina: number = maxStamina - currentStamina;
  const rTime: number = Math.floor(remainingTime / 60);

  const seconds: number = rTime % 60;
  const minutes: number = Math.abs(Math.ceil((stamina - 1) * 6 - rTime));

  const time: string = minutes <= 0 ? `**${seconds} segundos.**` : `**${minutes} minuto(s) e ${seconds} segundo(s).**`;

  const message = currentStamina === maxStamina
    ? 'Stamina cheia! Entre no jogo e gaste toda sua stamina.'
    : `Você vai receber mais um ponto de stamina em ${time}`;

  return message;
}

export function staminaFull(staminaData: Stamina): string {

  const { stamina: currentStamina, max: maxStamina, time: seconds, reserve } = staminaData;

  const hours: string = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const minutes: string = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');

  const time: string = parseInt(hours) <= 0 ? `**${minutes} minuto(s)**.` : `**${hours} hora(s) e ${minutes} minuto(s).**`;
  const message = currentStamina === maxStamina
    ? `\nSua reserva está enchendo: **${reserve.stamina}/2400**`
    : `Sua stamina vai ficar **${maxStamina}/${maxStamina}** em ` + time;

  return message;
}