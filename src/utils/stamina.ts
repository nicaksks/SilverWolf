import { Stamina } from "../interface/Stamina";

export function staminaTime(staminaData: Stamina): string {

  const { current_stamina, max_stamina, stamina_recover_time } = staminaData;

  const stamina: number = max_stamina - current_stamina;
  const rTime: number = Math.floor(stamina_recover_time / 60);

  const seconds: number = rTime % 60;
  const minutes: number = Math.abs(Math.ceil((stamina - 1) * 6 - rTime));

  const time: string = minutes <= 0 ? `**${seconds} segundos.**` : `**${minutes} minuto(s) e ${seconds} segundo(s).**`;

  const message = current_stamina === max_stamina
    ? 'Stamina cheia! Entre no jogo e gaste toda sua stamina.'
    : `Você vai receber mais um ponto de stamina em ${time}`;

  return message;
}

export function staminaFull(staminaData: Stamina): string {

  const { current_stamina, max_stamina, stamina_recover_time, current_reserve_stamina } = staminaData;

  const hours: string = Math.floor(stamina_recover_time / 3600).toString().padStart(2, '0');
  const minutes: string = Math.floor((stamina_recover_time % 3600) / 60).toString().padStart(2, '0');

  const time: string = parseInt(hours) <= 0 ? `**${minutes} minuto(s)**.` : `**${hours} hora(s) e ${minutes} minuto(s).**`;
  const message = current_stamina === max_stamina
    ? `\nSua reserva está enchendo: **${current_reserve_stamina}/2400**`
    : `Sua stamina vai ficar **${max_stamina}/${max_stamina}** em ` + time;

  return message;
}