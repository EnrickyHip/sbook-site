import { FetchReponse } from '@/domain/responses/FetchResponse';
import { getCookie } from '@/utils/getCookie';
import { getCookiesFromContext } from '@/utils/getCookiesFromContext';
import { GetServerSidePropsContext } from 'next';

type Headers = Record<string, string>;
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type RequestBody = {
  [key: string]: unknown;
};

type RequestOptions = {
  method: RequestMethod;
  body?: RequestBody | FormData;
  headers?: Headers;
};

export const requestApi = async <ResponseType>(
  route: string,
  options: RequestOptions,
  context?: GetServerSidePropsContext,
): Promise<ResponseType | null> => {
  try {
    const headers: Headers = {
      ...options.headers,
      'Content-Type': 'application/json',
    };

    const body = options.body instanceof FormData ? options.body : JSON.stringify(options.body);

    if (context) {
      const cookies = getCookiesFromContext(context);
      headers.Cookie = cookies;
      headers['X-CSRFToken'] = getCookie('csrftoken', cookies) ?? '';
    } else {
      headers['X-CSRFToken'] = getCookie('csrftoken') ?? '';
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
