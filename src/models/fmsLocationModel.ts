export interface FMSLocationMain {
    fmslocation_list: FMSLocationList[];
    single_fmslocation?: FMSLocationList;
  }
  
  export interface FMSLocationList {
    createdAt: any;
    created_at: any;
    created_by: any;
    updatedAt: any;
    updated_at: any;
    updated_by: any;
    fmslocation_code: string;
    fmslocation_desc: string;
    fmslocation_id: number;
    fmslocation_name: string;
    fmslocation_status: string;
  }
  
  export interface AddFMSLocation {
    fmslocation_code: string;
    fmslocation_name: string;
    fmslocation_desc: string;
  }
  