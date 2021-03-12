export type User = {
  id: string;
  name: string;  
}

export interface AuthenticatedPageProps {
  token: string;
  user: User;
}