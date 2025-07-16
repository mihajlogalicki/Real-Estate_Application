import { IPropertyBase } from "./IPropertyBase";

export class Property implements IPropertyBase {
    PropertyType: number;
    FurnishingType: string;
    RealEstateType: number;
    TotalArea: number;
    Id: number;
    Name: string;
    Price: number;
    CarpetArea?: number;
    Address: string;
    Address2?: string;
    City: string;
    FloorNo?: string;
    TotalFloor?: string;
    RTM: number;
    AOP?: string;
    MainEntrance?: string;
    Security?: number;
    Gated?: number;
    Maintenance?: number;
    Possession?: string;
    Image?: string;
    Description?: string;
    PostedOn: string;
    PostedBy: number;
}