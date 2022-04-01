export interface StationMain {
  station_list: StationList[];
  single_station?: StationList;
}

export interface StationList {
  station_id: number;
  station_code: string;
  station_name: string;
  lattitude: number;
  longitude: number;
  station_address: string;
  station_type: string;
  zone_id: number;
  created_at?: Date;
  created_by?: string;
  updated_at?: any;
  updated_by?: string;
  station_status?: string;
}

export interface AddStation {
  station_code: string;
  station_name: string;
  lattitude: number;
  longitude: number;
  station_address: string;
  station_type: string;
  zone_id: number;
}
