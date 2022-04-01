export interface StationMain {
    zone_list: StationList[];
  }
  
  export interface StationList {
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
  }
  
  export interface AddStation {
    zone_code: string;
    zone_name: string;
    zone_desc: string;
  }
  