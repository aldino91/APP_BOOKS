import {useQuery} from '@tanstack/react-query';
import {getAllBooks} from '../http-functions/httpApi';

export default function UseGetAllBooksQuery() {
  const {data, isLoading, error} = useQuery({
    queryKey: ['books'],
    queryFn: getAllBooks,
    refetchOnMount: 'always',
  });

  return {data, isLoading, error};
}
