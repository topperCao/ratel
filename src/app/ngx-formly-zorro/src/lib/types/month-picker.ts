import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { useDefaultIfUnset } from '../utils';

@Component({
    selector: 'formly-field-antd-month-picker',
    template: `
        <nz-month-picker
            [formControl]="formControl"
            [formlyAttributes]="field"
            [class.ng-dirty]="showError"
            [nzAllowClear]="nzAllowClear"
            [nzAutoFocus]="nzAutoFocus"
            [nzClassName]="nzClassName"
            [nzDisabled]="nzDisabled"
            [nzDisabledDate]="nzDisabledDate"
            [nzLocale]="nzLocale"
            [nzPopupStyle]="nzPopupStyle"
            [nzDropdownClassName]="nzDropdownClassName"
            [nzSize]="nzSize"
            [nzStyle]="nzStyle"
            [nzFormat]="nzFormat"
            [nzRenderExtraFooter]="nzRenderExtraFooter"
            [nzPlaceHolder]="nzPlaceHolder"
        ></nz-month-picker>
    `,
})
export class FormlyFieldMonthPicker extends FieldType {
    get nzAllowClear() {
        return this.to!.nzAllowClear;
    }

    get nzAutoFocus() {
        return this.to!.nzAutoFocus;
    }

    get nzClassName() {
        return this.to!.nzClassName;
    }

    get nzDisabled() {
        return this.to!.nzDisabled;
    }

    get nzDisabledDate() {
        return useDefaultIfUnset(this.to!.nzDisabledDate, () => false);
    }

    get nzLocale() {
        return this.to!.nzLocale;
    }

    /**
     * TODO: Temporary does not support;
     */
    // get nzOpen() {
    //     return this.to!.nzOpen;
    // }

    get nzPopupStyle() {
        return this.to!.nzPopupStyle;
    }

    get nzDropdownClassName() {
        return this.to!.nzDropdownClassName;
    }

    get nzSize() {
        return this.to!.nzSize;
    }

    get nzStyle() {
        return this.to!.nzStyle;
    }

    get nzFormat() {
        return useDefaultIfUnset(this.to!.nzFormat, 'YYYY-MM');
    }

    get nzRenderExtraFooter() {
        return this.to!.nzRenderExtraFooter;
    }

    get nzPlaceHolder() {
        return this.to!.nzPlaceHolder;
    }
}
