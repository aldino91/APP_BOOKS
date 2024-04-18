import {useMutation, useQueryClient} from '@tanstack/react-query';
import {postAddBook} from '../http-functions/httpApi';
import {Book} from '../pages/AddBook';

export default function UseAddNewBookQuery() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Book) => postAddBook(data),
    onMutate: () => console.log('libro añadido con exito!'),
    onError: () => console.log('problemas para añadir libro!'),
    onSettled: async () => {
      await queryClient.invalidateQueries({queryKey: ['books']});
    },
  });
}
