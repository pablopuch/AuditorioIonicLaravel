import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  token = null;

  constructor(private storage: Storage) {
    
  }

  async getToken() {
    return this.token =await this.storage.get("access_token");
  }

  setToken(token) {
    return this.token = token;
  }
}
