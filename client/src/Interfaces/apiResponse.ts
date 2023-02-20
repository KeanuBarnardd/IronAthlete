export default interface apiResponse {
  data?: {
    statusCode?: number;
    isSuccess?: boolean;
    errorMessages?: Array<string>;
    result: {
      // This will not give suggestions
      [key: string]: string;
    };
  };
  error?: any;
}
