import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { HasId } from './Model';

export class ApiSync<T extends HasId> {

  private httpClient: AxiosInstance;

  constructor(baseURL: string) {
    this.httpClient = axios.create({
      baseURL
    });
  }

  fetch(id: number): AxiosPromise<T> {
    return this.httpClient.get(`/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id }  = data;
    if (id) {
      return axios.put(`/${id}`, data);
    } else {
      return axios.post('/', data);
    }

  }

}