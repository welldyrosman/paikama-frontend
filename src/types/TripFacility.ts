import type Facility from "./Facility";

export default interface TripFacility{
    id: number,
    trip_package_id:number,
    facility:Facility,
    is_include: boolean,

  }