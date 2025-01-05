import { LoginError } from './interface';

const ErrorMessage: React.FC<LoginError> = (err) => {
    let errorMessage: string;
     if (err) {
            const loginError = err as LoginError;
            // console.error("Login failed", loginError);
    
            errorMessage = "An unknown error occurred, please try again.";
    
            if (loginError.status === 400) {
              errorMessage =
                "Invalid credentials. Please check your username and password.";
            } else if (loginError.status === 401) {
              errorMessage =
                "Unauthorized access. Please check your login credentials.";
            } else if (loginError.status === 500) {
              errorMessage = "Server error. Please try again later.";
            } else if (loginError.data?.message) {
              errorMessage = loginError.data.message;
            }
         
         
          } else {
            console.error("Unexpected error", err);
            errorMessage ="An unexpected error occurred.";
          }
          return errorMessage
 
}

export default ErrorMessage