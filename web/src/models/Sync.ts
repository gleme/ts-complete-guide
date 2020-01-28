import axios, { AxiosInstance, AxiosPromise } from 'axios';

export interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {

  private httpClient: AxiosInstance;

  constructor(baseURL: string) {
    this.httpClient = axios.create({
      baseURL: baseURL
    });
  }

  fetch(id: number): AxiosPromise<T> {
    return this.httpClient.get(`/users/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id }  = data;
    if (id) {
      return axios.put(`/users/${id}`, data);
    } else {
      return axios.post('/users', data);
    }

  }

}