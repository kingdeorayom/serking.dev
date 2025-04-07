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

export const useAddEntry = () => {
    const queryClient = useQueryClient();

    const { isPending: isAddEntryLoading, mutate: addEntry } = useMutation({
        mutationFn: actions.addEntry,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["entries"] });
        },
        onError: (error) => {
            const errorMessage =
                error.response?.data?.message ||
                "Oops! Something went wrong. Please try again later.";
            alert(errorMessage);

            // Log the error for debugging or tracking purposes
            console.error("Error adding entry:", errorMessage);
        },
    });
    return { isAddEntryLoading, addEntry };
};
