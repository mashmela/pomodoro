import { sendApiRequest } from "./apiRequest";

const API_BASE = import.meta.env.VITE_BASE_API;

export const usersApi = {
  updatePassword: async (oldPassword: string, newPassword: string) => {
    return await sendApiRequest<{ success: boolean; message: string }>(`${API_BASE}/api/users/password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ oldPassword, newPassword }),
    });
  },
};
