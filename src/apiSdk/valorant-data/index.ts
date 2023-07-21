import axios from 'axios';
import queryString from 'query-string';
import { ValorantDataInterface, ValorantDataGetQueryInterface } from 'interfaces/valorant-data';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getValorantData = async (
  query?: ValorantDataGetQueryInterface,
): Promise<PaginatedInterface<ValorantDataInterface>> => {
  const response = await axios.get('/api/valorant-data', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createValorantData = async (valorantData: ValorantDataInterface) => {
  const response = await axios.post('/api/valorant-data', valorantData);
  return response.data;
};

export const updateValorantDataById = async (id: string, valorantData: ValorantDataInterface) => {
  const response = await axios.put(`/api/valorant-data/${id}`, valorantData);
  return response.data;
};

export const getValorantDataById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/valorant-data/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteValorantDataById = async (id: string) => {
  const response = await axios.delete(`/api/valorant-data/${id}`);
  return response.data;
};
