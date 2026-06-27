export interface Character {
  id: string;
  userId: string;
  name: string;
  role: string;
  hp: number;
  maxHp: number;
  strength: number;
  charisma: number;
  agility: number;
  intelligence: number;
  resistance: number;
  inventory: string[];
  notes: string;
}