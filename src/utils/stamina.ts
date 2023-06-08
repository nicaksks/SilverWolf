export function staminaTime(currentStamina: number, maxStamina: number, remainingTime: number): string {
  const stamina: number = maxStamina - currentStamina;
  const time: number = Math.floor(remainingTime / 60);

  const seconds: number = time % 60;
  const minutes: number = Math.abs(Math.ceil((stamina - 1) * 6 - time));

  return minutes <= 0 ? `${seconds} segundos.`: `${minutes} minuto(s) e ${seconds} segundo(s).`;
}

export function staminaFull(seconds: number): string {;
  const hours: string = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const minutes: string = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  
  return parseInt(hours) <= 0 ? `${minutes} minuto(s)` : `${hours} hora(s) e ${minutes} minuto(s).`;
}