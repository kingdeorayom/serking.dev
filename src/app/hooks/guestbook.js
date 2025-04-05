import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as actions from "@/server/guestbook";

export const useGetEntries = () => {
    const { data, isLoading, error, refetch, status } = useQuery({
        queryKey: ["entries"],
        queryFn: actions.getEntries,
    });
    return {
        entries: data,
        isGetEntriesLoading: isLoading,
        isGetEntriesError: error,
        refetch,
        status,
    };
};

// // Add user mutation
// export const useAddUser = () => {
//   const queryClient = useQueryClient();

//   return useMutation(actions.addUser, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(["entries"]); // Refetch entries after adding
//     },
//   });
// };
