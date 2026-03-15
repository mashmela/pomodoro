import { SettingsInterface } from "types/userTypes";

import { sendApiRequest } from "./apiRequest";

const API_BASE = import.meta.env.VITE_BASE_API;

export const settingsApi = {
  getSettings: async () => {
    return await sendApiRequest<SettingsInterface>(`${API_BASE}/api/settings`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  updateSettings: async (settings: SettingsInterface) => {
    return await sendApiRequest<SettingsInterface>(`${API_BASE}/api/settings`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(settings),
    });
  },
};
