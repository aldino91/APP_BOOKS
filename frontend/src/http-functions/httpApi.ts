import axios from 'axios';
import {Book} from '../pages/AddBook';
import {UpdateBook} from '../pages/EditBook';
import {APP_API_URL} from '../environments/env';

export const getAllBooks = async () => {
  const url = `${APP_API_URL}api/books`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('getAllBooks GET request:', error);
    throw error;
  }
};

export const getBookById = async (id: string) => {
  const url = `${APP_API_URL}api/book/${id}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postAddBook = async (data: Book) => {
  try {
    const url = `${APP_API_URL}api/books`;
    const response = await axios.post(url, data);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteBook = async (id: string) => {
  const url = `${APP_API_URL}api/book/${id}`;
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateBook = async (data: UpdateBook) => {
  try {
    const url = `${APP_API_URL}api/books/${data.id}`;
    const response = await axios.put(url, data);
    return response.data;
  } catch (error) {
    return error;
  }
};
