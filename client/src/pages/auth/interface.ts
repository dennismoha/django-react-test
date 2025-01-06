export interface LoginError {
    status: number; // HTTP status code (e.g., 400, 401, 500)
    data: {
      message: string; // Error message from the backend as per django
    };
  }
  