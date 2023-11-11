import { FetchReponse } from '@/domain/responses/FetchResponse';
import { getCookiesFromContext } from '@/utils/getCookiesFromContext';
import { GetServerSidePropsContext } from 'next';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type RequestBody = {
  [key: string]: unknown;
};

type RequestOptions = {
  method: RequestMethod;
  body?: RequestBody | FormData;
  headers?: HeadersInit;
};

export const requestApi = async <ResponseType extends FetchReponse>(
  route: string,
  options: RequestOptions,
  context?: GetServerSidePropsContext,
): Promise<ResponseType | null> => {
  try {
    const headers = {
      ...options.headers,
      'Content-Type': 'application/json',
      Cookie: '',
    };

    const body = options.body instanceof FormData ? options.body : JSON.stringify(options.body);

    if (context) {
      headers.Cookie = getCookiesFromContext(context);
    }

    const url = process.env.NEXT_PUBLIC_API_URL + route;
    const response = await fetch(url, {
      method: options.method,
      body: body,
      credentials: 'include',
      headers: headers,
    });

    return await response.json();
  } catch (error) {
    if (process.env.NEXT_PUBLIC_APP_URL === 'http://127.0.0.1:8000') throw error;
    return null;
  }
};
