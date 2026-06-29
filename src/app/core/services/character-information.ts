import { Injectable } from '@angular/core';
import { supabase } from '../supabase/supabase';

@Injectable({
  providedIn: 'root'
})
export class CharacterInformationService {

  async getByCharacterId(characterId: string) {
    const { data, error } = await supabase
      .from('character_information')
      .select('*')
      .eq('character_id', characterId)
      .single();

    if (error) {
      throw error;
    }

    return data;
  }
}