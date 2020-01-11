export class ComodityItem {
  name: string;
  branch: string;
  type: string;
  count: number;
  totalPrice: number;
  wantTime: string;
  status: ItemStatus;
}

export enum ItemStatus {
  PURCHASED = '已购买', NOT_DETERMINED = '待定'
}
