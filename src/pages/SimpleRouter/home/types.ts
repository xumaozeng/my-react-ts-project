/**
 * message的属性
 */

export interface messageProps {
  id?: string;
  title?: string;
}

export interface detailProp extends messageProps {
  content: string;
}
