import {useMutation, useQueryClient} from '@tanstack/react-query';
import {updateBook} from '../http-functions/httpApi';
import {UpdateBook} from '../pages/EditBook';

export function useUpdateBookQuery() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateBook) => updateBook(data),
    onSettled: async (_, error, variables) => {
      await queryClient.invalidateQueries({queryKey: ['book']});
      await queryClient.invalidateQueries({
        queryKey: ['book', {id: variables.id}],
      });
      await queryClient.invalidateQueries({queryKey: ['books']});
    },
  });
}
