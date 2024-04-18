import {useQuery} from '@tanstack/react-query';
import {getBookById} from '../http-functions/httpApi';

export default function UseGetBookByIdQuery(id: string) {
  const {data, isLoading, error} = useQuery({
    queryKey: ['book', id],
    queryFn: () => getBookById(id),
    refetchOnMount: true,
  });

  return {data, isLoading, error};
}
