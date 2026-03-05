export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'user';
  token?: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
}

export interface Puzzle {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  solution: string;
}
