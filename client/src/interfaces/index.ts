export interface UserDetails {
    username: string;
    password: string;
}

export type userDetailsResponse = Pick<UserDetails, 'username'> &  {
    id: number
}