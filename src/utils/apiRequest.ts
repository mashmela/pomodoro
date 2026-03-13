import { ApiResponseInterface } from "types/apiTypes";

export async function sendApiRequest<ResponseType>(
  url: string,
  options: RequestInit,
): Promise<ApiResponseInterface<ResponseType>> {
  const response = await fetch(url, options);

  try {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: "Ошибка в запросе" }));
      return { ok: false, message: errorData.error };
    }

    const data = await response.json();
    return { ok: true, data };
  } catch (error) {
    const message = error instanceof Error ? error.message : null;
    return { ok: false, message: message || "Ошибка в запросе" };
  }
}
