export interface StackItemData {
  id: string;
  name: string;
  imageSrc: string;
  link: string;
}

export interface StackGroupData {
  name: string;
  children: StackItemData[];
}
