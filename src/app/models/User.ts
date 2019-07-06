export interface User {
  firstname: string;
  lastname: string;
  // age?: number;
  // address?: {
  //   street?: string;
  //   city?: string;
  //   state?: string;
  // };
  email: string;
  isActive?: boolean;
  registered?: any;
  hide?: boolean;
}
