export const basicFetch = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(endpoint, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error('Error');
  }

  const data = await response.json();

  return data;
};
