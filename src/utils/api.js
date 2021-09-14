export const customFetch = (
  endpoint,
  options = {},
  { onSuccess, onFail } = {}
) => {
  const opts = {
    method: 'GET',
    ...options,
  };

  return fetch(endpoint, opts)
    .then(res => res.json())
    .then(res => onSuccess && onSuccess(res))
    .catch(err => onFail && onFail(err));
};
