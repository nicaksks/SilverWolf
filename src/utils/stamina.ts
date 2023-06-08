export function staminaTime(currentStamina: number, maxStamina: number, remainingTime: number): string {
  const stamina: number = maxStamina - currentStamina;
  const rTime: number = Math.floor(remainingTime / 60);

  const seconds: number = rTime % 60;
  const minutes: number = Math.abs(Math.ceil((stamina - 1) * 6 - rTime));

  const time: string = minutes <= 0 ? `**${seconds} segundos.**` : `**${minutes} minuto(s) e ${seconds} segundo(s).**`;
  let message: string = '';
  currentStamina === maxStamina ? message = 'Stamina cheia! Entre no jogo e gaste toda sua stamina.' : message = `Você vai receber mais um ponto de stamina em ${time}`;

  return message;
}

export function staminaFull(seconds: number, currentStamina: number, maxStamina: number): string {
  const hours: string = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const minutes: string = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');

  const time: string = parseInt(hours) <= 0 ? `**${minutes} minuto(s)**.` : `**${hours} hora(s) e ${minutes} minuto(s).**`;
  let message: string = '';
  currentStamina === maxStamina ? message = '' : message = `Sua stamina vai ficar **${maxStamina}/${maxStamina}** em ` + time;

  return message;
}