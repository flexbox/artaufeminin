import { format } from "date-fns";
import fr from "date-fns/locale/fr"

export function formatHumanDate(date: string){
  return format(new Date(date), "PPPP", { locale: fr })
}
