import { FormRequest, IFormResponse, IForm, IFormData, IRow, IValue } from 'e1-service';

export interface IExValue extends IValue {
    assocDesc: string;
}

export interface IAbRevisionFormData extends IFormData<IRow> {
    txtAlphaName_28: IValue;
    txtAddressNumber_21: IValue;
    txtMailingName_38: IValue;
    txtSearchType_36: IExValue;
    txtABN_34: IValue;
    txtAddressLine3_44: IValue;
    txtAddressLine2_42: IValue;
    txtAddressLine1_40: IValue;
    txtCountry_56: IExValue;
    txtState_54: IExValue;
    txtCity_52: IValue;
    txtPostalCode_50: IValue;
    txtBusinessUnit_62: IExValue;
}

export interface IAbRevisionResponse extends IFormResponse {
    fs_P01012_W01012A: IForm<IAbRevisionFormData>
}

export class AbRevisionRequest extends FormRequest {
    constructor(ab: string) {
        super();
        this.formName = 'P01012_W01012A';
        this.formServiceAction = 'R';
        this.formInputs = [
            {
                id: '12',
                value: ab
            }
        ];
    }
}
