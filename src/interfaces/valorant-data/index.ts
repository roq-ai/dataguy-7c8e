import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ValorantDataInterface {
  id?: string;
  data: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface ValorantDataGetQueryInterface extends GetQueryInterface {
  id?: string;
  data?: string;
  organization_id?: string;
}
