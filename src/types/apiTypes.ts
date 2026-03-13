interface SuccessApiResponseInterface<ResponseType> {
  ok: true;
  data: ResponseType;
}

interface ErrorApiResponseInterface {
  ok: false;
  message: string;
}

export type ApiResponseInterface<ResponseType> = SuccessApiResponseInterface<ResponseType> | ErrorApiResponseInterface;
