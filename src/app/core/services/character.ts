import { Injectable } from '@angular/core';
import { supabase } from '../supabase/supabase';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  async getCharactersByProfileId(profileId: string) {
    const { data, error } = await supabase
      .from('characters')
      .select('*')
      .eq('user_id', profileId);
    
      console.log('profileId envoyé:', profileId);
      console.log('data characters:', data);
      console.log('error characters:', error);

    if (error) {
      throw error;
    }

    return data;
  }
}