import {useQuery} from '@tanstack/react-query';
import {getAllBooks} from '../http-functions/httpApi';

export default function UseGetAllBooksQuery() {
  const {data, isLoading, error, refetch} = useQuery({
    queryKey: ['books'],
    queryFn: getAllBooks,
    refetchOnWindowFocus: true,
  });

  return {data, isLoading, error, refetch};
}
