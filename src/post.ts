interface IRequestType<T> {
  toJSON: (data: T) => unknown;
}

interface IResponseType<S> {
  fromJSON: (data: any) => S;
}

export default function post<T, S>(
  url: string,
  data?: T,
  requestType?: IRequestType<T>,
  responseType?: IResponseType<S>,
): Promise<S> {
  return fetch(url, {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: requestType && data ? JSON.stringify(requestType.toJSON(data)) : null,
    credentials: "include",
  })
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        throw result.error;
      }
      return responseType?.fromJSON(result) ?? result as S;
    })
    .catch(error => {
      throw error;
    });
}