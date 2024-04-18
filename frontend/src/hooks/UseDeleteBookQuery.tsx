import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteBook} from '../http-functions/httpApi';

export default function UseDeleteBookQuery() {
  const queryClient = useQueryClient();
  const {error, isPending, mutate} = useMutation({
    mutationFn: (id: string) => deleteBook(id),
    onSuccess: () => {
      console.log('libro eliminado con exito!');
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['books'],
      });
    },
  });

  return {error, isPending, mutate};
}
