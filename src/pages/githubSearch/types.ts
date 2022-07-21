/**
 * github返回数组接口
 */

export interface userProps {
  avatar_url: string;
  html_url: string;
  id: number;
  login: string;
}

export interface errProps {
  message: string;
}

export interface dataProps {
  users?: userProps[];
  isFirst?: boolean;
  loading?: boolean;
  err?: errProps;
}
