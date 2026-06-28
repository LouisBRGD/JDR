import { Injectable } from '@angular/core';
import { supabase } from '../supabase/supabase';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  async getProfile(id: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  }
}