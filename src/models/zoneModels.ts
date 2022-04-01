export interface ZoneMain {
  zone_list: ZoneList[];
  single_zone?: ZoneList;
}

export interface ZoneList {
  createdAt: any;
  created_at: any;
  created_by: any;
  updatedAt: any;
  updated_at: any;
  updated_by: any;
  zone_code: string;
  zone_desc: string;
  zone_id: number;
  zone_name: string;
  zone_status: string;
}

export interface AddZone {
  zone_code: string;
  zone_name: string;
  zone_desc: string;
}
